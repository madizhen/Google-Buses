var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SFtracts = new ol.format.GeoJSON();
var features_SFtracts = format_SFtracts.readFeatures(geojson_SFtracts, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SFtracts = new ol.source.Vector();
jsonSource_SFtracts.addFeatures(features_SFtracts);var lyr_SFtracts = new ol.layer.Vector({
                source:jsonSource_SFtracts, 
                style: style_SFtracts,
                title: "SF_tracts"
            });var format_highwayprimary = new ol.format.GeoJSON();
var features_highwayprimary = format_highwayprimary.readFeatures(geojson_highwayprimary, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwayprimary = new ol.source.Vector();
jsonSource_highwayprimary.addFeatures(features_highwayprimary);var lyr_highwayprimary = new ol.layer.Vector({
                source:jsonSource_highwayprimary, 
                style: style_highwayprimary,
                title: "highway_primary"
            });var format_evictionsgeocoded = new ol.format.GeoJSON();
var features_evictionsgeocoded = format_evictionsgeocoded.readFeatures(geojson_evictionsgeocoded, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_evictionsgeocoded = new ol.source.Vector();
jsonSource_evictionsgeocoded.addFeatures(features_evictionsgeocoded);var lyr_evictionsgeocoded = new ol.layer.Vector({
                source:jsonSource_evictionsgeocoded, 
                style: style_evictionsgeocoded,
                title: "evictions-geocoded"
            });var format_techbusstops = new ol.format.GeoJSON();
var features_techbusstops = format_techbusstops.readFeatures(geojson_techbusstops, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_techbusstops = new ol.source.Vector();
jsonSource_techbusstops.addFeatures(features_techbusstops);var lyr_techbusstops = new ol.layer.Vector({
                source:jsonSource_techbusstops, 
                style: style_techbusstops,
                title: "tech_bus_stops"
            });

lyr_SFtracts.setVisible(true);lyr_highwayprimary.setVisible(true);lyr_evictionsgeocoded.setVisible(true);lyr_techbusstops.setVisible(true);
var layersList = [baseLayer,lyr_SFtracts,lyr_highwayprimary,lyr_evictionsgeocoded,lyr_techbusstops];
