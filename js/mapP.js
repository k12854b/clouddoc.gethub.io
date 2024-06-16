var map = L.map('map', {
  zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[36.49356179548571,2.8537233299245157],[36.50551246101656,2.872595820930832]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
function removeEmptyRowsFromPopupContent(content, feature) {
var tempDiv = document.createElement('div');
tempDiv.innerHTML = content;
var rows = tempDiv.querySelectorAll('tr');
for (var i = 0; i < rows.length; i++) {
   var td = rows[i].querySelector('td.visible-with-data');
   var key = td ? td.id : '';
   if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
       rows[i].parentNode.removeChild(rows[i]);
   }
}
return tempDiv.innerHTML;
}
document.querySelector(".leaflet-popup-pane").addEventListener("load", function(event) {
var tagName = event.target.tagName,
  popup = map._popup;
// Also check if flag is already set.
if (tagName === "IMG" && popup && !popup._updated) {
  popup._updated = true; // Set flag to prevent looping.
  popup.update();
}
}, true);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_edge2_basemap_0');
map.getPane('pane_edge2_basemap_0').style.zIndex = 400;
var img_edge2_basemap_0 = 'data/edge2_basemap_0.png';
var img_bounds_edge2_basemap_0 = [[36.485015365518,2.832401036876],[36.511726795278,2.87017829742]];
var layer_edge2_basemap_0 = new L.imageOverlay(img_edge2_basemap_0,
                                    img_bounds_edge2_basemap_0,
                                    {pane: 'pane_edge2_basemap_0'});
bounds_group.addLayer(layer_edge2_basemap_0);
map.addLayer(layer_edge2_basemap_0);
function pop_buildings_eg2_2D_1(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['@ID'] !== null ? autolinker.link(feature.properties['@ID'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ABANDONED:'] !== null ? autolinker.link(feature.properties['ABANDONED:'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:CITY'] !== null ? autolinker.link(feature.properties['ADDR:CITY'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:COUNT'] !== null ? autolinker.link(feature.properties['ADDR:COUNT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:HOUSE'] !== null ? autolinker.link(feature.properties['ADDR:HOUSE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:PLACE'] !== null ? autolinker.link(feature.properties['ADDR:PLACE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:POSTC'] !== null ? autolinker.link(feature.properties['ADDR:POSTC'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:STREE'] !== null ? autolinker.link(feature.properties['ADDR:STREE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ADDR:SUBUR'] !== null ? autolinker.link(feature.properties['ADDR:SUBUR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ALT_NAME'] !== null ? autolinker.link(feature.properties['ALT_NAME'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ALT_NAME:A'] !== null ? autolinker.link(feature.properties['ALT_NAME:A'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['AMENITY'] !== null ? autolinker.link(feature.properties['AMENITY'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ATM'] !== null ? autolinker.link(feature.properties['ATM'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND'] !== null ? autolinker.link(feature.properties['BRAND'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:AR'] !== null ? autolinker.link(feature.properties['BRAND:AR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:EMAI'] !== null ? autolinker.link(feature.properties['BRAND:EMAI'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:FR'] !== null ? autolinker.link(feature.properties['BRAND:FR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:SHOR'] !== null ? autolinker.link(feature.properties['BRAND:SHOR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:WEBS'] !== null ? autolinker.link(feature.properties['BRAND:WEBS'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:WIKI'] !== null ? autolinker.link(feature.properties['BRAND:WIKI'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BRAND:W_01'] !== null ? autolinker.link(feature.properties['BRAND:W_01'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BUILDING'] !== null ? autolinker.link(feature.properties['BUILDING'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['BUILDING:L'] !== null ? autolinker.link(feature.properties['BUILDING:L'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['CLOTHES'] !== null ? autolinker.link(feature.properties['CLOTHES'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['CONTENT'] !== null ? autolinker.link(feature.properties['CONTENT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['CRAFT'] !== null ? autolinker.link(feature.properties['CRAFT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['CROP'] !== null ? autolinker.link(feature.properties['CROP'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['CURRENCY:D'] !== null ? autolinker.link(feature.properties['CURRENCY:D'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['DENOMINATI'] !== null ? autolinker.link(feature.properties['DENOMINATI'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['EMAIL'] !== null ? autolinker.link(feature.properties['EMAIL'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ENTRANCE'] !== null ? autolinker.link(feature.properties['ENTRANCE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['FAX'] !== null ? autolinker.link(feature.properties['FAX'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['GOVERNMENT'] !== null ? autolinker.link(feature.properties['GOVERNMENT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['HEIGHT'] !== null ? autolinker.link(feature.properties['HEIGHT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['LEISURE'] !== null ? autolinker.link(feature.properties['LEISURE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['MAN_MADE'] !== null ? autolinker.link(feature.properties['MAN_MADE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME:AR'] !== null ? autolinker.link(feature.properties['NAME:AR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME:BER'] !== null ? autolinker.link(feature.properties['NAME:BER'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME:EN'] !== null ? autolinker.link(feature.properties['NAME:EN'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME:FR'] !== null ? autolinker.link(feature.properties['NAME:FR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NAME:KAB'] !== null ? autolinker.link(feature.properties['NAME:KAB'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['NATURAL'] !== null ? autolinker.link(feature.properties['NATURAL'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OFFICE'] !== null ? autolinker.link(feature.properties['OFFICE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OFFICIAL_N'] !== null ? autolinker.link(feature.properties['OFFICIAL_N'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OFFICIA_01'] !== null ? autolinker.link(feature.properties['OFFICIA_01'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OFFICIA_02'] !== null ? autolinker.link(feature.properties['OFFICIA_02'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPENING_HO'] !== null ? autolinker.link(feature.properties['OPENING_HO'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATOR'] !== null ? autolinker.link(feature.properties['OPERATOR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATOR:A'] !== null ? autolinker.link(feature.properties['OPERATOR:A'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATOR:F'] !== null ? autolinker.link(feature.properties['OPERATOR:F'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATOR:S'] !== null ? autolinker.link(feature.properties['OPERATOR:S'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATOR:W'] !== null ? autolinker.link(feature.properties['OPERATOR:W'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATO_01'] !== null ? autolinker.link(feature.properties['OPERATO_01'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['OPERATO_02'] !== null ? autolinker.link(feature.properties['OPERATO_02'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['PHONE'] !== null ? autolinker.link(feature.properties['PHONE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['POWER'] !== null ? autolinker.link(feature.properties['POWER'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['RELIGION'] !== null ? autolinker.link(feature.properties['RELIGION'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['REPAIR'] !== null ? autolinker.link(feature.properties['REPAIR'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['ROOF:SHAPE'] !== null ? autolinker.link(feature.properties['ROOF:SHAPE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SHOP'] !== null ? autolinker.link(feature.properties['SHOP'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SHORT_NAME'] !== null ? autolinker.link(feature.properties['SHORT_NAME'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SHORT_N_01'] !== null ? autolinker.link(feature.properties['SHORT_N_01'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SHORT_N_02'] !== null ? autolinker.link(feature.properties['SHORT_N_02'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SOURCE'] !== null ? autolinker.link(feature.properties['SOURCE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SPORT'] !== null ? autolinker.link(feature.properties['SPORT'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['SUBSTATION'] !== null ? autolinker.link(feature.properties['SUBSTATION'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['TOURISM'] !== null ? autolinker.link(feature.properties['TOURISM'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['TOWER:TYPE'] !== null ? autolinker.link(feature.properties['TOWER:TYPE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['TYPE'] !== null ? autolinker.link(feature.properties['TYPE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['WATER'] !== null ? autolinker.link(feature.properties['WATER'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['WEBSITE'] !== null ? autolinker.link(feature.properties['WEBSITE'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['WIKIDATA'] !== null ? autolinker.link(feature.properties['WIKIDATA'].toLocaleString()) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['WIKIPEDIA'] !== null ? autolinker.link(feature.properties['WIKIPEDIA'].toLocaleString()) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_buildings_eg2_2D_1_0() {
  return {
      pane: 'pane_buildings_eg2_2D_1',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0, 
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(255,255,255,1.0)',
      interactive: true,
  }
}
map.createPane('pane_buildings_eg2_2D_1');
map.getPane('pane_buildings_eg2_2D_1').style.zIndex = 401;
map.getPane('pane_buildings_eg2_2D_1').style['mix-blend-mode'] = 'normal';
var layer_buildings_eg2_2D_1 = new L.geoJson(json_buildings_eg2_2D_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_buildings_eg2_2D_1',
  layerName: 'layer_buildings_eg2_2D_1',
  pane: 'pane_buildings_eg2_2D_1',
  onEachFeature: pop_buildings_eg2_2D_1,
  style: style_buildings_eg2_2D_1_0,
});
bounds_group.addLayer(layer_buildings_eg2_2D_1);
map.addLayer(layer_buildings_eg2_2D_1);
function pop_clip_roads_edge2_2(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_clip_roads_edge2_2_0() {
  return {
      pane: 'pane_clip_roads_edge2_2',
      opacity: 1,
      color: 'rgba(255,255,255,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 3.0,
      fillOpacity: 0,
      interactive: true,
  }
}
map.createPane('pane_clip_roads_edge2_2');
map.getPane('pane_clip_roads_edge2_2').style.zIndex = 402;
map.getPane('pane_clip_roads_edge2_2').style['mix-blend-mode'] = 'normal';
var layer_clip_roads_edge2_2 = new L.geoJson(json_clip_roads_edge2_2, {
  attribution: '',
  interactive: true,
  dataVar: 'json_clip_roads_edge2_2',
  layerName: 'layer_clip_roads_edge2_2',
  pane: 'pane_clip_roads_edge2_2',
  onEachFeature: pop_clip_roads_edge2_2,
  style: style_clip_roads_edge2_2_0,
});
bounds_group.addLayer(layer_clip_roads_edge2_2);
map.addLayer(layer_clip_roads_edge2_2);
setBounds();
L.ImageOverlay.include({
  getBounds: function () {
      return this._bounds;
  }
});
// Overlaying cloud map 
var cloud = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
  }).addTo(map);
//leaflet control
    var baseMaps = {
    'map':map
    }
    var overlayMaps ={
    'cloud':cloud
    }
    L.control.layers(baseMaps,overlayMaps).addTo(map);