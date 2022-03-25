// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (zoom range 0-18).
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get array from cities.js containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "#ff9900",
        fillColor: "#ff9900",
        weight: 4,
        fillOpacity: 0.5
    })
    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
   });

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// skiil drill: SFO-Austin-Bergstrom-TorontoPearson-JFK
let line2 = [
    [37.6213, -122.3790],
    [30.1974, -97.6663],
    [43.6777, -79.6248],
    [40.6473, -73.7905]
]

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow",
  }).addTo(map);

// for skill drill
  L.polyline(line2, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '4, 8'
  }).addTo(map);

//  Add a circle marker to the map for Los Angeles, California.
// var circleMarker = L.circle([34.0522, -118.2437], {
//     color: "black",
//     fillColor: "#ffffa1",
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);


// We create the tile layer that will be the background of our map.  Dark map layer_style: dark-v10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',  //street layer
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);