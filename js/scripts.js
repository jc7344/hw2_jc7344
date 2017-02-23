// instantiate a leaflet map into my container
// set the initial view

var map = L.map('mapContainer').setView([23.788556, 86.420009], 16);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   maxZoom: 18,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

L.marker([23.788556, 86.420009]).addTo(map)
    .bindPopup('Starting point of study area - Bajran Chowk junction in road 13')

L.marker([23.787132, 86.424014]).addTo(map)
    .bindPopup('Ending point of study area - Purana Bazar Water Tank in road 13')

var latlngs = [
    [23.788556, 86.420009],
    [23.788506, 86.421149],
    [23.787186, 86.423488],
    [23.787132, 86.424014]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

var legend = L.control({position: 'bottomright'}).addTo(map);



