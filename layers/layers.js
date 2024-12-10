var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZNT_2024_1 = new ol.format.GeoJSON();
var features_ZNT_2024_1 = format_ZNT_2024_1.readFeatures(json_ZNT_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNT_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNT_2024_1.addFeatures(features_ZNT_2024_1);
var lyr_ZNT_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNT_2024_1, 
                style: style_ZNT_2024_1,
                popuplayertitle: "ZNT_2024",
                interactive: true,
    title: 'ZNT_2024<br />\
    <img src="styles/legend/ZNT_2024_1_0.png" /> 17.500.001 - Rp 21.000.000<br />\
    <img src="styles/legend/ZNT_2024_1_1.png" /> Rp 10.500.001 - Rp 14.000.000<br />\
    <img src="styles/legend/ZNT_2024_1_2.png" /> Rp 14.000.001 - RP 17.500.000<br />\
    <img src="styles/legend/ZNT_2024_1_3.png" /> Rp 7.000.001 - Rp 10.500.000<br />\
    <img src="styles/legend/ZNT_2024_1_4.png" /> Rp 3.500.001 - Rp 7.000.000<br />\
    <img src="styles/legend/ZNT_2024_1_5.png" /> Under RP 3.500.000<br />\
    <img src="styles/legend/ZNT_2024_1_6.png" /> Zona 0<br />\
    <img src="styles/legend/ZNT_2024_1_7.png" /> <br />'
        });
var format_Penggunaan_lahan_2019_2 = new ol.format.GeoJSON();
var features_Penggunaan_lahan_2019_2 = format_Penggunaan_lahan_2019_2.readFeatures(json_Penggunaan_lahan_2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penggunaan_lahan_2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penggunaan_lahan_2019_2.addFeatures(features_Penggunaan_lahan_2019_2);
var lyr_Penggunaan_lahan_2019_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penggunaan_lahan_2019_2, 
                style: style_Penggunaan_lahan_2019_2,
                popuplayertitle: "Penggunaan_lahan_2019",
                interactive: true,
    title: 'Penggunaan_lahan_2019<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_0.png" /> Fasilitas Kesehatan<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_1.png" /> Fasilitas Layanan Umum<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_2.png" /> Fasilitas Olahraga<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_3.png" /> Fasilitas Pemerintahan<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_4.png" /> Fasilitas Pendidikan<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_5.png" /> Fasilitas Peribadatan<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_6.png" /> Industri<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_7.png" /> Jalan  Arterii<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_8.png" /> Jalan  Lokal<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_9.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_10.png" /> Jalur Kerta Api<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_11.png" /> Pariwisata dan Hiburan<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_12.png" /> Pemakaman<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_13.png" /> Pemukiman<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_14.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_15.png" /> Prasarana Transportasi<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_16.png" /> Sungai<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_17.png" /> Taman Kota<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_18.png" /> Tanah Kosong<br />\
    <img src="styles/legend/Penggunaan_lahan_2019_2_19.png" /> <br />'
        });
var format_PG_Perubahan2024_3 = new ol.format.GeoJSON();
var features_PG_Perubahan2024_3 = format_PG_Perubahan2024_3.readFeatures(json_PG_Perubahan2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PG_Perubahan2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PG_Perubahan2024_3.addFeatures(features_PG_Perubahan2024_3);
var lyr_PG_Perubahan2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PG_Perubahan2024_3, 
                style: style_PG_Perubahan2024_3,
                popuplayertitle: "PG_Perubahan2024",
                interactive: true,
    title: 'PG_Perubahan2024<br />\
    <img src="styles/legend/PG_Perubahan2024_3_0.png" /> Fasilitas  Peribadatan<br />\
    <img src="styles/legend/PG_Perubahan2024_3_1.png" /> Fasilitas Kesehatan<br />\
    <img src="styles/legend/PG_Perubahan2024_3_2.png" /> Fasilitas Olahraga<br />\
    <img src="styles/legend/PG_Perubahan2024_3_3.png" /> Fasilitas Pemerintahan<br />\
    <img src="styles/legend/PG_Perubahan2024_3_4.png" /> Fasilitas Pendidikan<br />\
    <img src="styles/legend/PG_Perubahan2024_3_5.png" /> Industri<br />\
    <img src="styles/legend/PG_Perubahan2024_3_6.png" /> Jalan lokal<br />\
    <img src="styles/legend/PG_Perubahan2024_3_7.png" /> Masjid Shikh Zayid<br />\
    <img src="styles/legend/PG_Perubahan2024_3_8.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/PG_Perubahan2024_3_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZNT_2024_1.setVisible(true);lyr_Penggunaan_lahan_2019_2.setVisible(true);lyr_PG_Perubahan2024_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZNT_2024_1,lyr_Penggunaan_lahan_2019_2,lyr_PG_Perubahan2024_3];
lyr_ZNT_2024_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Export': 'FID_Export', 'OBJECTID': 'OBJECTID', 'FID_vzone_': 'FID_vzone_', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOLO_': 'SOLO_', 'SOLO_ID': 'SOLO_ID', 'NOZONE': 'NOZONE', 'COUNT': 'COUNT', 'SUM': 'SUM', 'MEAN': 'MEAN', 'MAX': 'MAX', 'MIN': 'MIN', 'RANGE': 'RANGE', 'VARIANCE': 'VARIANCE', 'STDDEV': 'STDDEV', 'PSTDDEV': 'PSTDDEV', 'RPBULAT': 'RPBULAT', 'INDEKS': 'INDEKS', 'TAHUN': 'TAHUN', 'NZBARU': 'NZBARU', 'RPBARU': 'RPBARU', 'LHTYPE': 'LHTYPE', 'FID_BATAS_': 'FID_BATAS_', 'Shape_Leng': 'Shape_Leng', 'SUMBER': 'SUMBER', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'JMLH_PDDK': 'JMLH_PDDK', 'KEPADATAN': 'KEPADATAN', 'Luas_1': 'Luas_1', 'luas2': 'luas2', 'nozona': 'nozona', 'Shape_Le_1': 'Shape_Le_1', 'NIR2024': 'NIR2024', 'NIR_pembul': 'NIR_pembul', 'nozonarev': 'nozonarev', 'deltaNIR': 'deltaNIR', 'deltaNIR2': 'deltaNIR2', 'Range_NIR': 'Range_NIR', 'FID_zaExpo': 'FID_zaExpo', 'OBJECTID_2': 'OBJECTID_2', 'FID_vzone1': 'FID_vzone1', 'AREA_1': 'AREA_1', 'PERIMETER_': 'PERIMETER_', 'SOLO1': 'SOLO1', 'SOLO_ID_1': 'SOLO_ID_1', 'NOZONE_1': 'NOZONE_1', 'COUNT_1': 'COUNT_1', 'SUM_1': 'SUM_1', 'MEAN_1': 'MEAN_1', 'MAX_1': 'MAX_1', 'MIN_1': 'MIN_1', 'RANGE_1': 'RANGE_1', 'VARIANCE_1': 'VARIANCE_1', 'STDDEV_1': 'STDDEV_1', 'PSTDDEV_1': 'PSTDDEV_1', 'RPBULAT_1': 'RPBULAT_1', 'INDEKS_1': 'INDEKS_1', 'TAHUN_1': 'TAHUN_1', 'NZBARU_1': 'NZBARU_1', 'RPBARU_1': 'RPBARU_1', 'LHTYPE_1': 'LHTYPE_1', 'FID_BATAS1': 'FID_BATAS1', 'Shape_Le_2': 'Shape_Le_2', 'SUMBER_1': 'SUMBER_1', 'WADMKD_1': 'WADMKD_1', 'WADMKC_1': 'WADMKC_1', 'WADMKK_1': 'WADMKK_1', 'WADMPR_1': 'WADMPR_1', 'LUAS_12': 'LUAS_12', 'JMLH_PDDK_': 'JMLH_PDDK_', 'KEPADATAN_': 'KEPADATAN_', 'Luas_12_13': 'Luas_12_13', 'luas2_1': 'luas2_1', 'nozona_1': 'nozona_1', 'Shape_Le_3': 'Shape_Le_3', 'NIR2024_1': 'NIR2024_1', 'NIR_pemb_1': 'NIR_pemb_1', 'nozonarev_': 'nozonarev_', 'deltaNIR_1': 'deltaNIR_1', 'deltaNIR2_': 'deltaNIR2_', 'Range_NIR_': 'Range_NIR_', 'Shape_Le_4': 'Shape_Le_4', 'Shape_Area': 'Shape_Area', });
lyr_Penggunaan_lahan_2019_2.set('fieldAliases', {'Qcode10': 'Qcode10', 'Qname10': 'Qname10', 'Qlabel': 'Qlabel', 'Fitcode_1': 'Fitcode_1', 'Idsn_1': 'Idsn_1', 'Tahun_Da_1': 'Tahun_Da_1', 'Qcode100': 'Qcode100', 'Qname100': 'Qname100', 'Fitcode': 'Fitcode', 'Idsn': 'Idsn', 'hectarr': 'hectarr', 'Perubahan': 'Perubahan', });
lyr_PG_Perubahan2024_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Qname10': 'Qname10', 'Perubahan': 'Perubahan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZNT_2024_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Export': 'TextEdit', 'OBJECTID': 'TextEdit', 'FID_vzone_': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOLO_': 'TextEdit', 'SOLO_ID': 'TextEdit', 'NOZONE': 'TextEdit', 'COUNT': 'TextEdit', 'SUM': 'TextEdit', 'MEAN': 'TextEdit', 'MAX': 'TextEdit', 'MIN': 'TextEdit', 'RANGE': 'TextEdit', 'VARIANCE': 'TextEdit', 'STDDEV': 'TextEdit', 'PSTDDEV': 'TextEdit', 'RPBULAT': 'TextEdit', 'INDEKS': 'TextEdit', 'TAHUN': 'TextEdit', 'NZBARU': 'TextEdit', 'RPBARU': 'TextEdit', 'LHTYPE': 'TextEdit', 'FID_BATAS_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SUMBER': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'JMLH_PDDK': 'TextEdit', 'KEPADATAN': 'TextEdit', 'Luas_1': 'TextEdit', 'luas2': 'TextEdit', 'nozona': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'NIR2024': 'TextEdit', 'NIR_pembul': 'TextEdit', 'nozonarev': 'TextEdit', 'deltaNIR': 'TextEdit', 'deltaNIR2': 'TextEdit', 'Range_NIR': 'TextEdit', 'FID_zaExpo': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'FID_vzone1': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETER_': 'TextEdit', 'SOLO1': 'TextEdit', 'SOLO_ID_1': 'TextEdit', 'NOZONE_1': 'TextEdit', 'COUNT_1': 'TextEdit', 'SUM_1': 'TextEdit', 'MEAN_1': 'TextEdit', 'MAX_1': 'TextEdit', 'MIN_1': 'TextEdit', 'RANGE_1': 'TextEdit', 'VARIANCE_1': 'TextEdit', 'STDDEV_1': 'TextEdit', 'PSTDDEV_1': 'TextEdit', 'RPBULAT_1': 'TextEdit', 'INDEKS_1': 'TextEdit', 'TAHUN_1': 'TextEdit', 'NZBARU_1': 'TextEdit', 'RPBARU_1': 'TextEdit', 'LHTYPE_1': 'TextEdit', 'FID_BATAS1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'SUMBER_1': 'TextEdit', 'WADMKD_1': 'TextEdit', 'WADMKC_1': 'TextEdit', 'WADMKK_1': 'TextEdit', 'WADMPR_1': 'TextEdit', 'LUAS_12': 'TextEdit', 'JMLH_PDDK_': 'TextEdit', 'KEPADATAN_': 'TextEdit', 'Luas_12_13': 'TextEdit', 'luas2_1': 'TextEdit', 'nozona_1': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'NIR2024_1': 'TextEdit', 'NIR_pemb_1': 'TextEdit', 'nozonarev_': 'TextEdit', 'deltaNIR_1': 'TextEdit', 'deltaNIR2_': 'TextEdit', 'Range_NIR_': 'TextEdit', 'Shape_Le_4': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Penggunaan_lahan_2019_2.set('fieldImages', {'Qcode10': 'TextEdit', 'Qname10': 'TextEdit', 'Qlabel': 'TextEdit', 'Fitcode_1': 'TextEdit', 'Idsn_1': 'TextEdit', 'Tahun_Da_1': 'TextEdit', 'Qcode100': 'Range', 'Qname100': 'TextEdit', 'Fitcode': 'TextEdit', 'Idsn': 'TextEdit', 'hectarr': 'TextEdit', 'Perubahan': 'TextEdit', });
lyr_PG_Perubahan2024_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Qname10': 'TextEdit', 'Perubahan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZNT_2024_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'FID_Export': 'hidden field', 'OBJECTID': 'hidden field', 'FID_vzone_': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SOLO_': 'hidden field', 'SOLO_ID': 'hidden field', 'NOZONE': 'hidden field', 'COUNT': 'hidden field', 'SUM': 'hidden field', 'MEAN': 'hidden field', 'MAX': 'hidden field', 'MIN': 'hidden field', 'RANGE': 'hidden field', 'VARIANCE': 'hidden field', 'STDDEV': 'hidden field', 'PSTDDEV': 'hidden field', 'RPBULAT': 'hidden field', 'INDEKS': 'hidden field', 'TAHUN': 'hidden field', 'NZBARU': 'hidden field', 'RPBARU': 'hidden field', 'LHTYPE': 'hidden field', 'FID_BATAS_': 'hidden field', 'Shape_Leng': 'hidden field', 'SUMBER': 'hidden field', 'WADMKD': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'LUAS': 'hidden field', 'JMLH_PDDK': 'hidden field', 'KEPADATAN': 'hidden field', 'Luas_1': 'hidden field', 'luas2': 'hidden field', 'nozona': 'inline label - visible with data', 'Shape_Le_1': 'hidden field', 'NIR2024': 'hidden field', 'NIR_pembul': 'hidden field', 'nozonarev': 'hidden field', 'deltaNIR': 'hidden field', 'deltaNIR2': 'hidden field', 'Range_NIR': 'hidden field', 'FID_zaExpo': 'hidden field', 'OBJECTID_2': 'hidden field', 'FID_vzone1': 'hidden field', 'AREA_1': 'hidden field', 'PERIMETER_': 'hidden field', 'SOLO1': 'hidden field', 'SOLO_ID_1': 'hidden field', 'NOZONE_1': 'hidden field', 'COUNT_1': 'hidden field', 'SUM_1': 'hidden field', 'MEAN_1': 'hidden field', 'MAX_1': 'hidden field', 'MIN_1': 'hidden field', 'RANGE_1': 'hidden field', 'VARIANCE_1': 'hidden field', 'STDDEV_1': 'hidden field', 'PSTDDEV_1': 'hidden field', 'RPBULAT_1': 'hidden field', 'INDEKS_1': 'hidden field', 'TAHUN_1': 'hidden field', 'NZBARU_1': 'hidden field', 'RPBARU_1': 'hidden field', 'LHTYPE_1': 'hidden field', 'FID_BATAS1': 'hidden field', 'Shape_Le_2': 'hidden field', 'SUMBER_1': 'hidden field', 'WADMKD_1': 'hidden field', 'WADMKC_1': 'hidden field', 'WADMKK_1': 'hidden field', 'WADMPR_1': 'hidden field', 'LUAS_12': 'hidden field', 'JMLH_PDDK_': 'hidden field', 'KEPADATAN_': 'hidden field', 'Luas_12_13': 'hidden field', 'luas2_1': 'hidden field', 'nozona_1': 'hidden field', 'Shape_Le_3': 'hidden field', 'NIR2024_1': 'inline label - visible with data', 'NIR_pemb_1': 'hidden field', 'nozonarev_': 'hidden field', 'deltaNIR_1': 'hidden field', 'deltaNIR2_': 'hidden field', 'Range_NIR_': 'hidden field', 'Shape_Le_4': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Penggunaan_lahan_2019_2.set('fieldLabels', {'Qcode10': 'hidden field', 'Qname10': 'inline label - visible with data', 'Qlabel': 'hidden field', 'Fitcode_1': 'hidden field', 'Idsn_1': 'hidden field', 'Tahun_Da_1': 'hidden field', 'Qcode100': 'hidden field', 'Qname100': 'hidden field', 'Fitcode': 'hidden field', 'Idsn': 'hidden field', 'hectarr': 'hidden field', 'Perubahan': 'hidden field', });
lyr_PG_Perubahan2024_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Qname10': 'hidden field', 'Perubahan': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PG_Perubahan2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});