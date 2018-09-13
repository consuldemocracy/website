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
                opacity: 0.20}).addTo(mymap);


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
    alicante.bindPopup("<strong>Ayuntamiento de Alicante</strong><br><span>Trabajando</span>");

// Ayuntamiento de Arona
var arona = L.marker([28.099950, -16.679977]).addTo(mymap);
    arona.bindTooltip("<strong>Ayuntamiento de Arona</strong>");
    arona.bindPopup("<strong>Ayuntamiento de Arona</strong><br><span>Trabajando</span>");

// Ayuntamiento de Benalmádena
var benalmadena = L.marker([36.598797, -4.516806]).addTo(mymap);
    benalmadena.bindTooltip("<strong>Ayuntamiento de Benalmádena</strong>");
    benalmadena.bindPopup("<strong>Ayuntamiento de Benalmádena</strong><br><a href='https://benalmadenaparticipa.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Buñol
var bunol = L.marker([39.420344, -0.790133]).addTo(mymap);
    bunol.bindTooltip("<strong>Ayuntamiento de Buñol</strong>");
    bunol.bindPopup("<strong>Ayuntamiento de Buñol</strong><br><span>Trabajando</span>");

// Ayuntamiento de Cádiz
var cadiz = L.marker([36.527061, -6.288596]).addTo(mymap);
    cadiz.bindTooltip("<strong>Ayuntamiento de Cádiz</strong>");
    cadiz.bindPopup("<strong>Ayuntamiento de Cádiz</strong><br><span>Trabajando</span>");

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
    chiloeches.bindPopup("<strong>Ayuntamiento de Chiloeches</strong><br><a href='https://decide.aytochiloeches.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Ciempozuelos
var ciempozuelos =  L.marker([40.1402985, -3.611649400000033]).addTo(mymap);
    ciempozuelos.bindTooltip("<strong>Ayuntamiento de Ciempozuelos</strong>");
    ciempozuelos.bindPopup("<strong>Ayuntamiento de Ciempozuelos</strong><br><span>Trabajando</span>");

// Ayuntamiento de Getafe
var getafe =  L.marker([40.3082633, -3.7325855000000274]).addTo(mymap);
    getafe.bindTooltip("<strong>Ayuntamiento de Getafe</strong>");
    getafe.bindPopup("<strong>Ayuntamiento de Getafe</strong><br><a href='https://participa.getafe.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Golmayo
var golmayo = L.marker([41.7086972, -2.7182728000000225]).addTo(mymap);
    golmayo.bindTooltip("<strong>Ayuntamiento de Golmayo</strong>");
    golmayo.bindPopup("<strong>Ayuntamiento de Golmayo</strong><br><span>Trabajando</span>");

// Ayuntamiento de Huesca
var huesca =  L.marker([42.13618419999999, -0.4082190999999966]).addTo(mymap);
    huesca.bindTooltip("<strong>Ayuntamiento de Huesca</strong>");
    huesca.bindPopup("<strong>Ayuntamiento de Huesca</strong><br><a href='http://participa.huesca.es' target='_blank'>Visitar página</a>");

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
    palma_mallorca.bindPopup("<strong>Ajuntament de Palma de Mallorca</strong><br><a href='https://tufas.palma.cat/' target='_blank'>Visitar página</a>");

// París
var paris = L.marker([48.85661400000001, 2.3522219000000177]).addTo(mymap);
    paris.bindTooltip("<strong>París (RIVP)</strong>");
    paris.bindPopup("<strong>París (RIVP)</strong><br><a href='https://budget-participatif.rivp.fr/budgets' target='_blank'>Visitar página</a>");

// Ayuntamiento de San Sebastián de los Reyes
var san_sebastian_reyes = L.marker([40.5589672, -3.6261976000000686]).addTo(mymap);
    san_sebastian_reyes.bindTooltip("<strong>Ayuntamiento de San Sebastián de los Reyes</strong>");
    san_sebastian_reyes.bindPopup("<strong>Ayuntamiento de San Sebastián de los Reyes</strong><br><span>Trabajando</span>");

// Ajuntament de Sitges
var sitges =  L.marker([41.2558303, 1.8611011000000417]).addTo(mymap);
    sitges.bindTooltip("<strong>Ajuntament de Sitges</strong>");
    sitges.bindPopup("<strong>Ajuntament de Sitges</strong><br><span>Trabajando</span>");

// Ayuntamiento de Talamanca del Jarama
var talamanca = L.marker([40.73418429999999, -3.4902391000000534]).addTo(mymap);
    talamanca.bindTooltip("<strong>Ayuntamiento de Talamanca del Jarama</strong>");
    talamanca.bindPopup("<strong>Ayuntamiento de Talamanca del Jarama</strong><br><span>Trabajando</span>");

// Ajuntament de Tarragona
var tarragona = L.marker([41.1188827, 1.2444908999999598]).addTo(mymap);
    tarragona.bindTooltip("<strong>Ajuntament de Tarragona</strong>");
    tarragona.bindPopup("<strong>Ajuntament de Tarragona</strong><br><span>Trabajando</span>");

// Ayuntamiento de Toledo
var toledo =  L.marker([39.86283160000001, -4.02732309999999]).addTo(mymap);
    toledo.bindTooltip("<strong>Ayuntamiento de Toledo</strong>");
    toledo.bindPopup("<strong>Ayuntamiento de Toledo</strong><br><a href='https://participa.toledo.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Valdemorillo
var valdemorillo =  L.marker([40.5030007, -4.049107700000036]).addTo(mymap);
    valdemorillo.bindTooltip("<strong>Ayuntamiento de Valdemorillo</strong>");
    valdemorillo.bindPopup("<strong>Ayuntamiento de Valdemorillo</strong><br><span>Trabajando</span>");

// Ayuntamiento de Valencia
var valencia =  L.marker([39.4699075, -0.3762881000000107]).addTo(mymap);
    valencia.bindTooltip("<strong>Ayuntamiento de Valencia</strong>");
    valencia.bindPopup("<strong>Ayuntamiento de Valencia</strong><br><a href='https://decidimvlc.valencia.es/' target='_blank'>Visitar página</a>");

// Buenos Aires
var buenos_aires =  L.marker([-34.60368440000001, -58.381559100000004]).addTo(mymap);
    buenos_aires.bindTooltip("<strong>Buenos Aires</strong>");
    buenos_aires.bindPopup("<strong>Buenos Aires</strong><br><a href='https://baelige.buenosaires.gob.ar/' target='_blank'>Visitar página</a>");

// Cabildo de Gran Canaria
var gran_canaria =  L.marker([27.9732236, -15.7010391]).addTo(mymap);
    gran_canaria.bindTooltip("<strong>Cabildo de Gran Canaria</strong>");
    gran_canaria.bindPopup("<strong>Cabildo de Gran Canaria</strong><br><a href='https://participa.grancanaria.com/' target='_blank'>Visitar página</a>");

// Consell de Mallorca
var mallorca_consell =  L.marker([39.5692762, 2.6497878999999784]).addTo(mymap);
    mallorca_consell.bindTooltip("<strong>Consell de Mallorca</strong>");
    mallorca_consell.bindPopup("<strong>Consell de Mallorca</strong><br><span>Trabajando</span>");

// Diputación de Valencia
var valencia_diputacion = L.marker([39.4771151, -0.37681850000001305]).addTo(mymap);
    valencia_diputacion.bindTooltip("<strong>Diputación de Valencia</strong>");
    valencia_diputacion.bindPopup("<strong>Diputación de Valencia</strong><br><span>Trabajando</span>");

// Mendoza
var mendoza = L.marker([-32.8833303,-68.8935386]).addTo(mymap);
    mendoza.bindTooltip("<strong>Mendoza</strong>");
    mendoza.bindPopup("<strong>Mendoza</strong><br><a href='http://participa.ciudaddemendoza.gob.ar/' target='_blank'>Visitar página</a>");

// Nariño
var narino =  L.marker([1.289151, -77.35793999999999]).addTo(mymap);
    narino.bindTooltip("<strong>Nariño</strong>");
    narino.bindPopup("<strong>Nariño</strong><br><a href='https://ganapienso.narino.gov.co/' target='_blank'>Visitar página</a>");

// Universidad Complutense de Madrid
var universidad_complutense = L.marker([40.4478246, -3.7285871999999927]).addTo(mymap);
    universidad_complutense.bindTooltip("<strong>Universidad Complutense de Madrid</strong>");
    universidad_complutense.bindPopup("<strong>Universidad Complutense de Madrid</strong><br><span>Trabajando</span>");

// La Libertad
var lalibertad = L.marker([-7.9637949, -78.8495556]).addTo(mymap);
    lalibertad.bindTooltip("<strong>La Libertad</strong>");
    lalibertad.bindPopup("<strong>La Libertad</strong><br><a href='http://www.decidelalibertad.pe/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Molina de Segura
var molinadesegura = L.marker([38.0591761, -1.2276177]).addTo(mymap);
    molinadesegura.bindTooltip("<strong>Ayuntamiento de Molina de Segura</strong>");
    molinadesegura.bindPopup("<strong>Ayuntamiento de Molina de Segura</strong><br><a href='https://decide.molinadesegura.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Puerto Real
var puertoreal = L.marker([36.5310785, -6.1934328]).addTo(mymap);
    puertoreal.bindTooltip("<strong>Ayuntamiento de Puerto Real</strong>");
    puertoreal.bindPopup("<strong>Ayuntamiento de Puerto Real</strong><br><a href='https://decide.puertoreal.es/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Valladolid
var valladolid = L.marker([41.651113, -4.7273606]).addTo(mymap);
    valladolid.bindTooltip("<strong>Ayuntamiento de Valladolid</strong>");
    valladolid.bindPopup("<strong>Ayuntamiento de Valladolid</strong><br><a href='https://www10.ava.es/presupuestosparticipativos/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Zamora
var zamora = L.marker([41.5038406, -5.7620456]).addTo(mymap);
    zamora.bindTooltip("<strong>Ayuntamiento de Zamora</strong>");
    zamora.bindPopup("<strong>Ayuntamiento de Zamora</strong><br><a href='https://zamoraparticipa.com/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Cheste
var cheste = L.marker([39.4944628,-0.6897149]).addTo(mymap);
    cheste.bindTooltip("<strong>Ayuntamiento de Cheste</strong>");
    cheste.bindPopup("<strong>Ayuntamiento de Cheste</strong><br><a href='https://cheste.participago.dival.es/' target='_blank'>Visitar página</a>");

// Córdoba
var cordoba_arg = L.marker([-31.399401,-64.2643837]).addTo(mymap);
    cordoba_arg.bindTooltip("<strong>Córdoba</strong>");
    cordoba_arg.bindPopup("<strong>Córdoba</strong><br>Trabajando");

// Guadalajara
var guadalajara_mex = L.marker([20.6737883,-103.3704326]).addTo(mymap);
    guadalajara_mex.bindTooltip("<strong>Guadalajara</strong>");
    guadalajara_mex.bindPopup("<strong>Guadalajara</strong><br>Trabajando");

// Jalisco
var jalisco_mex = L.marker([20.834412,-104.7241366]).addTo(mymap);
    jalisco_mex.bindTooltip("<strong>Jalisco</strong>");
    jalisco_mex.bindPopup("<strong>Jalisco</strong><br><a href='https://participa.jalisco.mx/' target='_blank'>Visitar página</a>");

// Lima
var lima_per = L.marker([-12.0266034,-77.1278634]).addTo(mymap);
    lima_per.bindTooltip("<strong>Lima</strong>");
    lima_per.bindPopup("<strong>Lima</strong><br>Trabajando");

// Montes de Oca
var montesdeoca = L.marker([9.9399955,-84.0285016]).addTo(mymap);
    montesdeoca.bindTooltip("<strong>Montes de Oca</strong>");
    montesdeoca.bindPopup("<strong>Montes de Oca</strong><br>Trabajando");

// Montevideo
var montevideo = L.marker([-34.8210782,-56.3064783]).addTo(mymap);
    montevideo.bindTooltip("<strong>Montevideo</strong>");
    montevideo.bindPopup("<strong>Montevideo</strong><br><a href='https://decide.montevideo.gub.uy/' target='_blank'>Visitar página</a>");

// Porto Alegre
var portoalegre = L.marker([-30.1087957,-51.3172251]).addTo(mymap);
    portoalegre.bindTooltip("<strong>Porto Alegre</strong>");
    portoalegre.bindPopup("<strong>Porto Alegre</strong><br>Trabajando");

// Puerto Montt
var puertomontt = L.marker([-41.4629843,-72.9655277]).addTo(mymap);
    puertomontt.bindTooltip("<strong>Puerto Montt</strong>");
    puertomontt.bindPopup("<strong>Puerto Montt</strong><br>Trabajando");

// Quito
var quito = L.marker([-0.1865938,-78.5706226]).addTo(mymap);
    quito.bindTooltip("<strong>Quito</strong>");
    quito.bindPopup("<strong>Quito</strong><br>Trabajando");

// Torino
var torino = L.marker([45.0701176,7.6000499]).addTo(mymap);
    torino.bindTooltip("<strong>Torino</strong>");
    torino.bindPopup("<strong>Torino</strong><br><a href='https://deciditorino.it/' target='_blank'>Visitar página</a>");

// Gwangju
var gwangju = L.marker([35.176695,126.8087806]).addTo(mymap);
    gwangju.bindTooltip("<strong>Gwangju</strong>");
    gwangju.bindPopup("<strong>Gwangju</strong><br>Trabajando");

// Universidade da Coruña
var uni_a_coruna = L.marker([43.3618474,-8.4477032]).addTo(mymap);
    uni_a_coruna.bindTooltip("<strong>Universidade da Coruña</strong>");
    uni_a_coruna.bindPopup("<strong>Universidade da Coruña</strong><br><a href='https://udcdecide.udc.gal/debates' target='_blank'>Visitar página</a>");

// Ciudad de Guatemala
var guatemala = L.marker([14.6262174,-90.5275799]).addTo(mymap);
    guatemala.bindTooltip("<strong>Ciudad de Guatemala</strong>");
    guatemala.bindPopup("<strong>Ciudad de Guatemala</strong><br>Trabajando");

// Alcalá de Henares
var alcala = L.marker([40.4947687,-3.4367158]).addTo(mymap);
    alcala.bindTooltip("<strong>Alcalá de Henares</strong>");
    alcala.bindPopup("<strong>Alcalá de Henares</strong><br>Trabajando");

// Avilés
var aviles = L.marker([43.5574185,-5.93553]).addTo(mymap);
    aviles.bindTooltip("<strong>Avilés</strong>");
    aviles.bindPopup("<strong>Avilés</strong><br>Trabajando");

// Barú
var baru = L.marker([8.3013227,-83.1524706]).addTo(mymap);
    baru.bindTooltip("<strong>Barú</strong>");
    baru.bindPopup("<strong>Barú</strong><br>Trabajando");

// Cartagena
var cartagena_mur = L.marker([37.6174104,-1.006017]).addTo(mymap);
    cartagena_mur.bindTooltip("<strong>Cartagena</strong>");
    cartagena_mur.bindPopup("<strong>Cartagena</strong><br>Trabajando");

// Las Palmas de Gran Canaria
var palmas = L.marker([28.1173563,-15.4746365]).addTo(mymap);
    palmas.bindTooltip("<strong>Las Palmas de Gran Canaria</strong>");
    palmas.bindPopup("<strong>Las Palmas de Gran Canaria</strong><br><a href='https://decide.laspalmasgc.es' target='_blank'>Visitar página</a>");

// Móstoles
var mostoles = L.marker([40.3231233,-3.8851408]).addTo(mymap);
    mostoles.bindTooltip("<strong>Móstoles</strong>");
    mostoles.bindPopup("<strong>Móstoles</strong><br>Trabajando");

// Torremolinos
var torremolinos = L.marker([36.6262107,-4.5359552]).addTo(mymap);
    torremolinos.bindTooltip("<strong>Torremolinos</strong>");
    torremolinos.bindPopup("<strong>Torremolinos</strong><br>Trabajando");

// Torre-Pacheco
var torrepacheco = L.marker([37.7413063,-0.9620597]).addTo(mymap);
    torrepacheco.bindTooltip("<strong>Torre-Pacheco</strong>");
    torrepacheco.bindPopup("<strong>Torre-Pacheco</strong><br>Trabajando");

// Ayuntamiento de Aspe
var aspe = L.marker([38.3459766,-0.7762791]).addTo(mymap);
    aspe.bindTooltip("<strong>Ayuntamiento de Aspe</strong>");
    aspe.bindPopup("<strong>Ayuntamiento de Aspe</strong><br><span>Trabajando</span>");

// Ayuntamiento de Sant Joan d'Alacant
var sant_joan = L.marker([38.4020435,-0.4474429]).addTo(mymap);
    sant_joan.bindTooltip("<strong>Ayuntamiento de Sant Joan d'Alacant</strong>");
    sant_joan.bindPopup("<strong>Ayuntamiento de Sant Joan d'Alacant</strong><br><span>Trabajando</span>");

// Ayuntamiento de El Rosario
var rosario = L.marker([28.4327695,-16.3922438]).addTo(mymap);
    rosario.bindTooltip("<strong>Ayuntamiento de El Rosario</strong>");
    rosario.bindPopup("<strong>Ayuntamiento de El Rosario</strong><br><span>Trabajando</span>");

// Ayuntamiento de Bullas
var bullas = L.marker([38.0452146,-1.6765886]).addTo(mymap);
    bullas.bindTooltip("<strong>Ayuntamiento de Bullas</strong>");
    bullas.bindPopup("<strong>Ayuntamiento de Bullas</strong><br><span>Trabajando</span>");

// Municipio de Godoy Cruz
var godoy_cruz = L.marker([-32.928786,-68.8672155]).addTo(mymap);
    godoy_cruz.bindTooltip("<strong>Municipio de Godoy Cruz</strong>");
    godoy_cruz.bindPopup("<strong>Municipio de Godoy Cruz</strong><br><span>Trabajando</span>");

// Ayuntamiento de Xirivella
var xirivella = L.marker([39.4616567,-0.4424935]).addTo(mymap);
    xirivella.bindTooltip("<strong>Ayuntamiento de Xirivella</strong>");
    xirivella.bindPopup("<strong>Ayuntamiento de Xirivella</strong><br><a href='https://xirivella.participago.dival.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Faura
var faura = L.marker([39.7258726,-0.2692253]).addTo(mymap);
    faura.bindTooltip("<strong>Ayuntamiento de Faura</strong>");
    faura.bindPopup("<strong>Ayuntamiento de Faura</strong><br><a href='https://faura.participago.dival.es' target='_blank'>Visitar página</a>");

// Ayuntamiento de Alginet
var alginet = L.marker([39.2608679,-0.4768122]).addTo(mymap);
    alginet.bindTooltip("<strong>Ayuntamiento de Alginet</strong>");
    alginet.bindPopup("<strong>Ayuntamiento de Alginet</strong><br><span>Trabajando</span>");

// Municipio de Lujan de Cuyo
var lujan_cuyo = L.marker([-33.0000377,-68.9019889]).addTo(mymap);
    lujan_cuyo.bindTooltip("<strong>Municipio de Lujan de cuyo</strong>");
    lujan_cuyo.bindPopup("<strong>Municipio de Lujan de cuyo</strong><br><a href='http://decide.lujandecuyo.gob.ar/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Rivas Vaciamadrid
var rivas_vaciamadrid = L.marker([40.3477434,-3.547396]).addTo(mymap);
    rivas_vaciamadrid.bindTooltip("<strong>Ayuntamiento de Rivas Vaciamadrid</strong>");
    rivas_vaciamadrid.bindPopup("<strong>Ayuntamiento de Rivas Vaciamadrid</strong><br><span>Trabajando</span>");

// Municipio de La Paz
var la_paz = L.marker([-16.5205361,-68.1941173]).addTo(mymap);
    la_paz.bindTooltip("<strong>Municipio de La Paz</strong>");
    la_paz.bindPopup("<strong>Municipio de La Paz</strong><br><span>Trabajando</span>");

// Ayuntamiento de Santa Cruz de Tenerife
var tenerife = L.marker([28.4636135,-16.2870514]).addTo(mymap);
    tenerife.bindTooltip("<strong>Ayuntamiento de Santa Cruz de Tenerife</strong>");
    tenerife.bindPopup("<strong>Ayuntamiento de Santa Cruz de Tenerife</strong><br><a href='https://www.santacruzdetenerife.es/participa/' target='_blank'>Visitar página</a>");

// Municipio de Bahía Blanca
var bahia_blanca = L.marker([-39.2595572,-62.742406]).addTo(mymap);
    bahia_blanca.bindTooltip("<strong>Municipio de Bahía Blanca</strong>");
    bahia_blanca.bindPopup("<strong>Municipio de Bahía Blanca</strong><br><span>Trabajando</span>");

// Ciudad de La Valeta
var valletta = L.marker([35.8984802,14.5044102]).addTo(mymap);
    valletta.bindTooltip("<strong>Ciudad de La Valeta</strong>");
    valletta.bindPopup("<strong>Ciudad de La Valeta</strong><br><span>Trabajando</span>");

// Ayuntamiento de Moixent
var moixent = L.marker([38.8740569,-0.7538327]).addTo(mymap);
    moixent.bindTooltip("<strong>Ayuntamiento de Moixent</strong>");
    moixent.bindPopup("<strong>Ayuntamiento de Moixent</strong><br><a href='http://www.moixentparticipa.es' target='_blank'>Visitar página</a>");

// Departamento de Aude
var aude = L.marker([43.2171871,2.3660783]).addTo(mymap);
    aude.bindTooltip("<strong>Departamento de Aude</strong>");
    aude.bindPopup("<strong>Departamento de Aude</strong><br><a href='http://cdj.aude.fr/' target='_blank'>Visitar página</a>");

// Uruguay
var uruguay = L.marker([-32.8439715,-55.8992231]).addTo(mymap);
    uruguay.bindTooltip("<strong>República Oriental del Uruguay</strong>");
    uruguay.bindPopup("<strong>República Oriental del Uruguay</strong><br><a href='https://plan.gobiernoabierto.gub.uy/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Ondara
var ondara = L.marker([38.825502,0.0119995]).addTo(mymap);
    ondara.bindTooltip("<strong>Ayuntamiento de Ondara</strong>");
    ondara.bindPopup("<strong>Ayuntamiento de Ondara</strong><br><a href='https://participa.ondara.org/' target='_blank'>Visitar página</a>");

// Ayuntamiento de Arcos de la Frontera
var arcos_frontera = L.marker([36.7515356,-5.8255479]).addTo(mymap);
    arcos_frontera.bindTooltip("<strong>Ayuntamiento de Arcos de la Frontera</strong>");
    arcos_frontera.bindPopup("<strong>Ayuntamiento de Arcos de la Frontera</strong><br><a href='http://decidearcos.es/' target='_blank'>Visitar página</a>");

// Diputación de A Coruña
var dipcoruna = L.marker([43.280974, -8.469744]).addTo(mymap);
    dipcoruna.bindTooltip("<strong>Diputación de A Coruña</strong>");
    dipcoruna.bindPopup("<strong>Diputación de A Coruña</strong>");

// Arroyomolinos
var arroyomolinos = L.marker([40.2427857,-3.8664734]).addTo(mymap);
    arroyomolinos.bindTooltip("<strong>Arroyomolinos</strong>");
    arroyomolinos.bindPopup("<strong>Arroyomolinos</strong><br><span>Trabajando</span>");

// Cieza
var cieza = L.marker([38.2413028,-1.4289604]).addTo(mymap);
    cieza.bindTooltip("<strong>Cieza</strong>");
    cieza.bindPopup("<strong>Cieza</strong><br><span>Trabajando</span>");

// Cabildo Insular de la Gomera
var cab_gomera = L.marker([28.0914408,-17.1144071]).addTo(mymap);
    cab_gomera.bindTooltip("<strong>Cabildo Insular de la Gomera</strong>");
    cab_gomera.bindPopup("<strong>Cabildo Insular de la Gomera</strong><br><span>Trabajando</span>");

// Mijas
var mijas = L.marker([36.5958944,-4.645]).addTo(mymap);
    mijas.bindTooltip("<strong>Mijas</strong>");
    mijas.bindPopup("<strong>Mijas</strong><br><span>Trabajando</span>");

// Soria
var soria = L.marker([41.7671522,-2.4920886]).addTo(mymap);
    soria.bindTooltip("<strong>Soria</strong>");
    soria.bindPopup("<strong>Soria</strong><br><span>Trabajando</span>");

// Torrevieja
var torrevieja = L.marker([37.9892108,-0.6950663]).addTo(mymap);
    torrevieja.bindTooltip("<strong>Torrevieja</strong>");
    torrevieja.bindPopup("<strong>Torrevieja</strong><br><span>Trabajando</span>");

// Universidad de Málaga
var uni_malaga = L.marker([36.7199549,-4.4182814]).addTo(mymap);
    uni_malaga.bindTooltip("<strong>Universidad de Málaga</strong>");
    uni_malaga.bindPopup("<strong>Universidad de Málaga</strong><br><span>Trabajando</span>");

// Universidad de Zaragoza
var uni_zaragoza = L.marker([41.6590236,-0.9000049]).addTo(mymap);
    uni_zaragoza.bindTooltip("<strong>Universidad de Zaragoza</strong>");
    uni_zaragoza.bindPopup("<strong>Universidad de Zaragoza</strong><br><span>Trabajando</span>");

// Diputación de Badajoz
var dip_badajoz = L.marker([38.8794416,-7.022698]).addTo(mymap);
    dip_badajoz.bindTooltip("<strong>Diputación de Badajoz</strong>");
    dip_badajoz.bindPopup("<strong>Diputación de Badajoz</strong><br><span>Trabajando</span>");

// Ciudad Real
var ciudadreal = L.marker([38.9860758,-3.944497]).addTo(mymap);
    ciudadreal.bindTooltip("<strong>Ciudad Real</strong>");
    ciudadreal.bindPopup("<strong>Ciudad Real</strong><br><span>Trabajando</span>");

// Córdoba
var cordoba_esp = L.marker([37.8916485,-4.8195048]).addTo(mymap);
    cordoba_esp.bindTooltip("<strong>Córdoba</strong>");
    cordoba_esp.bindPopup("<strong>Córdoba</strong><br><span>Trabajando</span>");

// Medellín
var medellin = L.marker([6.268844,-75.666432]).addTo(mymap);
    medellin.bindTooltip("<strong>Medellín</strong>");
    medellin.bindPopup("<strong>Medellín</strong><br><span>Trabajando</span>");

// San Nicolás
var sannicolas = L.marker([-33.6313883,-60.7136]).addTo(mymap);
    sannicolas.bindTooltip("<strong>San Nicolás</strong>");
    sannicolas.bindPopup("<strong>San Nicolás</strong><br><span>Trabajando</span>");

// Tirana
var tirana = L.marker([41.3310413,19.782803]).addTo(mymap);
    tirana.bindTooltip("<strong>Tirana</strong>");
    tirana.bindPopup("<strong>Tirana</strong><br><span>Trabajando</span>");

// Veracruz
var veracruz = L.marker([19.7955228,-98.3889]).addTo(mymap);
    veracruz.bindTooltip("<strong>Veracruz</strong>");
    veracruz.bindPopup("<strong>Veracruz</strong><br><span>Trabajando</span>");

// Ayuntamiento de Marchamalo
var marchamalo = L.marker([40.6686813,-3.2115238]).addTo(mymap);
    marchamalo.bindTooltip("<strong>Ayuntamiento de Marchamalo</strong>");
    marchamalo.bindPopup("<strong>Ayuntamiento de Marchamalo</strong><br><a href='https://decide.marchamalo.es/' target='_blank'>Visitar página</a>");
