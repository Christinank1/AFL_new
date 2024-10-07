// BarChartGoals.js
const ctxGoals = document.getElementById('goalsChart').getContext('2d');

// Data for teams and their total goals (from your dataset)
let teams = [
    "Bombers", "Giants", "Bulldogs", "Dockers", "Saints", "Lions", "Crows", 
    "Hawks", "Blues", "Swans", "Kangaroos", "Cats", "Suns", "Demons", 
    "Power", "Magpies", "Tigers", "Eagles"
];

// Total goals scored by each team (data from the G column in your dataset)
let goals = [12.0, 13.2, 13.4, 12.4, 11.0, 13.5, 12.1, 13.2, 13.6, 14.0, 10.6, 14.1, 12.2, 11.3, 11.9, 12.5, 9.2, 10.0];

// Same colors as in the BubbleChart.js file for each team
let colors = [
    'rgba(255, 99, 132, 0.7)',   // Bombers (Red)
    'rgba(54, 162, 235, 0.7)',   // Giants (Blue)
    'rgba(75, 192, 192, 0.7)',   // Bulldogs (Teal)
    'rgba(153, 102, 255, 0.7)',  // Dockers (Purple)
    'rgba(255, 159, 64, 0.7)',   // Saints (Orange)
    'rgba(255, 206, 86, 0.7)',   // Lions (Yellow)
    'rgba(75, 192, 192, 0.7)',   // Crows (Teal)
    'rgba(54, 162, 235, 0.7)',   // Hawks (Blue)
    'rgba(255, 99, 132, 0.7)',   // Blues (Red)
    'rgba(153, 102, 255, 0.7)',  // Swans (Purple)
    'rgba(255, 159, 64, 0.7)',   // Kangaroos (Orange)
    'rgba(255, 206, 86, 0.7)',   // Cats (Yellow)
    'rgba(75, 192, 192, 0.7)',   // Suns (Teal)
    'rgba(54, 162, 235, 0.7)',   // Demons (Blue)
    'rgba(255, 99, 132, 0.7)',   // Power (Red)
    'rgba(255, 206, 86, 0.7)',   // Magpies (Yellow)
    'rgba(255, 159, 64, 0.7)',   // Tigers (Orange)
    'rgba(153, 102, 255, 0.7)'   // Eagles (Purple)
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
