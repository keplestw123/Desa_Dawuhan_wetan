ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.192419, -7.378017, 109.206260, -7.367806]);
var wms_layers = [];

var format_Desa_0 = new ol.format.GeoJSON();
var features_Desa_0 = format_Desa_0.readFeatures(json_Desa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Desa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_0.addFeatures(features_Desa_0);
var lyr_Desa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_0, 
                style: style_Desa_0,
                popuplayertitle: "Desa",
                interactive: true,
                title: '<img src="styles/legend/Desa_0.png" /> Desa'
            });
var format_RW_1 = new ol.format.GeoJSON();
var features_RW_1 = format_RW_1.readFeatures(json_RW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_1.addFeatures(features_RW_1);
var lyr_RW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_1, 
                style: style_RW_1,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_1_0.png" /> RW 1<br />\
    <img src="styles/legend/RW_1_1.png" /> RW 2<br />\
    <img src="styles/legend/RW_1_2.png" /> RW 3<br />\
    <img src="styles/legend/RW_1_3.png" /> RW 4<br />\
    <img src="styles/legend/RW_1_4.png" /> RW 5<br />\
    <img src="styles/legend/RW_1_5.png" /> <br />'
        });
var format_RT_2 = new ol.format.GeoJSON();
var features_RT_2 = format_RT_2.readFeatures(json_RT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_2.addFeatures(features_RT_2);
var lyr_RT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_2, 
                style: style_RT_2,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_2_0.png" /> 1<br />\
    <img src="styles/legend/RT_2_1.png" /> 2<br />\
    <img src="styles/legend/RT_2_2.png" /> 3<br />\
    <img src="styles/legend/RT_2_3.png" /> 4<br />\
    <img src="styles/legend/RT_2_4.png" /> 5<br />\
    <img src="styles/legend/RT_2_5.png" /> 6<br />\
    <img src="styles/legend/RT_2_6.png" /> 7<br />\
    <img src="styles/legend/RT_2_7.png" /> 8<br />\
    <img src="styles/legend/RT_2_8.png" /> 9<br />\
    <img src="styles/legend/RT_2_9.png" /> 10<br />\
    <img src="styles/legend/RT_2_10.png" /> 11<br />\
    <img src="styles/legend/RT_2_11.png" /> 12<br />\
    <img src="styles/legend/RT_2_12.png" /> 13<br />\
    <img src="styles/legend/RT_2_13.png" /> 14<br />\
    <img src="styles/legend/RT_2_14.png" /> 15<br />\
    <img src="styles/legend/RT_2_15.png" /> 16<br />\
    <img src="styles/legend/RT_2_16.png" /> 17<br />\
    <img src="styles/legend/RT_2_17.png" /> 18<br />\
    <img src="styles/legend/RT_2_18.png" /> 19<br />\
    <img src="styles/legend/RT_2_19.png" /> 20<br />\
    <img src="styles/legend/RT_2_20.png" /> 21<br />\
    <img src="styles/legend/RT_2_21.png" /> 22<br />\
    <img src="styles/legend/RT_2_22.png" /> 23<br />\
    <img src="styles/legend/RT_2_23.png" /> <br />'
        });
var format_Lapangan_3 = new ol.format.GeoJSON();
var features_Lapangan_3 = format_Lapangan_3.readFeatures(json_Lapangan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_3.addFeatures(features_Lapangan_3);
var lyr_Lapangan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_3, 
                style: style_Lapangan_3,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_3.png" /> Lapangan'
            });
var format_bangunan1_4 = new ol.format.GeoJSON();
var features_bangunan1_4 = format_bangunan1_4.readFeatures(json_bangunan1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bangunan1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan1_4.addFeatures(features_bangunan1_4);
var lyr_bangunan1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan1_4, 
                style: style_bangunan1_4,
                popuplayertitle: "bangunan1",
                interactive: true,
                title: '<img src="styles/legend/bangunan1_4.png" /> bangunan1'
            });
var format_bangunan_5 = new ol.format.GeoJSON();
var features_bangunan_5 = format_bangunan_5.readFeatures(json_bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_5.addFeatures(features_bangunan_5);
var lyr_bangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_5, 
                style: style_bangunan_5,
                popuplayertitle: "bangunan",
                interactive: true,
                title: '<img src="styles/legend/bangunan_5.png" /> bangunan'
            });
var format_Sungai_6 = new ol.format.GeoJSON();
var features_Sungai_6 = format_Sungai_6.readFeatures(json_Sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_6.addFeatures(features_Sungai_6);
var lyr_Sungai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_6, 
                style: style_Sungai_6,
                popuplayertitle: "Sungai",
                interactive: true,
    title: 'Sungai<br />\
    <img src="styles/legend/Sungai_6_0.png" /> <br />'
        });
var format_jalan_7 = new ol.format.GeoJSON();
var features_jalan_7 = format_jalan_7.readFeatures(json_jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_7.addFeatures(features_jalan_7);
var lyr_jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_7, 
                style: style_jalan_7,
                popuplayertitle: "jalan",
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_7_0.png" /> Jl. Kauman<br />\
    <img src="styles/legend/jalan_7_1.png" /> Jl.Haji Sulaeman<br />\
    <img src="styles/legend/jalan_7_2.png" /> Jl.Makam<br />\
    <img src="styles/legend/jalan_7_3.png" /> Jl.Proklamasi<br />\
    <img src="styles/legend/jalan_7_4.png" /> Jl.Raya Dawuhan Wetan<br />\
    <img src="styles/legend/jalan_7_5.png" /> <br />'
        });
var format_tempatibadah_8 = new ol.format.GeoJSON();
var features_tempatibadah_8 = format_tempatibadah_8.readFeatures(json_tempatibadah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tempatibadah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatibadah_8.addFeatures(features_tempatibadah_8);
var lyr_tempatibadah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatibadah_8, 
                style: style_tempatibadah_8,
                popuplayertitle: "tempat ibadah",
                interactive: true,
    title: 'tempat ibadah<br />\
    <img src="styles/legend/tempatibadah_8_0.png" /> <br />'
        });
var format_Pendidikan_9 = new ol.format.GeoJSON();
var features_Pendidikan_9 = format_Pendidikan_9.readFeatures(json_Pendidikan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pendidikan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_9.addFeatures(features_Pendidikan_9);
var lyr_Pendidikan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_9, 
                style: style_Pendidikan_9,
                popuplayertitle: "Pendidikan",
                interactive: true,
    title: 'Pendidikan<br />\
    <img src="styles/legend/Pendidikan_9_0.png" /> MI Ma\'arif NU 1 Dawuhan Wetan<br />\
    <img src="styles/legend/Pendidikan_9_1.png" /> Pondok Pesantren Darul Qur\'an<br />\
    <img src="styles/legend/Pendidikan_9_2.png" /> SD Negeri Dawuhan Wetan<br />\
    <img src="styles/legend/Pendidikan_9_3.png" /> TK Diponegoro 12<br />\
    <img src="styles/legend/Pendidikan_9_4.png" /> TK Diponegoro 24<br />\
    <img src="styles/legend/Pendidikan_9_5.png" /> TPQ Azzadiyyah<br />\
    <img src="styles/legend/Pendidikan_9_6.png" /> <br />'
        });
var format_Kades_10 = new ol.format.GeoJSON();
var features_Kades_10 = format_Kades_10.readFeatures(json_Kades_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kades_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kades_10.addFeatures(features_Kades_10);
var lyr_Kades_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kades_10, 
                style: style_Kades_10,
                popuplayertitle: "Kades",
                interactive: true,
                title: '<img src="styles/legend/Kades_10.png" /> Kades'
            });

lyr_Desa_0.setVisible(true);lyr_RW_1.setVisible(true);lyr_RT_2.setVisible(true);lyr_Lapangan_3.setVisible(true);lyr_bangunan1_4.setVisible(true);lyr_bangunan_5.setVisible(true);lyr_Sungai_6.setVisible(true);lyr_jalan_7.setVisible(true);lyr_tempatibadah_8.setVisible(true);lyr_Pendidikan_9.setVisible(true);lyr_Kades_10.setVisible(true);
var layersList = [lyr_Desa_0,lyr_RW_1,lyr_RT_2,lyr_Lapangan_3,lyr_bangunan1_4,lyr_bangunan_5,lyr_Sungai_6,lyr_jalan_7,lyr_tempatibadah_8,lyr_Pendidikan_9,lyr_Kades_10];
lyr_Desa_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RW_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RT_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_bangunan1_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'communicat': 'communicat', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', });
lyr_bangunan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kode': 'Kode', });
lyr_Sungai_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_tempatibadah_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kades_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Desa_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RW_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_bangunan1_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'communicat': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'highway': 'TextEdit', 'water': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_bangunan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kode': 'TextEdit', });
lyr_Sungai_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_tempatibadah_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kades_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Desa_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RW_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RT_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_bangunan1_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'communicat': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', });
lyr_bangunan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kode': 'no label', });
lyr_Sungai_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_tempatibadah_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kades_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kades_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});