mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ib3QxYSIsImEiOiJja3Eyem54aGUwdG5sMnVvNHhxYzE0cmJ0In0.QKQ9Dw_CmnmhmVNE-IvEUw';
var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/dark-v10', // Map style to use
    center: [-122.4363, 37.7185], // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});

var marker = new mapboxgl.Marker() // Initialize a new marker
    .setLngLat([-122.4363, 37.7185]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map

var geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: 'Search for movie', // Placeholder text for the search bar
    //bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
    proximity: {
        longitude: -122.4363,
        latitude: 37.7185
    } // Coordinates of San Francisco
});

// Add the geocoder to the map
map.addControl(geocoder);

// After the map style has loaded on the page,
// add a source layer and default styling for a single point
map.on('load', function () {
    map.addSource('single-point', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'point',
        'source': 'single-point',
        'type': 'circle',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#448ee4'
        }
    });

    // Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
    //  Add a marker at the result's coordinates
    geocoder.on('result', function (e) {
        map.getSource('single-point').setData(e.result.geometry);
    });
});


// To Do: https://docs.mapbox.com/mapbox-gl-js/example/filter-features-within-map-view/