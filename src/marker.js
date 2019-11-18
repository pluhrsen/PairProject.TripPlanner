const mapboxgl = require("mapbox-gl");

// const iconURLs = {
//   hotels: "http://i.imgur.com/D9574Cu.png",
//   restaurants: "http://i.imgur.com/cqR6pUI.png",
//   activities: "http://i.imgur.com/WbMOfMl.png"
// };

const buildMarker = function (type, coords) {

  const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
  };

  const markerType = document.createElement("div");
  markerType.style.width = "32px";
  markerType.style.height = "39px";
  markerType.style.backgroundImage = `url(${iconURLs[type]})`;

  const marker = new mapboxgl.Marker(markerType).setLngLat(coords);

  return marker;
};

module.exports = buildMarker;
