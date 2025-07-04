var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KnooppuntenRoutebureau_1 = new ol.format.GeoJSON();
var features_KnooppuntenRoutebureau_1 = format_KnooppuntenRoutebureau_1.readFeatures(json_KnooppuntenRoutebureau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KnooppuntenRoutebureau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KnooppuntenRoutebureau_1.addFeatures(features_KnooppuntenRoutebureau_1);
var lyr_KnooppuntenRoutebureau_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KnooppuntenRoutebureau_1, 
                style: style_KnooppuntenRoutebureau_1,
                popuplayertitle: 'Knooppunten Routebureau',
                interactive: true,
                title: 'Knooppunten Routebureau'
            });
var format_LijnstukkenRoutebureau_2 = new ol.format.GeoJSON();
var features_LijnstukkenRoutebureau_2 = format_LijnstukkenRoutebureau_2.readFeatures(json_LijnstukkenRoutebureau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LijnstukkenRoutebureau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LijnstukkenRoutebureau_2.addFeatures(features_LijnstukkenRoutebureau_2);
var lyr_LijnstukkenRoutebureau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LijnstukkenRoutebureau_2, 
                style: style_LijnstukkenRoutebureau_2,
                popuplayertitle: 'Lijnstukken Routebureau',
                interactive: false,
                title: '<img src="styles/legend/LijnstukkenRoutebureau_2.png" /> Lijnstukken Routebureau'
            });
var format_OnofficielewandelroutesFyzigoenBoetenom_3 = new ol.format.GeoJSON();
var features_OnofficielewandelroutesFyzigoenBoetenom_3 = format_OnofficielewandelroutesFyzigoenBoetenom_3.readFeatures(json_OnofficielewandelroutesFyzigoenBoetenom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OnofficielewandelroutesFyzigoenBoetenom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OnofficielewandelroutesFyzigoenBoetenom_3.addFeatures(features_OnofficielewandelroutesFyzigoenBoetenom_3);
var lyr_OnofficielewandelroutesFyzigoenBoetenom_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OnofficielewandelroutesFyzigoenBoetenom_3, 
                style: style_OnofficielewandelroutesFyzigoenBoetenom_3,
                popuplayertitle: 'Onofficiele wandelroutes Fyzigo en Boetenom',
                interactive: false,
                title: '<img src="styles/legend/OnofficielewandelroutesFyzigoenBoetenom_3.png" /> Onofficiele wandelroutes Fyzigo en Boetenom'
            });
var format_Onofficielegeschiedeniswandelingen_4 = new ol.format.GeoJSON();
var features_Onofficielegeschiedeniswandelingen_4 = format_Onofficielegeschiedeniswandelingen_4.readFeatures(json_Onofficielegeschiedeniswandelingen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onofficielegeschiedeniswandelingen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onofficielegeschiedeniswandelingen_4.addFeatures(features_Onofficielegeschiedeniswandelingen_4);
var lyr_Onofficielegeschiedeniswandelingen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onofficielegeschiedeniswandelingen_4, 
                style: style_Onofficielegeschiedeniswandelingen_4,
                popuplayertitle: 'Onofficiele geschiedeniswandelingen',
                interactive: false,
                title: '<img src="styles/legend/Onofficielegeschiedeniswandelingen_4.png" /> Onofficiele geschiedeniswandelingen'
            });
var group_POI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'POI'});
var group_Infrastructuur = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Infrastructuur'});
var group_Routebureausituatie2025 = new ol.layer.Group({
                                layers: [lyr_KnooppuntenRoutebureau_1,lyr_LijnstukkenRoutebureau_2,],
                                fold: 'close',
                                title: 'Routebureau situatie 2025'});
var group_TopoTijdReis = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TopoTijdReis'});
var group_Achtergrondkaarten = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'Achtergrondkaarten'});

lyr_OpenStreetMap_0.setVisible(true);lyr_KnooppuntenRoutebureau_1.setVisible(true);lyr_LijnstukkenRoutebureau_2.setVisible(true);lyr_OnofficielewandelroutesFyzigoenBoetenom_3.setVisible(true);lyr_Onofficielegeschiedeniswandelingen_4.setVisible(true);
var layersList = [group_Achtergrondkaarten,group_Routebureausituatie2025,lyr_OnofficielewandelroutesFyzigoenBoetenom_3,lyr_Onofficielegeschiedeniswandelingen_4];
lyr_KnooppuntenRoutebureau_1.set('fieldAliases', {'Nummer': 'Nummer', });
lyr_LijnstukkenRoutebureau_2.set('fieldAliases', {'Van-Naar': 'Van-Naar', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldAliases', {'Naam': 'Naam', 'Bron': 'Bron', 'Afstand': 'Afstand', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldAliases', {'Naam': 'Naam', 'Afstand': 'Afstand', });
lyr_KnooppuntenRoutebureau_1.set('fieldImages', {'Nummer': 'TextEdit', });
lyr_LijnstukkenRoutebureau_2.set('fieldImages', {'Van-Naar': 'TextEdit', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldImages', {'Naam': 'TextEdit', 'Bron': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldImages', {'Naam': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_KnooppuntenRoutebureau_1.set('fieldLabels', {'Nummer': 'no label', });
lyr_LijnstukkenRoutebureau_2.set('fieldLabels', {'Van-Naar': 'no label', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldLabels', {'Naam': 'no label', 'Bron': 'no label', 'Afstand': 'no label', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldLabels', {'Naam': 'no label', 'Afstand': 'no label', });
lyr_Onofficielegeschiedeniswandelingen_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});