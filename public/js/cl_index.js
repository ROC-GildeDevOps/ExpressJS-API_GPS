const map = L.map("map").setView([51.19, 6.003803], 15);

// Use openstreetmap to get a map
const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Put a marker
const markerGld = L.marker([51.194494, 6.003803])
  .addTo(map)
  .bindPopup("<b>ROC Gildeopleidingen</b>")
  .openPopup();

const popup = L.popup();

// Add a click funtion
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(`Launch nuke at ${e.latlng.toString()}`)
    .openOn(map);
}

map.on("click", onMapClick);
