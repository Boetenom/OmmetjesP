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
cluster_KnooppuntenRoutebureau_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KnooppuntenRoutebureau_1
});
var lyr_KnooppuntenRoutebureau_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KnooppuntenRoutebureau_1, 
                style: style_KnooppuntenRoutebureau_1,
                popuplayertitle: 'Knooppunten Routebureau',
                interactive: true,
                title: '<img src="styles/legend/KnooppuntenRoutebureau_1.png" /> Knooppunten Routebureau'
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
var format_Officielewandelroutes_3 = new ol.format.GeoJSON();
var features_Officielewandelroutes_3 = format_Officielewandelroutes_3.readFeatures(json_Officielewandelroutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Officielewandelroutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Officielewandelroutes_3.addFeatures(features_Officielewandelroutes_3);
var lyr_Officielewandelroutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Officielewandelroutes_3, 
                style: style_Officielewandelroutes_3,
                popuplayertitle: 'Officiele wandelroutes',
                interactive: false,
                title: '<img src="styles/legend/Officielewandelroutes_3.png" /> Officiele wandelroutes'
            });
var format_Onverhardeschouwpadenhoofdwatergangen_4 = new ol.format.GeoJSON();
var features_Onverhardeschouwpadenhoofdwatergangen_4 = format_Onverhardeschouwpadenhoofdwatergangen_4.readFeatures(json_Onverhardeschouwpadenhoofdwatergangen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onverhardeschouwpadenhoofdwatergangen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onverhardeschouwpadenhoofdwatergangen_4.addFeatures(features_Onverhardeschouwpadenhoofdwatergangen_4);
var lyr_Onverhardeschouwpadenhoofdwatergangen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onverhardeschouwpadenhoofdwatergangen_4, 
                style: style_Onverhardeschouwpadenhoofdwatergangen_4,
                popuplayertitle: 'Onverharde schouwpaden hoofdwatergangen',
                interactive: false,
                title: '<img src="styles/legend/Onverhardeschouwpadenhoofdwatergangen_4.png" /> Onverharde schouwpaden hoofdwatergangen'
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
var format_Verdwijnendebruggen_6 = new ol.format.GeoJSON();
var features_Verdwijnendebruggen_6 = format_Verdwijnendebruggen_6.readFeatures(json_Verdwijnendebruggen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verdwijnendebruggen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verdwijnendebruggen_6.addFeatures(features_Verdwijnendebruggen_6);
var lyr_Verdwijnendebruggen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verdwijnendebruggen_6, 
                style: style_Verdwijnendebruggen_6,
                popuplayertitle: 'Verdwijnende bruggen',
                interactive: false,
                title: '<img src="styles/legend/Verdwijnendebruggen_6.png" /> Verdwijnende bruggen'
            });
var format_Nieuwebruggen_7 = new ol.format.GeoJSON();
var features_Nieuwebruggen_7 = format_Nieuwebruggen_7.readFeatures(json_Nieuwebruggen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nieuwebruggen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nieuwebruggen_7.addFeatures(features_Nieuwebruggen_7);
var lyr_Nieuwebruggen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nieuwebruggen_7, 
                style: style_Nieuwebruggen_7,
                popuplayertitle: 'Nieuwe bruggen',
                interactive: false,
                title: '<img src="styles/legend/Nieuwebruggen_7.png" /> Nieuwe bruggen'
            });
var format_OnofficielewandelroutesFyzigoenBoetenom_8 = new ol.format.GeoJSON();
var features_OnofficielewandelroutesFyzigoenBoetenom_8 = format_OnofficielewandelroutesFyzigoenBoetenom_8.readFeatures(json_OnofficielewandelroutesFyzigoenBoetenom_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OnofficielewandelroutesFyzigoenBoetenom_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OnofficielewandelroutesFyzigoenBoetenom_8.addFeatures(features_OnofficielewandelroutesFyzigoenBoetenom_8);
var lyr_OnofficielewandelroutesFyzigoenBoetenom_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OnofficielewandelroutesFyzigoenBoetenom_8, 
                style: style_OnofficielewandelroutesFyzigoenBoetenom_8,
                popuplayertitle: 'Onofficiele wandelroutes Fyzigo en Boetenom',
                interactive: false,
                title: '<img src="styles/legend/OnofficielewandelroutesFyzigoenBoetenom_8.png" /> Onofficiele wandelroutes Fyzigo en Boetenom'
            });
var format_Onofficielegeschiedeniswandelingen_9 = new ol.format.GeoJSON();
var features_Onofficielegeschiedeniswandelingen_9 = format_Onofficielegeschiedeniswandelingen_9.readFeatures(json_Onofficielegeschiedeniswandelingen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onofficielegeschiedeniswandelingen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onofficielegeschiedeniswandelingen_9.addFeatures(features_Onofficielegeschiedeniswandelingen_9);
var lyr_Onofficielegeschiedeniswandelingen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onofficielegeschiedeniswandelingen_9, 
                style: style_Onofficielegeschiedeniswandelingen_9,
                popuplayertitle: 'Onofficiele geschiedeniswandelingen',
                interactive: false,
                title: '<img src="styles/legend/Onofficielegeschiedeniswandelingen_9.png" /> Onofficiele geschiedeniswandelingen'
            });
var format_Recreatie_10 = new ol.format.GeoJSON();
var features_Recreatie_10 = format_Recreatie_10.readFeatures(json_Recreatie_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreatie_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreatie_10.addFeatures(features_Recreatie_10);
var lyr_Recreatie_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreatie_10, 
                style: style_Recreatie_10,
                popuplayertitle: 'Recreatie',
                interactive: false,
                title: '<img src="styles/legend/Recreatie_10.png" /> Recreatie'
            });
var format_Horeca_11 = new ol.format.GeoJSON();
var features_Horeca_11 = format_Horeca_11.readFeatures(json_Horeca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horeca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horeca_11.addFeatures(features_Horeca_11);
var lyr_Horeca_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Horeca_11, 
                style: style_Horeca_11,
                popuplayertitle: 'Horeca',
                interactive: false,
                title: '<img src="styles/legend/Horeca_11.png" /> Horeca'
            });
var format_Bijzonderelocaties_12 = new ol.format.GeoJSON();
var features_Bijzonderelocaties_12 = format_Bijzonderelocaties_12.readFeatures(json_Bijzonderelocaties_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bijzonderelocaties_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bijzonderelocaties_12.addFeatures(features_Bijzonderelocaties_12);
var lyr_Bijzonderelocaties_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bijzonderelocaties_12, 
                style: style_Bijzonderelocaties_12,
                popuplayertitle: 'Bijzondere locaties',
                interactive: false,
                title: '<img src="styles/legend/Bijzonderelocaties_12.png" /> Bijzondere locaties'
            });
var format_Gemeentegrens_13 = new ol.format.GeoJSON();
var features_Gemeentegrens_13 = format_Gemeentegrens_13.readFeatures(json_Gemeentegrens_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeentegrens_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeentegrens_13.addFeatures(features_Gemeentegrens_13);
var lyr_Gemeentegrens_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeentegrens_13, 
                style: style_Gemeentegrens_13,
                popuplayertitle: 'Gemeentegrens',
                interactive: false,
                title: '<img src="styles/legend/Gemeentegrens_13.png" /> Gemeentegrens'
            });
var group_POI = new ol.layer.Group({
                                layers: [lyr_Recreatie_10,lyr_Horeca_11,lyr_Bijzonderelocaties_12,lyr_Gemeentegrens_13,],
                                fold: 'close',
                                title: 'POI'});
var group_Infrastructuur = new ol.layer.Group({
                                layers: [lyr_Onverhardeschouwpadenhoofdwatergangen_4,lyr_Parkeren_5,lyr_Verdwijnendebruggen_6,lyr_Nieuwebruggen_7,],
                                fold: 'close',
                                title: 'Infrastructuur'});
var group_Routebureausituatie2025 = new ol.layer.Group({
                                layers: [lyr_KnooppuntenRoutebureau_1,lyr_LijnstukkenRoutebureau_2,lyr_Officielewandelroutes_3,],
                                fold: 'close',
                                title: 'Routebureau situatie 2025'});
var group_Achtergrondkaarten = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'Achtergrondkaarten'});

lyr_OpenStreetMap_0.setVisible(true);lyr_KnooppuntenRoutebureau_1.setVisible(true);lyr_LijnstukkenRoutebureau_2.setVisible(true);lyr_Officielewandelroutes_3.setVisible(false);lyr_Onverhardeschouwpadenhoofdwatergangen_4.setVisible(false);lyr_Parkeren_5.setVisible(false);lyr_Verdwijnendebruggen_6.setVisible(false);lyr_Nieuwebruggen_7.setVisible(false);lyr_OnofficielewandelroutesFyzigoenBoetenom_8.setVisible(true);lyr_Onofficielegeschiedeniswandelingen_9.setVisible(true);lyr_Recreatie_10.setVisible(false);lyr_Horeca_11.setVisible(false);lyr_Bijzonderelocaties_12.setVisible(false);lyr_Gemeentegrens_13.setVisible(false);
var layersList = [group_Achtergrondkaarten,group_Routebureausituatie2025,group_Infrastructuur,lyr_OnofficielewandelroutesFyzigoenBoetenom_8,lyr_Onofficielegeschiedeniswandelingen_9,group_POI];
lyr_KnooppuntenRoutebureau_1.set('fieldAliases', {'Nummer': 'Nummer', });
lyr_LijnstukkenRoutebureau_2.set('fieldAliases', {'Van-Naar': 'Van-Naar', });
lyr_Officielewandelroutes_3.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Onverhardeschouwpadenhoofdwatergangen_4.set('fieldAliases', {'Naam': 'Naam', });
lyr_Parkeren_5.set('fieldAliases', {'Naam P': 'Naam P', 'P': 'P', });
lyr_Verdwijnendebruggen_6.set('fieldAliases', {'Naam': 'Naam', });
lyr_Nieuwebruggen_7.set('fieldAliases', {'Naam': 'Naam', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_8.set('fieldAliases', {'Naam': 'Naam', 'Bron': 'Bron', 'Afstand': 'Afstand', });
lyr_Onofficielegeschiedeniswandelingen_9.set('fieldAliases', {'Naam': 'Naam', 'Afstand': 'Afstand', });
lyr_Recreatie_10.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Horeca_11.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Bijzonderelocaties_12.set('fieldAliases', {'Naam': 'Naam', 'Link 1': 'Link 1', 'Link 2': 'Link 2', });
lyr_Gemeentegrens_13.set('fieldAliases', {'Naam': 'Naam', });
lyr_KnooppuntenRoutebureau_1.set('fieldImages', {'Nummer': 'TextEdit', });
lyr_LijnstukkenRoutebureau_2.set('fieldImages', {'Van-Naar': 'TextEdit', });
lyr_Officielewandelroutes_3.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Onverhardeschouwpadenhoofdwatergangen_4.set('fieldImages', {'Naam': 'TextEdit', });
lyr_Parkeren_5.set('fieldImages', {'Naam P': 'TextEdit', 'P': 'TextEdit', });
lyr_Verdwijnendebruggen_6.set('fieldImages', {'Naam': 'TextEdit', });
lyr_Nieuwebruggen_7.set('fieldImages', {'Naam': 'TextEdit', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_8.set('fieldImages', {'Naam': 'TextEdit', 'Bron': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Onofficielegeschiedeniswandelingen_9.set('fieldImages', {'Naam': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Recreatie_10.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Horeca_11.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Bijzonderelocaties_12.set('fieldImages', {'Naam': 'TextEdit', 'Link 1': 'TextEdit', 'Link 2': 'TextEdit', });
lyr_Gemeentegrens_13.set('fieldImages', {'Naam': 'TextEdit', });
lyr_KnooppuntenRoutebureau_1.set('fieldLabels', {'Nummer': 'no label', });
lyr_LijnstukkenRoutebureau_2.set('fieldLabels', {'Van-Naar': 'no label', });
lyr_Officielewandelroutes_3.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Onverhardeschouwpadenhoofdwatergangen_4.set('fieldLabels', {'Naam': 'no label', });
lyr_Parkeren_5.set('fieldLabels', {'Naam P': 'no label', });
lyr_Verdwijnendebruggen_6.set('fieldLabels', {'Naam': 'no label', });
lyr_Nieuwebruggen_7.set('fieldLabels', {'Naam': 'no label', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_8.set('fieldLabels', {'Naam': 'no label', 'Bron': 'no label', 'Afstand': 'no label', });
lyr_Onofficielegeschiedeniswandelingen_9.set('fieldLabels', {'Naam': 'no label', 'Afstand': 'no label', });
lyr_Recreatie_10.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Horeca_11.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Bijzonderelocaties_12.set('fieldLabels', {'Naam': 'no label', 'Link 1': 'no label', 'Link 2': 'no label', });
lyr_Gemeentegrens_13.set('fieldLabels', {'Naam': 'no label', });
lyr_Gemeentegrens_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});