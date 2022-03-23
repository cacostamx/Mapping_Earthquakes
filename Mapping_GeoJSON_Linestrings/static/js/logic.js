// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (zoom range 0-18).
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// let map = L.map('mapid').setView([30, 30], 2);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);   //This adds a marker to the map

// Using pointToLayer function
/*L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h4>"+feature.properties.city+", "+feature.properties.country+"</h4>");
  }
}).addTo(map);
*/
// Using onEachFeature
/*L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h3> Airport Code: "+feature.properties.faa+"</h3><hr><h3>Airport name: "+feature.properties.name+"</h3>");
    }
  }).addTo(map);
*/

// We create the tile layer that will be the background of our map.  Dark map layer_style: dark-v10
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',  //street layer
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a baselayer to add maps options
let baseMaps = {
  "Day Navigation": light,
  "Night Navigation": dark
};

// create map object
let map = L.map('mapid', {
  center: [44, -80],
  zoom: 2,
  layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/cacostamx/Mapping_Earthquakes/Mapping_GeoJSON/majorAirports.json";
let torontoData = "https://raw.githubusercontent.com/cacostamx/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Grabbing GeoJSON data
/*d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h4> Airport Code: "+feature.properties.faa+"</h4><hr><h4>Airport name: "+feature.properties.name+"</h4>");
    }
  }).addTo(map);
});
*/
d3.json(torontoData).then(function(data) {
  console.log(data);
  L.geoJSON(data, {
    color: "#ffffa1", 
    weight: 2,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h4> Airline: "+feature.properties.airline+"</h4><hr><h4>Destination: "+feature.properties.dst+"</h4>");
    }
  }).addTo(map);
});