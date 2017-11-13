// Other tiles themes
// ==================
// https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png
// http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}
// http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png
// http://tile.stamen.com/toner/{z}/{x}/{y}.png
// http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg
// http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg

var mymap = L.map('mapid', { zoomControl: false }).setView([33.58,-25.59], 2);

var baselayer = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg').addTo(mymap);
var topLayer = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png',
                {
                opacity: 0.30}).addTo(mymap);


// Adds fullscreen button
var zoomFS = new L.Control.ZoomFS();
mymap.addControl(zoomFS);

// Adds select with location list
var llist = L.control.locationlist();
mymap.addControl(llist);

// Add view center button
var viewCenter = new L.Control.ViewCenter();
mymap.addControl(viewCenter);

// List of markers on the map
// ==========================

// Ayuntamiento de A Coruña
var a_coruna = L.marker([43.365738, -8.410968]).addTo(mymap);
    a_coruna.bindTooltip("<strong>Ayuntamiento de A Coruña</strong>");
    a_coruna.bindPopup("<strong>Ayuntamiento de A Coruña</strong><br><a href='https://aportaaberta.coruna.es/?locale=es' target='_blank'>Visitar página</a><br><a href='https://github.com/ConcelloCoruna/aportaaberta'>Código en github</a>");

// Ayuntamiento de Alicante
var alicante = L.marker([38.345996, -0.490686]).addTo(mymap);
    alicante.bindTooltip("<strong>Ayuntamiento de Alicante</strong>");
    alicante.bindPopup("<strong>Ayuntamiento de Alicante</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Arona
var arona = L.marker([28.099950, -16.679977]).addTo(mymap);
    arona.bindTooltip("<strong>Ayuntamiento de Arona</strong>");
    arona.bindPopup("<strong>Ayuntamiento de Arona</strong><br><span>Preparando lanzamiento</span>");

// Ajuntament de Barcelona
var barcelona = L.marker([41.385064, 2.173403]).addTo(mymap);
    barcelona.bindTooltip("<strong>Ajuntament de Barcelona</strong>");
    barcelona.bindPopup("<strong>Ajuntament de Barcelona</strong><br><a href='https://decidim.barcelona/?locale=es' target='_blank'>Visitar página</a><br><a href='https://github.com/AjuntamentdeBarcelona/decidim.barcelona'>Código en github</a>");

// Ayuntamiento de Benalmádena
var benalmadena = L.marker([36.598797, -4.516806]).addTo(mymap);
    benalmadena.bindTooltip("<strong>Ayuntamiento de Benalmádena</strong>");
    benalmadena.bindPopup("<strong>Ayuntamiento de Benalmádena</strong><br><a href='https://benalmadenaparticipa.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Buñol
var bunol = L.marker([39.420344, -0.790133]).addTo(mymap);
    bunol.bindTooltip("<strong>Ayuntamiento de Buñol</strong>");
    bunol.bindPopup("<strong>Ayuntamiento de Buñol</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Cádiz
var cadiz = L.marker([36.527061, -6.288596]).addTo(mymap);
    cadiz.bindTooltip("<strong>Ayuntamiento de Cádiz</strong>");
    cadiz.bindPopup("<strong>Ayuntamiento de Cádiz</strong><br><span>Preparando lanzamiento</span>");

// Ajuntament de Calvià
var calvia =  L.marker([39.565348, 2.503368]).addTo(mymap);
    calvia.bindTooltip("<strong>Ajuntament de Calvià</strong>");
    calvia.bindPopup("<strong>Ajuntament de Calvià</strong><br><a href='https://www.participacalvia.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Carreño
var carreno =  L.marker([43.361395, -5.859327]).addTo(mymap);
    carreno.bindTooltip("<strong>Ayuntamiento de Carreño</strong>");
    carreno.bindPopup("<strong>Ayuntamiento de Carreño</strong><br><a href='https://decide.carreno.es/' target='_blank'>Visitar página</a>");

// Ajuntament de Castelló
var castellon_plana = L.marker([39.986356, -0.051325]).addTo(mymap);
    castellon_plana.bindTooltip("<strong>Ajuntament de Castelló</strong>");
    castellon_plana.bindPopup("<strong>Ajuntament de Castelló</strong><br><a href='https://decidim.castello.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Chiloeches
var chiloeches =  L.marker([40.5806832, -3.1880082999999786]).addTo(mymap);
    chiloeches.bindTooltip("<strong>Ayuntamiento de Chiloeches</strong>");
    chiloeches.bindPopup("<strong>Ayuntamiento de Chiloeches</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Ciempozuelos
var ciempozuelos =  L.marker([40.1402985, -3.611649400000033]).addTo(mymap);
    ciempozuelos.bindTooltip("<strong>Ayuntamiento de Ciempozuelos</strong>");
    ciempozuelos.bindPopup("<strong>Ayuntamiento de Ciempozuelos</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Getafe
var getafe =  L.marker([40.3082633, -3.7325855000000274]).addTo(mymap);
    getafe.bindTooltip("<strong>Ayuntamiento de Getafe</strong>");
    getafe.bindPopup("<strong>Ayuntamiento de Getafe</strong><br><a href='https://participa.getafe.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Golmayo
var golmayo = L.marker([41.7086972, -2.7182728000000225]).addTo(mymap);
    golmayo.bindTooltip("<strong>Ayuntamiento de Golmayo</strong>");
    golmayo.bindPopup("<strong>Ayuntamiento de Golmayo</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Huesca
var huesca =  L.marker([42.13618419999999, -0.4082190999999966]).addTo(mymap);
    huesca.bindTooltip("<strong>Ayuntamiento de Huesca</strong>");
    huesca.bindPopup("<strong>Ayuntamiento de Huesca</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Madrid
var madrid =  L.marker([40.4167754, -3.7037901999999576]).addTo(mymap);
    madrid.bindTooltip("<strong>Ayuntamiento de Madrid</strong>");
    madrid.bindPopup("<strong>Ayuntamiento de Madrid</strong><br><a href='https://decide.madrid.es' target='_blank'>Visitar página</a><br><a href='https://github.com/AyuntamientoMadrid/consul'>Código en github</a>");

// Ayuntamiento de Oviedo
var oviedo =  L.marker([43.3619145, -5.848425328731537]).addTo(mymap);
    oviedo.bindTooltip("<strong>Ayuntamiento de Oviedo</strong>");
    oviedo.bindPopup("<strong>Ayuntamiento de Oviedo</strong><br><a href='http://www.consultaoviedo.es/' target='_blank'>Visitar página</a>");

// Ajuntament de Palma de Mallorca
var palma_mallorca =  L.marker([39.5696005, 2.6501603000000387]).addTo(mymap);
    palma_mallorca.bindTooltip("<strong>Ajuntament de Palma de Mallorca</strong>");
    palma_mallorca.bindPopup("<strong>Ajuntament de Palma de Mallorca</strong><br><span>Preparando lanzamiento</span>");

// París (Budget participatif de la RIVP)
var paris = L.marker([48.85661400000001, 2.3522219000000177]).addTo(mymap);
    paris.bindTooltip("<strong>París (Budget participatif de la RIVP)</strong>");
    paris.bindPopup("<strong>París (Budget participatif de la RIVP)</strong><br><a href='https://budget-participatif.rivp.fr/budgets' target='_blank'>Visitar página</a>");

// Ayuntamiento de Rivas-Vaciamadrid
var rivas_vaciamadrid = L.marker([40.34696510000001, -3.530676500000027]).addTo(mymap);
    rivas_vaciamadrid.bindTooltip("<strong>Ayuntamiento de Rivas-Vaciamadrid</strong>");
    rivas_vaciamadrid.bindPopup("<strong>Ayuntamiento de Rivas-Vaciamadrid</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de San Sebastián de los Reyes
var san_sebastian_reyes = L.marker([40.5589672, -3.6261976000000686]).addTo(mymap);
    san_sebastian_reyes.bindTooltip("<strong>Ayuntamiento de San Sebastián de los Reyes</strong>");
    san_sebastian_reyes.bindPopup("<strong>Ayuntamiento de San Sebastián de los Reyes</strong><br><span>Preparando lanzamiento</span>");

// Ajuntament de Sitges
var sitges =  L.marker([41.2558303, 1.8611011000000417]).addTo(mymap);
    sitges.bindTooltip("<strong>Ajuntament de Sitges</strong>");
    sitges.bindPopup("<strong>Ajuntament de Sitges</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Talamanca del Jarama
var talamanca = L.marker([40.73418429999999, -3.4902391000000534]).addTo(mymap);
    talamanca.bindTooltip("<strong>Ayuntamiento de Talamanca del Jarama</strong>");
    talamanca.bindPopup("<strong>Ayuntamiento de Talamanca del Jarama</strong><br><span>Preparando lanzamiento</span>");

// Ajuntament de Tarragona
var tarragona = L.marker([41.1188827, 1.2444908999999598]).addTo(mymap);
    tarragona.bindTooltip("<strong>Ajuntament de Tarragona</strong>");
    tarragona.bindPopup("<strong>Ajuntament de Tarragona</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Toledo
var toledo =  L.marker([39.86283160000001, -4.02732309999999]).addTo(mymap);
    toledo.bindTooltip("<strong>Ayuntamiento de Toledo</strong>");
    toledo.bindPopup("<strong>Ayuntamiento de Toledo</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Valdemorillo
var valdemorillo =  L.marker([40.5030007, -4.049107700000036]).addTo(mymap);
    valdemorillo.bindTooltip("<strong>Ayuntamiento de Valdemorillo</strong>");
    valdemorillo.bindPopup("<strong>Ayuntamiento de Valdemorillo</strong><br><a href='https://aportaaberta.coruna.es/?locale=es' target='_blank'>Visitar página</a><br><a href='https://github.com/ConcelloCoruna/aportaaberta'>Código en github</a>");

// Ayuntamiento de Valencia
var valencia =  L.marker([39.4699075, -0.3762881000000107]).addTo(mymap);
    valencia.bindTooltip("<strong>Ayuntamiento de Valencia</strong>");
    valencia.bindPopup("<strong>Ayuntamiento de Valencia</strong><br><a href='https://decidimvlc.valencia.es/' target='_blank'>Visitar página</a>");

// Buenos Aires
var buenos_aries =  L.marker([-34.60368440000001, -58.381559100000004]).addTo(mymap);
    buenos_aries.bindTooltip("<strong>Buenos Aires</strong>");
    buenos_aries.bindPopup("<strong>Buenos Aires</strong><br><span>Preparando lanzamiento</span>");

// Cabildo de Gran Canaria
var gran_canaria =  L.marker([28.1235459, -15.436257399999931]).addTo(mymap);
    gran_canaria.bindTooltip("<strong>Cabildo de Gran Canaria</strong>");
    gran_canaria.bindPopup("<strong>Cabildo de Gran Canaria</strong><br><span>Preparando lanzamiento</span>");

// Consell de Mallorca
var mallorca_consell =  L.marker([39.5692762, 2.6497878999999784]).addTo(mymap);
    mallorca_consell.bindTooltip("<strong>Consell de Mallorca</strong>");
    mallorca_consell.bindPopup("<strong>Consell de Mallorca</strong><br><span>Preparando lanzamiento</span>");

// Diputación de Valencia
var valencia_diputacion = L.marker([39.4771151, -0.37681850000001305]).addTo(mymap);
    valencia_diputacion.bindTooltip("<strong>Diputación de Valencia</strong>");
    valencia_diputacion.bindPopup("<strong>Diputación de Valencia</strong><br><span>Preparando lanzamiento</span>");

// Mendoza
var mendoza = L.marker([-32.8894587, -68.84583859999998]).addTo(mymap);
    mendoza.bindTooltip("<strong>Mendoza</strong>");
    mendoza.bindPopup("<strong>Mendoza</strong><br><span>Preparando lanzamiento</span>");

// Nariño
var narino =  L.marker([1.289151, -77.35793999999999]).addTo(mymap);
    narino.bindTooltip("<strong>Nariño</strong>");
    narino.bindPopup("<strong>Nariño</strong><br><span>Preparando lanzamiento</span>");

// Universidad Complutense de Madrid
var universidad_complutense = L.marker([40.4478246, -3.7285871999999927]).addTo(mymap);
    universidad_complutense.bindTooltip("<strong>Universidad Complutense de Madrid</strong>");
    universidad_complutense.bindPopup("<strong>Universidad Complutense de Madrid</strong><br><span>Preparando lanzamiento</span>");

// La Libertad (Perú)
var mendoza = L.marker([-7.9637949, -78.8495556]).addTo(mymap);
    mendoza.bindTooltip("<strong>La Libertad (Perú)</strong>");
    mendoza.bindPopup("<strong>La Libertad (Perú)</strong><br><span>Preparando lanzamiento</span>");

// Ayuntamiento de Molina de Segura
var mendoza = L.marker([38.0591761, -1.2276177]).addTo(mymap);
    mendoza.bindTooltip("<strong>Ayuntamiento de Molina de Segura</strong>");
    mendoza.bindPopup("<strong>Ayuntamiento de Molina de Segura</strong><br><a href='https://decide.molinadesegura.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Puerto Real
var mendoza = L.marker([36.5310785, -6.1934328]).addTo(mymap);
    mendoza.bindTooltip("<strong>Ayuntamiento de Puerto Real</strong>");
    mendoza.bindPopup("<strong>Ayuntamiento de Puerto Real</strong><br><a href='https://decide.puertoreal.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Valladolid
var mendoza = L.marker([41.651113, -4.7273606]).addTo(mymap);
    mendoza.bindTooltip("<strong>Ayuntamiento de Valladolid</strong>");
    mendoza.bindPopup("<strong>Ayuntamiento de Valladolid</strong><br><a href='https://www10.ava.es/presupuestosparticipativos/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Zamora
var mendoza = L.marker([41.5038406, -5.7620456]).addTo(mymap);
    mendoza.bindTooltip("<strong>Ayuntamiento de Zamora</strong>");
    mendoza.bindPopup("<strong>Ayuntamiento de Zamora</strong><br><a href='https://zamoraparticipa.com/' target='_blank'>Visitar página</a>");
