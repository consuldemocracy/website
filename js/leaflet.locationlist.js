L.Control.LocationList = L.Control.extend({

	includes: L.Mixin.Events,

	options: {
		position: 'topright',
		showList: true,
		locationsList : [
		{title: 'Ayuntamiento de A Coruña', latlng: [43.365738, -8.410968], zoom: 6},
		{title: 'Ayuntamiento de Alicante', latlng: [38.345996, -0.490686], zoom: 6},
		{title: 'Ayuntamiento de Arona', latlng: [28.099950, -16.679977], zoom: 6},
		{title: 'Ajuntament de Barcelona', latlng: [41.385064, 2.173403], zoom: 6},
		{title: 'Ayuntamiento de Benalmádena', latlng: [36.598797, -4.516806], zoom: 6},
		{title: 'Ayuntamiento de Buñol', latlng: [39.420344, -0.790133], zoom: 6},
		{title: 'Ayuntamiento de Cádiz', latlng: [36.527061, -6.288596], zoom: 6},
		{title: 'Ajuntament de Calvià', latlng: [39.565348, 2.503368], zoom: 6},
		{title: 'Ayuntamiento de Carreño', latlng: [43.361395, -5.859327], zoom: 6},
		{title: 'Ajuntament de Castelló', latlng: [39.986356, -0.051325], zoom: 6},
		{title: 'Ayuntamiento de Chiloeches', latlng: [40.5806832, -3.1880082999999786], zoom: 6},
		{title: 'Ayuntamiento de Ciempozuelos', latlng: [40.1402985, -3.611649400000033], zoom: 6},
		{title: 'Ayuntamiento de Getafe', latlng: [40.3082633, -3.7325855000000274], zoom: 6},
		{title: 'Ayuntamiento de Golmayo', latlng: [41.7086972, -2.7182728000000225], zoom: 6},
		{title: 'Ayuntamiento de Huesca', latlng: [42.13618419999999, -0.4082190999999966], zoom: 6},
		{title: 'Ayuntamiento de Madrid', latlng: [40.4167754, -3.7037901999999576], zoom: 6},
		{title: 'Ayuntamiento de Oviedo', latlng: [43.3619145, -5.848425328731537], zoom: 6},
		{title: 'Ajuntament de Palma de Mallorca', latlng: [39.5696005, 2.6501603000000387], zoom: 6},
		{title: 'Ayuntamiento de Pamplona', latlng: [42.8125211, -1.645774500000016], zoom: 6},
		{title: 'París (Budget participatif de la RIVP)', latlng: [48.85661400000001, 2.3522219000000177], zoom: 6},
		{title: 'Ayuntamiento de Rivas-Vaciamadrid', latlng: [40.34696510000001, -3.530676500000027], zoom: 6},
		{title: 'Ayuntamiento de San Sebastián de los Reyes', latlng: [40.5589672, -3.6261976000000686], zoom: 6},
		{title: 'Ajuntament de Sitges', latlng: [41.2558303, 1.8611011000000417], zoom: 6},
		{title: 'Ayuntamiento de Talamanca del Jarama', latlng: [40.73418429999999, -3.4902391000000534], zoom: 6},
		{title: 'Ajuntament de Tarragona', latlng: [41.1188827, 1.2444908999999598], zoom: 6},
		{title: 'Ayuntamiento de Toledo', latlng: [39.86283160000001, -4.02732309999999], zoom: 6},
		{title: 'Ayuntamiento de Valdemorillo', latlng: [40.5030007, -4.049107700000036], zoom: 6},
		{title: 'Ayuntamiento de Valencia', latlng: [39.4699075, -0.3762881000000107], zoom: 6},
		{title: 'Buenos Aires', latlng: [-34.60368440000001, -58.381559100000004], zoom: 6},
		{title: 'Cabildo de Gran Canaria', latlng: [28.1235459, -15.436257399999931], zoom: 6},
		{title: 'Consell de Mallorca', latlng: [39.5692762, 2.6497878999999784], zoom: 6},
		{title: 'Diputación de Valencia', latlng: [39.4771151, -0.37681850000001305], zoom: 6},
		{title: 'Mendoza', latlng: [-32.8894587, -68.84583859999998], zoom: 6},
		{title: 'Nariño', latlng: [1.289151, -77.35793999999999], zoom: 6},
		{title: 'Universidad Complutense de Madrid', latlng: [40.4478246, -3.7285871999999927], zoom: 6}],
		nextText : '',
		nextTitle : 'Siguiente',
		prevText : '',
		prevTitle : 'Anterior'
	},

	onAdd: function (map) {

		if (!this.options.locationsList || this.options.locationsList.length <3) {
			console.log('Too short list! Maybe wrong');
		}

		this._map = map;

		var className = 'leaflet-control-locationlist', container;

		container = this._contentContainer = L.DomUtil.create('div', className);

		if (!L.Browser.touch) {
			L.DomEvent
				.disableClickPropagation(container)
				.disableScrollPropagation(container);
		} else {
			L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
		}

		this._currentLocation_index = 0;

		if (this.options.showList) {
			var form = this._form = L.DomUtil.create('form', className + '-form leaflet-bar');
			this._fullist = L.DomUtil.create('select', className + '-list', form);
			this._fullist.style.width = '100%';

			L.DomEvent
			.addListener(this._fullist, 'change', this._onListChange, this);

			container.appendChild(form);

			this._update();
		}

		arrowsContainer = L.DomUtil.create('div', className + '-arrows leaflet-bar', container);

		this._prevButton = this._createButton(this.options.prevText, this.options.prevTitle,
													className + '-arrow-prev', arrowsContainer, this._switchPrev, this);

		this._nextButton = this._createButton(this.options.nextText, this.options.nextTitle,
													className + '-arrow-next', arrowsContainer, this._switchNext, this);



		return container;

    },

	_onListChange: function (e) {

		this._currentLocation_index = this._fullist.selectedIndex;

		this._map.setView(this.options.locationsList[this._currentLocation_index].latlng, this.options.locationsList[this._currentLocation_index].zoom);
		this.fire('changed');
  },

  _createListElement: function (obj,ind) {
		var option = L.DomUtil.create('option');
		option.innerHTML = obj.title;
		if (this._currentLocation_index == ind ) {
			option.setAttribute('selected', true);
		}

		L.DomEvent
		// .addListener(option, 'click', L.DomEvent.stopPropagation)
		//	.addListener(option, 'click', L.DomEvent.preventDefault);
		    .addListener(option, 'click', this._onListChange, this);

		return option;
  },

  _update: function (e) {
		// L.DomUtil.empty(this._fullist); add in 0.7.4
		while (this._fullist.firstChild) {
				this._fullist.removeChild(this._fullist.firstChild);
		};
		var i, obj;
		for (i in this.options.locationsList) {
			obj = this.options.locationsList[i];
			this._fullist.appendChild(this._createListElement(obj,i));
		};

		return this;
  },

	_createButton: function (text, title, className, container, fn, context) {

		var link = L.DomUtil.create('a', className, container);
		link.href = '#';
		link.title = title;
		link.innerHTML = text;

		L.DomEvent
		    .addListener(link, 'click', L.DomEvent.stopPropagation)
			.addListener(link, 'click', L.DomEvent.preventDefault)
		    .addListener(link, 'click', fn, context);

		return link;
	},

	_switchNext: function (e) {
		if (this._currentLocation_index != this.options.locationsList.length - 1 ) {
			this._currentLocation_index = this._currentLocation_index + 1 ; }
		else {
			 this._currentLocation_index = 0 ;}

		this._map.setView(this.options.locationsList[this._currentLocation_index].latlng, this.options.locationsList[this._currentLocation_index].zoom);
		if (this.options.showList) {
			this._update();
		};
		this.fire('changed');
		this.fire('next');
	},
	_switchPrev: function (e) {
		if (this._currentLocation_index != 0) {
			this._currentLocation_index = this._currentLocation_index - 1 ; }
		else {
			this._currentLocation_index = this.options.locationsList.length - 1 ;}

		this._map.setView(this.options.locationsList[this._currentLocation_index].latlng, this.options.locationsList[this._currentLocation_index].zoom);
		if (this.options.showList) {
			this._update();
		};
		this.fire('changed');
		this.fire('prev');

	}

});

L.control.locationlist = function (options) {
	return new L.Control.LocationList(options);
};
