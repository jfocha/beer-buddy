var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

L.tileLayer('https://maps.tilehosting.com/styles/streets/{z}/{x}/{y}.png?key=HfiQgsMsSnorjEs2Sxek', {
    attribution: '<a href="https:www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target"_blank">© OpenStreetMap contributors</a>', 
}).addTo(map);