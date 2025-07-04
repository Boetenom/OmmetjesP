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
var format_LijnstukkenRoutebureau_1 = new ol.format.GeoJSON();
var features_LijnstukkenRoutebureau_1 = format_LijnstukkenRoutebureau_1.readFeatures(json_LijnstukkenRoutebureau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LijnstukkenRoutebureau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LijnstukkenRoutebureau_1.addFeatures(features_LijnstukkenRoutebureau_1);
var lyr_LijnstukkenRoutebureau_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LijnstukkenRoutebureau_1, 
                style: style_LijnstukkenRoutebureau_1,
                popuplayertitle: 'Lijnstukken Routebureau',
                interactive: false,
                title: '<img src="styles/legend/LijnstukkenRoutebureau_1.png" /> Lijnstukken Routebureau'
            });
var format_KnooppuntenRoutebureau_2 = new ol.format.GeoJSON();
var features_KnooppuntenRoutebureau_2 = format_KnooppuntenRoutebureau_2.readFeatures(json_KnooppuntenRoutebureau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KnooppuntenRoutebureau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KnooppuntenRoutebureau_2.addFeatures(features_KnooppuntenRoutebureau_2);
cluster_KnooppuntenRoutebureau_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KnooppuntenRoutebureau_2
});
var lyr_KnooppuntenRoutebureau_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KnooppuntenRoutebureau_2, 
                style: style_KnooppuntenRoutebureau_2,
                popuplayertitle: 'Knooppunten Routebureau',
                interactive: true,
                title: '<img src="styles/legend/KnooppuntenRoutebureau_2.png" /> Knooppunten Routebureau'
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
var format_Parkeren_5 = new ol.format.GeoJSON();
var features_Parkeren_5 = format_Parkeren_5.readFeatures(json_Parkeren_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkeren_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkeren_5.addFeatures(features_Parkeren_5);
var lyr_Parkeren_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkeren_5, 
                style: style_Parkeren_5,
                popuplayertitle: 'Parkeren',
                interactive: true,
                title: '<img src="styles/legend/Parkeren_5.png" /> Parkeren'
            });
var group_POI = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'POI'});
var group_Infrastructuur = new ol.layer.Group({
                                layers: [lyr_Parkeren_5,],
                                fold: 'open',
                                title: 'Infrastructuur'});
var group_Routebureausituatie2025 = new ol.layer.Group({
                                layers: [lyr_LijnstukkenRoutebureau_1,lyr_KnooppuntenRoutebureau_2,],
                                fold: 'open',
                                title: 'Routebureau situatie 2025'});
var group_TopoTijdReis = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TopoTijdReis'});
var group_Achtergrondkaarten = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'Achtergrondkaarten'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LijnstukkenRoutebureau_1.setVisible(true);lyr_KnooppuntenRoutebureau_2.setVisible(true);lyr_OnofficielewandelroutesFyzigoenBoetenom_3.setVisible(true);lyr_Onofficielegeschiedeniswandelingen_4.setVisible(true);lyr_Parkeren_5.setVisible(false);
var layersList = [group_Achtergrondkaarten,group_Routebureausituatie2025,lyr_OnofficielewandelroutesFyzigoenBoetenom_3,lyr_Onofficielegeschiedeniswandelingen_4,group_Infrastructuur];
lyr_LijnstukkenRoutebureau_1.set('fieldAliases', {'Van-Naar': 'Van-Naar', });
lyr_KnooppuntenRoutebureau_2.set('fieldAliases', {'Nummer': 'Nummer', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldAliases', {'Naam': 'Naam', 'Bron': 'Bron', 'Afstand': 'Afstand', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldAliases', {'Naam': 'Naam', 'Afstand': 'Afstand', });
lyr_Parkeren_5.set('fieldAliases', {'Naam P': 'Naam P', 'P': 'P', });
lyr_LijnstukkenRoutebureau_1.set('fieldImages', {'Van-Naar': 'TextEdit', });
lyr_KnooppuntenRoutebureau_2.set('fieldImages', {'Nummer': 'TextEdit', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldImages', {'Naam': 'TextEdit', 'Bron': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldImages', {'Naam': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Parkeren_5.set('fieldImages', {'Naam P': 'TextEdit', 'P': 'TextEdit', });
lyr_LijnstukkenRoutebureau_1.set('fieldLabels', {'Van-Naar': 'no label', });
lyr_KnooppuntenRoutebureau_2.set('fieldLabels', {'Nummer': 'no label', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_3.set('fieldLabels', {'Naam': 'no label', 'Bron': 'no label', 'Afstand': 'no label', });
lyr_Onofficielegeschiedeniswandelingen_4.set('fieldLabels', {'Naam': 'no label', 'Afstand': 'no label', });
lyr_Parkeren_5.set('fieldLabels', {'Naam P': 'no label', 'P': 'no label', });
lyr_Parkeren_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});