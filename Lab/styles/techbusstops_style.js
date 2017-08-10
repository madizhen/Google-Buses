var size = 0;

var styleCache_techbusstops={}
var style_techbusstops = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.5 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(166,206,227,1.0)"})})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_techbusstops[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_techbusstops[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_techbusstops[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};