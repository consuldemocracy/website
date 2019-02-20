$(document).ready(function () {
  $.getJSON("/organizations.geojson", function (orgs){
    orgs.features.forEach(function (org) {
      org.properties.icon = {
          className: 'marker',
          iconUrl: '/assets/images/map/marker-icon.png',
          iconSize: [24,24],
          iconAnchor: [12, 12]
      };
    });
    showMap(orgs);
  });


  function hasMatch(feature, collection) {
    collection.filter(function (a) {
      return a.id.toLowerCase() == feature.id.toLowerCase;
    })[0];
  }
  function showMap(orgs) {
    // codeforamerica.j113mi4d - code for all
    // codeforamerica.map-hhckoiuj - brigade
    var worldLayer;
    var latlon = [23, 0], zoom = 2;

    if(window.innerWidth <= 576) {
      latlon = [0, 0];
      zoom = 0.5;
    }

    var options = { dragging: true, scrollWheelZoom: false }

    if (window.innerWidth < 1024) {
      options = { dragging: false, scrollWheelZoom: false }
    }

    var map = L.map('map', options).setView(latlon, zoom);

    function iconOptions(feature) {
      return Object.assign(options, { icon: L.icon(feature.properties.icon), title: feature.properties.name });
    };

    function worldStyle(feature) {
      var fillcolor = "#f5f7fc";

      return {
        fillColor: fillcolor,
        weight: 2,
        opacity: 1,
        color: '#ccc',
        fillOpacity: 1
      };
    };

    function zoomToFeature(e) {
      var layer = e.target;
      $('#map-info').text(layer.feature.properties.name);
      if (layer.feature.id) {
        $('#' + layer.feature.id.toLowerCase()).addClass("map-highlight");
      } else {
        map.fitBounds(layer.getBounds());
        if($("." + layer.feature.properties.iso2).length > 0) {
          $('.org-card').hide();
          $("." + layer.feature.properties.iso2).show();
        } else {
          $('.org-card').show();
        }
        
      }
    }

    function resetHighlight(e) {
      var layer = e.target;
      worldLayer.resetStyle(layer);
      if (layer.feature.id) {
        $('#' + layer.feature.id.toLowerCase()).removeClass("map-highlight");
      }
      $('#map-info').html("&nbsp;");
    }

    function highlightFeature(e) {
      var layer = e.target;
      if (layer.feature.id) {
        $('#' + layer.feature.id).clone().appendTo("#map-info");
      } else {
        layer.setStyle({
          color: '#00a8e1'
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
        }
      }
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    // Add the worldmap
    $.getJSON(base_url + 'worldmap.geojson', function (response) {
      worldLayer = L.geoJSON(response, { 
        style: worldStyle, 
        onEachFeature: onEachFeature 
      }).addTo(map);
    });

    featureLayer = L.geoJSON(orgs, {
      pointToLayer: function (feature, latlng) {
        if(feature.properties.consul_website){
          return L.marker(latlng, iconOptions(feature)).on('click', () => {window.open(feature.properties.consul_website)});
        } else {
          return L.marker(latlng, iconOptions(feature));
        }
      }, onEachFeature: onEachFeature
    }).addTo(map);
  };

});
