// BarChartGoals.js
const ctxGoals = document.getElementById('goalsChart').getContext('2d');

// Data for teams and their total goals (from my dataset)
let teams = [
    "Bombers", "Giants", "Bulldogs", "Dockers", "Saints", "Lions", "Crows", 
    "Hawks", "Blues", "Swans", "Kangaroos", "Cats", "Suns", "Demons", 
    "Power", "Magpies", "Tigers", "Eagles"
];

// Total goals scored by each team (data from the G column in dataset)
let goals = [12.0, 13.2, 13.4, 12.4, 11.0, 13.5, 12.1, 13.2, 13.6, 14.0, 10.6, 14.1, 12.2, 11.3, 11.9, 12.5, 9.2, 10.0];

// Same colors as other charts
let colors = [
    'rgba(139, 0, 0, 1)',      // Bombers (Red/Black)
    'rgba(255, 102, 0, 1)',    // Giants (Orange/Charcoal)
    'rgba(0, 0, 255, 1)',      // Bulldogs (Blue/Red/White)
    'rgba(102, 0, 153, 1)',    // Dockers (Purple/White)
    'rgba(0, 0, 0, 1)',        // Saints (Black/White/Red)
    'rgba(255, 204, 0, 1)',    // Lions (Maroon/Blue/Gold)
    'rgba(173, 216, 230, 1)',      // Crows (Blue/Red/Yellow)
    'rgba(128, 64, 0, 1)',     // Hawks (Brown/Gold)
    'rgba(0, 128, 0, 1)',     // Blues (Navy Blue/White)
    'rgba(255, 0, 0, 1)',      // Swans (Red/White)
    'rgba(0, 102, 204, 1)',    // Kangaroos (Blue/White)
    'rgba(144, 238, 144, 1)',     // Cats (Navy Blue/White)
    'rgba(255, 192, 203, 1)',      // Suns (Red/Yellow)
    'rgba(0, 0, 102, 1)',      // Demons (Navy Blue/Red)
    'rgba(0, 128, 128, 1)',    // Power (Teal/Black/White)
    'rgba(128, 128, 128, 1)',        // Magpies (Black/White)
    'rgba(230, 230, 250, 1)',    // Tigers (Yellow/Black)
    'rgba(121, 160, 221, 1)'      // Eagles (Blue/Gold)
];


// Create the bar chart using Chart.js
const goalsChart = new Chart(ctxGoals, {
    type: 'bar',
    data: {
        labels: teams, // X-axis labels (teams)
        datasets: [{
            label: 'Total Goals per Team',
            data: goals, // Y-axis values (goals)
            backgroundColor: colors, // Bar colors for each team
            borderColor: colors.map(color => color.replace('0.7', '1')), // Darker border colors
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Y-axis starts from 0
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend since we only have one dataset
            },
            title: {
                display: true,
                text: 'Total Goals per Team'
            }
        }
    }
});
