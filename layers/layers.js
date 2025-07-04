var wms_layers = [];

var lyr_GeomorfologischeKaart_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/bzk/bro-geomorfologischekaart/wms/v2_0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geomorphological_area",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Geomorfologische Kaart',
                            popuplayertitle: 'Geomorfologische Kaart',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GeomorfologischeKaart_0, 0]);

    var projection_Luchtfoto2024Ortho8cmRGB_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Luchtfoto2024Ortho8cmRGB_1 = projection_Luchtfoto2024Ortho8cmRGB_1.getExtent();
    var size_Luchtfoto2024Ortho8cmRGB_1 = ol.extent.getWidth(projectionExtent_Luchtfoto2024Ortho8cmRGB_1) / 256;
    var resolutions_Luchtfoto2024Ortho8cmRGB_1 = new Array(14);
    var matrixIds_Luchtfoto2024Ortho8cmRGB_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Luchtfoto2024Ortho8cmRGB_1[z] = size_Luchtfoto2024Ortho8cmRGB_1 / Math.pow(2, z);
        matrixIds_Luchtfoto2024Ortho8cmRGB_1[z] = z;
    }
    var lyr_Luchtfoto2024Ortho8cmRGB_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0",
                                attributions: ' ',
                                "layer": "2024_orthoHR",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Luchtfoto2024Ortho8cmRGB_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Luchtfoto2024Ortho8cmRGB_1),
                resolutions: resolutions_Luchtfoto2024Ortho8cmRGB_1,
                matrixIds: matrixIds_Luchtfoto2024Ortho8cmRGB_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Luchtfoto 2024 Ortho 8cm RGB',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_TopoTijdReis1870_3 = ol.proj.get('EPSG:3857');
    var projectionExtent_TopoTijdReis1870_3 = projection_TopoTijdReis1870_3.getExtent();
    var size_TopoTijdReis1870_3 = ol.extent.getWidth(projectionExtent_TopoTijdReis1870_3) / 256;
    var resolutions_TopoTijdReis1870_3 = new Array(14);
    var matrixIds_TopoTijdReis1870_3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_TopoTijdReis1870_3[z] = size_TopoTijdReis1870_3 / Math.pow(2, z);
        matrixIds_TopoTijdReis1870_3[z] = z;
    }
    var lyr_TopoTijdReis1870_3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://tiles.arcgis.com/tiles/nSZVuSZjHpEZZbRo/arcgis/rest/services/Historische_tijdreis_1870/MapServer/WMTS/",
                                attributions: ' ',
                                "layer": "Historische_tijdreis_1870",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_TopoTijdReis1870_3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_TopoTijdReis1870_3),
                resolutions: resolutions_TopoTijdReis1870_3,
                matrixIds: matrixIds_TopoTijdReis1870_3
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'TopoTijdReis 1870',
                            opacity: 1.0,
                            
                            
                          });

    var projection_TopoTijdReis1912_4 = ol.proj.get('EPSG:3857');
    var projectionExtent_TopoTijdReis1912_4 = projection_TopoTijdReis1912_4.getExtent();
    var size_TopoTijdReis1912_4 = ol.extent.getWidth(projectionExtent_TopoTijdReis1912_4) / 256;
    var resolutions_TopoTijdReis1912_4 = new Array(14);
    var matrixIds_TopoTijdReis1912_4 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_TopoTijdReis1912_4[z] = size_TopoTijdReis1912_4 / Math.pow(2, z);
        matrixIds_TopoTijdReis1912_4[z] = z;
    }
    var lyr_TopoTijdReis1912_4 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://tiles.arcgis.com/tiles/nSZVuSZjHpEZZbRo/arcgis/rest/services/Historische_tijdreis_1912/MapServer/WMTS/",
                                attributions: ' ',
                                "layer": "Historische_tijdreis_1912",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_TopoTijdReis1912_4,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_TopoTijdReis1912_4),
                resolutions: resolutions_TopoTijdReis1912_4,
                matrixIds: matrixIds_TopoTijdReis1912_4
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'TopoTijdReis 1912',
                            opacity: 1.0,
                            
                            
                          });
var format_KnooppuntenRoutebureau_5 = new ol.format.GeoJSON();
var features_KnooppuntenRoutebureau_5 = format_KnooppuntenRoutebureau_5.readFeatures(json_KnooppuntenRoutebureau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KnooppuntenRoutebureau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KnooppuntenRoutebureau_5.addFeatures(features_KnooppuntenRoutebureau_5);
cluster_KnooppuntenRoutebureau_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KnooppuntenRoutebureau_5
});
var lyr_KnooppuntenRoutebureau_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KnooppuntenRoutebureau_5, 
                style: style_KnooppuntenRoutebureau_5,
                popuplayertitle: 'Knooppunten Routebureau',
                interactive: true,
                title: 'Knooppunten Routebureau'
            });
var format_LijnstukkenRoutebureau_6 = new ol.format.GeoJSON();
var features_LijnstukkenRoutebureau_6 = format_LijnstukkenRoutebureau_6.readFeatures(json_LijnstukkenRoutebureau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LijnstukkenRoutebureau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LijnstukkenRoutebureau_6.addFeatures(features_LijnstukkenRoutebureau_6);
var lyr_LijnstukkenRoutebureau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LijnstukkenRoutebureau_6, 
                style: style_LijnstukkenRoutebureau_6,
                popuplayertitle: 'Lijnstukken Routebureau',
                interactive: false,
                title: '<img src="styles/legend/LijnstukkenRoutebureau_6.png" /> Lijnstukken Routebureau'
            });
var format_Officielewandelroutes_7 = new ol.format.GeoJSON();
var features_Officielewandelroutes_7 = format_Officielewandelroutes_7.readFeatures(json_Officielewandelroutes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Officielewandelroutes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Officielewandelroutes_7.addFeatures(features_Officielewandelroutes_7);
var lyr_Officielewandelroutes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Officielewandelroutes_7, 
                style: style_Officielewandelroutes_7,
                popuplayertitle: 'Officiele wandelroutes',
                interactive: false,
                title: '<img src="styles/legend/Officielewandelroutes_7.png" /> Officiele wandelroutes'
            });
var format_Onverhardeschouwpadenhoofdwatergangen_8 = new ol.format.GeoJSON();
var features_Onverhardeschouwpadenhoofdwatergangen_8 = format_Onverhardeschouwpadenhoofdwatergangen_8.readFeatures(json_Onverhardeschouwpadenhoofdwatergangen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onverhardeschouwpadenhoofdwatergangen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onverhardeschouwpadenhoofdwatergangen_8.addFeatures(features_Onverhardeschouwpadenhoofdwatergangen_8);
var lyr_Onverhardeschouwpadenhoofdwatergangen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onverhardeschouwpadenhoofdwatergangen_8, 
                style: style_Onverhardeschouwpadenhoofdwatergangen_8,
                popuplayertitle: 'Onverharde schouwpaden hoofdwatergangen',
                interactive: false,
                title: '<img src="styles/legend/Onverhardeschouwpadenhoofdwatergangen_8.png" /> Onverharde schouwpaden hoofdwatergangen'
            });
var format_Parkeren_9 = new ol.format.GeoJSON();
var features_Parkeren_9 = format_Parkeren_9.readFeatures(json_Parkeren_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkeren_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkeren_9.addFeatures(features_Parkeren_9);
var lyr_Parkeren_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkeren_9, 
                style: style_Parkeren_9,
                popuplayertitle: 'Parkeren',
                interactive: false,
                title: '<img src="styles/legend/Parkeren_9.png" /> Parkeren'
            });
var format_Verdwijnendebruggen_10 = new ol.format.GeoJSON();
var features_Verdwijnendebruggen_10 = format_Verdwijnendebruggen_10.readFeatures(json_Verdwijnendebruggen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verdwijnendebruggen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verdwijnendebruggen_10.addFeatures(features_Verdwijnendebruggen_10);
var lyr_Verdwijnendebruggen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verdwijnendebruggen_10, 
                style: style_Verdwijnendebruggen_10,
                popuplayertitle: 'Verdwijnende bruggen',
                interactive: false,
                title: '<img src="styles/legend/Verdwijnendebruggen_10.png" /> Verdwijnende bruggen'
            });
var format_Nieuwebruggen_11 = new ol.format.GeoJSON();
var features_Nieuwebruggen_11 = format_Nieuwebruggen_11.readFeatures(json_Nieuwebruggen_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nieuwebruggen_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nieuwebruggen_11.addFeatures(features_Nieuwebruggen_11);
var lyr_Nieuwebruggen_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nieuwebruggen_11, 
                style: style_Nieuwebruggen_11,
                popuplayertitle: 'Nieuwe bruggen',
                interactive: false,
                title: '<img src="styles/legend/Nieuwebruggen_11.png" /> Nieuwe bruggen'
            });
var format_OnofficielewandelroutesFyzigoenBoetenom_12 = new ol.format.GeoJSON();
var features_OnofficielewandelroutesFyzigoenBoetenom_12 = format_OnofficielewandelroutesFyzigoenBoetenom_12.readFeatures(json_OnofficielewandelroutesFyzigoenBoetenom_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OnofficielewandelroutesFyzigoenBoetenom_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OnofficielewandelroutesFyzigoenBoetenom_12.addFeatures(features_OnofficielewandelroutesFyzigoenBoetenom_12);
var lyr_OnofficielewandelroutesFyzigoenBoetenom_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OnofficielewandelroutesFyzigoenBoetenom_12, 
                style: style_OnofficielewandelroutesFyzigoenBoetenom_12,
                popuplayertitle: 'Onofficiele wandelroutes Fyzigo en Boetenom',
                interactive: false,
                title: '<img src="styles/legend/OnofficielewandelroutesFyzigoenBoetenom_12.png" /> Onofficiele wandelroutes Fyzigo en Boetenom'
            });
var format_Onofficielegeschiedeniswandelingen_13 = new ol.format.GeoJSON();
var features_Onofficielegeschiedeniswandelingen_13 = format_Onofficielegeschiedeniswandelingen_13.readFeatures(json_Onofficielegeschiedeniswandelingen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onofficielegeschiedeniswandelingen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onofficielegeschiedeniswandelingen_13.addFeatures(features_Onofficielegeschiedeniswandelingen_13);
var lyr_Onofficielegeschiedeniswandelingen_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onofficielegeschiedeniswandelingen_13, 
                style: style_Onofficielegeschiedeniswandelingen_13,
                popuplayertitle: 'Onofficiele geschiedeniswandelingen',
                interactive: false,
                title: '<img src="styles/legend/Onofficielegeschiedeniswandelingen_13.png" /> Onofficiele geschiedeniswandelingen'
            });
var format_Recreatie_14 = new ol.format.GeoJSON();
var features_Recreatie_14 = format_Recreatie_14.readFeatures(json_Recreatie_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreatie_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreatie_14.addFeatures(features_Recreatie_14);
var lyr_Recreatie_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreatie_14, 
                style: style_Recreatie_14,
                popuplayertitle: 'Recreatie',
                interactive: false,
                title: '<img src="styles/legend/Recreatie_14.png" /> Recreatie'
            });
var format_Horeca_15 = new ol.format.GeoJSON();
var features_Horeca_15 = format_Horeca_15.readFeatures(json_Horeca_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horeca_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horeca_15.addFeatures(features_Horeca_15);
var lyr_Horeca_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Horeca_15, 
                style: style_Horeca_15,
                popuplayertitle: 'Horeca',
                interactive: false,
                title: '<img src="styles/legend/Horeca_15.png" /> Horeca'
            });
var format_Bijzonderelocaties_16 = new ol.format.GeoJSON();
var features_Bijzonderelocaties_16 = format_Bijzonderelocaties_16.readFeatures(json_Bijzonderelocaties_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bijzonderelocaties_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bijzonderelocaties_16.addFeatures(features_Bijzonderelocaties_16);
var lyr_Bijzonderelocaties_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bijzonderelocaties_16, 
                style: style_Bijzonderelocaties_16,
                popuplayertitle: 'Bijzondere locaties',
                interactive: false,
                title: '<img src="styles/legend/Bijzonderelocaties_16.png" /> Bijzondere locaties'
            });
var format_Gemeentegrens_17 = new ol.format.GeoJSON();
var features_Gemeentegrens_17 = format_Gemeentegrens_17.readFeatures(json_Gemeentegrens_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeentegrens_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeentegrens_17.addFeatures(features_Gemeentegrens_17);
var lyr_Gemeentegrens_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeentegrens_17, 
                style: style_Gemeentegrens_17,
                popuplayertitle: 'Gemeentegrens',
                interactive: false,
                title: '<img src="styles/legend/Gemeentegrens_17.png" /> Gemeentegrens'
            });
var group_POI = new ol.layer.Group({
                                layers: [lyr_Recreatie_14,lyr_Horeca_15,lyr_Bijzonderelocaties_16,lyr_Gemeentegrens_17,],
                                fold: 'close',
                                title: 'POI'});
var group_Infrastructuur = new ol.layer.Group({
                                layers: [lyr_Onverhardeschouwpadenhoofdwatergangen_8,lyr_Parkeren_9,lyr_Verdwijnendebruggen_10,lyr_Nieuwebruggen_11,],
                                fold: 'close',
                                title: 'Infrastructuur'});
var group_Routebureausituatie2025 = new ol.layer.Group({
                                layers: [lyr_KnooppuntenRoutebureau_5,lyr_LijnstukkenRoutebureau_6,lyr_Officielewandelroutes_7,],
                                fold: 'close',
                                title: 'Routebureau situatie 2025'});
var group_TopoTijdReis = new ol.layer.Group({
                                layers: [lyr_TopoTijdReis1870_3,lyr_TopoTijdReis1912_4,],
                                fold: 'close',
                                title: 'TopoTijdReis'});
var group_Achtergrondkaarten = new ol.layer.Group({
                                layers: [lyr_GeomorfologischeKaart_0,lyr_Luchtfoto2024Ortho8cmRGB_1,lyr_OpenStreetMap_2,],
                                fold: 'open',
                                title: 'Achtergrondkaarten'});

lyr_GeomorfologischeKaart_0.setVisible(false);lyr_Luchtfoto2024Ortho8cmRGB_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_TopoTijdReis1870_3.setVisible(false);lyr_TopoTijdReis1912_4.setVisible(false);lyr_KnooppuntenRoutebureau_5.setVisible(true);lyr_LijnstukkenRoutebureau_6.setVisible(true);lyr_Officielewandelroutes_7.setVisible(false);lyr_Onverhardeschouwpadenhoofdwatergangen_8.setVisible(false);lyr_Parkeren_9.setVisible(false);lyr_Verdwijnendebruggen_10.setVisible(false);lyr_Nieuwebruggen_11.setVisible(false);lyr_OnofficielewandelroutesFyzigoenBoetenom_12.setVisible(true);lyr_Onofficielegeschiedeniswandelingen_13.setVisible(true);lyr_Recreatie_14.setVisible(false);lyr_Horeca_15.setVisible(false);lyr_Bijzonderelocaties_16.setVisible(false);lyr_Gemeentegrens_17.setVisible(false);
var layersList = [group_Achtergrondkaarten,group_TopoTijdReis,group_Routebureausituatie2025,group_Infrastructuur,lyr_OnofficielewandelroutesFyzigoenBoetenom_12,lyr_Onofficielegeschiedeniswandelingen_13,group_POI];
lyr_KnooppuntenRoutebureau_5.set('fieldAliases', {'Nummer': 'Nummer', });
lyr_LijnstukkenRoutebureau_6.set('fieldAliases', {'Van-Naar': 'Van-Naar', });
lyr_Officielewandelroutes_7.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Onverhardeschouwpadenhoofdwatergangen_8.set('fieldAliases', {'Naam': 'Naam', });
lyr_Parkeren_9.set('fieldAliases', {'Naam P': 'Naam P', });
lyr_Verdwijnendebruggen_10.set('fieldAliases', {'Naam': 'Naam', });
lyr_Nieuwebruggen_11.set('fieldAliases', {'Naam': 'Naam', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_12.set('fieldAliases', {'Naam': 'Naam', 'Bron': 'Bron', 'Afstand': 'Afstand', });
lyr_Onofficielegeschiedeniswandelingen_13.set('fieldAliases', {'Naam': 'Naam', 'Afstand': 'Afstand', });
lyr_Recreatie_14.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Horeca_15.set('fieldAliases', {'Naam': 'Naam', 'Link': 'Link', });
lyr_Bijzonderelocaties_16.set('fieldAliases', {'Naam': 'Naam', 'Link 1': 'Link 1', 'Link 2': 'Link 2', });
lyr_Gemeentegrens_17.set('fieldAliases', {'Naam': 'Naam', });
lyr_KnooppuntenRoutebureau_5.set('fieldImages', {'Nummer': 'TextEdit', });
lyr_LijnstukkenRoutebureau_6.set('fieldImages', {'Van-Naar': 'TextEdit', });
lyr_Officielewandelroutes_7.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Onverhardeschouwpadenhoofdwatergangen_8.set('fieldImages', {'Naam': 'TextEdit', });
lyr_Parkeren_9.set('fieldImages', {'Naam P': 'TextEdit', });
lyr_Verdwijnendebruggen_10.set('fieldImages', {'Naam': 'TextEdit', });
lyr_Nieuwebruggen_11.set('fieldImages', {'Naam': 'TextEdit', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_12.set('fieldImages', {'Naam': 'TextEdit', 'Bron': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Onofficielegeschiedeniswandelingen_13.set('fieldImages', {'Naam': 'TextEdit', 'Afstand': 'TextEdit', });
lyr_Recreatie_14.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Horeca_15.set('fieldImages', {'Naam': 'TextEdit', 'Link': 'TextEdit', });
lyr_Bijzonderelocaties_16.set('fieldImages', {'Naam': 'TextEdit', 'Link 1': 'TextEdit', 'Link 2': 'TextEdit', });
lyr_Gemeentegrens_17.set('fieldImages', {'Naam': 'TextEdit', });
lyr_KnooppuntenRoutebureau_5.set('fieldLabels', {'Nummer': 'inline label - visible with data', });
lyr_LijnstukkenRoutebureau_6.set('fieldLabels', {'Van-Naar': 'no label', });
lyr_Officielewandelroutes_7.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Onverhardeschouwpadenhoofdwatergangen_8.set('fieldLabels', {'Naam': 'no label', });
lyr_Parkeren_9.set('fieldLabels', {'Naam P': 'no label', });
lyr_Verdwijnendebruggen_10.set('fieldLabels', {'Naam': 'no label', });
lyr_Nieuwebruggen_11.set('fieldLabels', {'Naam': 'no label', });
lyr_OnofficielewandelroutesFyzigoenBoetenom_12.set('fieldLabels', {'Naam': 'no label', 'Bron': 'no label', 'Afstand': 'no label', });
lyr_Onofficielegeschiedeniswandelingen_13.set('fieldLabels', {'Naam': 'no label', 'Afstand': 'no label', });
lyr_Recreatie_14.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Horeca_15.set('fieldLabels', {'Naam': 'no label', 'Link': 'no label', });
lyr_Bijzonderelocaties_16.set('fieldLabels', {'Naam': 'no label', 'Link 1': 'no label', 'Link 2': 'no label', });
lyr_Gemeentegrens_17.set('fieldLabels', {'Naam': 'no label', });
lyr_Gemeentegrens_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});