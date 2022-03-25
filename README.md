# Mapping Earthquakes

## Overview

The purpose of this analysis is to use JS scripts to gather earthquake and tectonic real data, in json format, from different sources and using Mapbox and Leaflet to map in an interactive map.

The map shows different layers, that help analyze the relationship of earthquakes locations and the tectonic plates.
- Base maps: a street map, a satellite map and a light version.
- Overlays:
    - Tectonic plates. Show the boundaries of tectonic plates.
    - Earthquakes. Show all the earthquakes registered in the last seven days. The color indicates de the magnitude according to the leyend.
    - Major Earthquakes. Show only those earthquakes of magnitude > 4.5 in the last seven days.

The user can pick the layers shown with the control element at the upper-right corner, as well as the zoom with the control in the upper-left corner. 

![Earthquakes Map](/Earthquake_Challenge/static/images/challenge.png)