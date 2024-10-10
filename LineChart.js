// LineChart.js
const ctx = document.getElementById('tacklesChart').getContext('2d');

// Sample Data: Tackles per game for each team
let colors = [
    'rgba(139, 0, 0, 1)',      // Bombers (Red/Black)
    'rgba(255, 102, 0, 1)',    // Giants (Orange/Charcoal)
    'rgba(0, 0, 255, 1)',      // Bulldogs (Blue/Red/White)
    'rgba(102, 0, 153, 1)',    // Dockers (Purple/White)
    'rgba(0, 0, 0, 1)',        // Saints (Black/White/Red)
    'rgba(255, 204, 0, 1)',    // Lions (Maroon/Blue/Gold)
    'rgba(173, 216, 230, 1)',  // Crows (Blue/Red/Yellow)
    'rgba(128, 64, 0, 1)',     // Hawks (Brown/Gold)
    'rgba(0, 128, 0, 1)',      // Blues (Navy Blue/White)
    'rgba(255, 0, 0, 1)',      // Swans (Red/White)
    'rgba(0, 102, 204, 1)',    // Kangaroos (Blue/White)
    'rgba(144, 238, 144, 1)',  // Cats (Navy Blue/White)
    'rgba(255, 192, 203, 1)',  // Suns (Red/Yellow)
    'rgba(0, 0, 102, 1)',      // Demons (Navy Blue/Red)
    'rgba(0, 128, 128, 1)',    // Power (Teal/Black/White)
    'rgba(128, 128, 128, 1)',  // Magpies (Black/White)
    'rgba(230, 230, 250, 1)',  // Tigers (Yellow/Black)
    'rgba(121, 160, 221, 1)'   // Eagles (Blue/Gold)
];

// Example data for tackles per game for each team
let labels = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5'];
let dataSets = [
    {
        label: 'Bombers',
        data: [45, 50, 53, 49, 55],
        borderColor: colors[0],
        backgroundColor: colors[0],
        fill: false,
        tension: 0.4
    },
    {
        label: 'Giants',
        data: [50, 48, 46, 54, 52],
        borderColor: colors[1],
        backgroundColor: colors[1],
        fill: false,
        tension: 0.4
    },
    {
        label: 'Bulldogs',
        data: [60, 58, 62, 65, 64],
        borderColor: colors[2],
        backgroundColor: colors[2],
        fill: false,
        tension: 0.4
    },
    {
        label: 'Dockers',
        data: [52, 55, 57, 54, 59],
        borderColor: colors[3],
        backgroundColor: colors[3],
        fill: false,
        tension: 0.4
    }
    // Add more datasets for other teams as needed
];

// Create the chart
let tacklesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: dataSets
    },
    options: {
        scales: {
            y: {
                min: 40,    // Set y-axis minimum value
                max: 70     // Set y-axis maximum value
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 20,  // Set size of the legend box
                    usePointStyle: true,  // Make the legend filled circles
                    pointStyle: 'circle',  // Set point style to circle
                }
            }
        }
    }
});
