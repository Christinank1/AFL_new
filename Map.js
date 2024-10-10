// Initialize the map centered on Australia
let map = L.map('map').setView([-25.0, 133.0], 4); // Australia central coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Team Data from the CSV file (data.csv)
let stadiums = [
    {team: "Bombers", lat: -37.8175, long: 144.9475, stadium: "Marvel Stadium"},
    {team: "Giants", lat: -33.8488, long: 151.0615, stadium: "GIANTS Stadium"},
    {team: "Bulldogs", lat: -37.8175, long: 144.9475, stadium: "Marvel Stadium"},
    {team: "Dockers", lat: -31.9505, long: 115.8770, stadium: "Optus Stadium"},
    {team: "Saints", lat: -37.8175, long: 144.9475, stadium: "Marvel Stadium"},
    {team: "Lions", lat: -27.4858, long: 153.0380, stadium: "Gabba"},
    {team: "Crows", lat: -34.9158, long: 138.5969, stadium: "Adelaide Oval"},
    {team: "Hawks", lat: -37.8199, long: 144.9834, stadium: "MCG"},
    {team: "Blues", lat: -37.8199, long: 144.9834, stadium: "MCG"},
    {team: "Swans", lat: -33.8915, long: 151.2232, stadium: "SCG"},
    {team: "Kangaroos", lat: -37.8175, long: 144.9475, stadium: "Marvel Stadium"},
    {team: "Cats", lat: -38.1505, long: 144.3547, stadium: "GMHBA Stadium"},
    {team: "Suns", lat: -28.0379, long: 153.4206, stadium: "Heritage Bank Stadium"},
    {team: "Demons", lat: -37.8199, long: 144.9834, stadium: "MCG"},
    {team: "Power", lat: -34.9158, long: 138.5969, stadium: "Adelaide Oval"},
    {team: "Magpies", lat: -37.8199, long: 144.9834, stadium: "MCG"},
    {team: "Tigers", lat: -37.8199, long: 144.9834, stadium: "MCG"},
    {team: "Eagles", lat: -31.9505, long: 115.8770, stadium: "Optus Stadium"},
];

// Loop through each team and add a marker to the map
stadiums.forEach(stadium => {
    L.marker([stadium.lat, stadium.long]).addTo(map)
        .bindPopup(`<b>${stadium.team}</b><br>${stadium.stadium}`);
});
