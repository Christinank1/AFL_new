// Map.js
let map = L.map('map').setView([-25.0, 133.0], 4); // Center on Australia

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Team Data (this can come from your CSV parsed using d3.js or another library)
let stadiums = [
    {team: "Bombers", lat: -37.8175, long: 144.9475, stadium: "Marvel Stadium"},
    {team: "Giants", lat: -33.8488, long: 151.0615, stadium: "GIANTS Stadium"},
    // Add other teams here...
];

stadiums.forEach(stadium => {
    L.marker([stadium.lat, stadium.long]).addTo(map)
        .bindPopup(`<b>${stadium.team}</b><br>${stadium.stadium}`);
});
