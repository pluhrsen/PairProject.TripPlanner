const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoicGx1aHJzZW4iLCJhIjoiY2szNG50YXh5MDBkMzNkbGVobmwxdDN4bCJ9.0XLOJlbKLDfXv8uVElJFGQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);

const hotelMarker = buildMarker("hotels", [-87.6354, 41.8885]);

hotelMarker.addTo(map);
