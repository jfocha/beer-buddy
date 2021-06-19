var map = L.map('map', {
    center: [37.7185, -122.4363],
    zoom: 10
});

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9ib3QxYSIsImEiOiJja3Eyem54aGUwdG5sMnVvNHhxYzE0cmJ0In0.QKQ9Dw_CmnmhmVNE-IvEUw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

// default public token: pk.eyJ1Ijoicm9ib3QxYSIsImEiOiJja3Eyem54aGUwdG5sMnVvNHhxYzE0cmJ0In0.QKQ9Dw_CmnmhmVNE-IvEUw