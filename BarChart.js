// BarChart.js
const ctx = document.getElementById('teamStats').getContext('2d');

// Team Data (extracted from your CSV)
let teams = [
    "Bombers", "Giants", "Bulldogs", "Dockers", "Saints", "Lions", "Crows", 
    "Hawks", "Blues", "Swans", "Kangaroos", "Cats", "Suns", "Demons", 
    "Power", "Magpies", "Tigers", "Eagles"
];

let goals = [12.0, 13.2, 13.4, 12.4, 11.0, 13.5, 12.1, 13.2, 13.6, 14.0, 10.6, 14.1, 12.2, 11.3, 11.9, 12.5, 9.2, 10.0];
let disposals = [380.4, 372.5, 370.9, 367.2, 364.4, 361.4, 360.9, 360.0, 359.2, 356.0, 353.6, 350.4, 347.3, 345.7, 344.5, 342.7, 338.2, 315.8];

// Create the bar chart using Chart.js
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: teams, // Team names as labels on the x-axis
        datasets: [
            {
                label: 'Goals',
                data: goals, // Data for Goals
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green background
                borderColor: 'rgba(75, 192, 192, 1)', // Dark green border
                borderWidth: 1
            },
            {
                label: 'Disposals',
                data: disposals, // Data for Disposals
                backgroundColor: 'rgba(153, 102, 255, 0.2)', // Light purple background
                borderColor: 'rgba(153, 102, 255, 1)', // Dark purple border
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true, // Y-axis starts from 0
            }
        }
    }
});
