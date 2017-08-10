var size = 0;

var styleCache_highwayprimary={}
var style_highwayprimary = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.752941176471)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_highwayprimary[key]){
        var text = new ol.style.Text({
              font: '16.9px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_highwayprimary[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_highwayprimary[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};