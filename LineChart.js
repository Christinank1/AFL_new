

// LineChart.js
const ctx = document.getElementById('tacklesChart').getContext('2d');

// Sample Data: Tackles per game for each team
let games = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5']; // Example games

// Tackles per team (data extracted from your CSV)
let tacklesData = {
    "Bombers": [59.7, 60.1, 61.5, 58.2, 59.7],  
    "Giants": [67.0, 66.2, 65.5, 67.8, 67.0],  
    "Bulldogs": [59.4, 58.7, 60.4, 61.1, 59.4],  
    "Dockers": [58.1, 58.9, 57.4, 59.2, 58.1],  
    "Saints": [59.7, 60.8, 61.1, 62.4, 59.7],  
    "Lions": [54.6, 55.9, 56.2, 57.4, 54.6],  
    "Crows": [63.5, 62.4, 61.9, 64.1, 63.5],  
    "Hawks": [60.4, 61.7, 60.1, 62.5, 60.4],  
    "Blues": [63.4, 62.5, 63.7, 64.9, 63.4],  
    "Swans": [58.4, 59.9, 60.5, 61.7, 58.4],  
    "Kangaroos": [58.8, 59.2, 57.9, 60.1, 58.8],  
    "Cats": [63.6, 62.4, 61.7, 64.2, 63.6],  
    "Suns": [59.0, 60.5, 58.7, 60.3, 59.0],  
    "Demons": [58.1, 59.7, 60.9, 61.3, 58.1],  
    "Power": [64.7, 63.2, 62.4, 65.1, 64.7],  
    "Magpies": [64.0, 63.5, 61.2, 64.9, 64.0],  
    "Tigers": [50.5, 52.7, 53.2, 54.1, 50.5],  
    "Eagles": [55.9, 56.7, 57.8, 58.3, 55.9]
};

// Convert tacklesData to Chart.js dataset format
let datasets = Object.keys(tacklesData).map(team => ({
    label: team,
    data: tacklesData[team],
    fill: false,
    borderColor: getRandomColor(),
    borderWidth: 3,
    hidden: false // Start with all lines visible
}));

// Create a random color generator function for different line colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize the chart
let tacklesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: games, // Games as x-axis labels
        datasets: datasets
    },
    options: {
        scales: {
            y: {
                 min: 40,
                max: 70 
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Tackles Per Game by Team'
            }
        }
    }
});

// Function to highlight the selected team
function highlightTeam(selectedTeam) {
    tacklesChart.data.datasets.forEach(dataset => {
        if (dataset.label === selectedTeam) {
            dataset.borderWidth = 6; // Highlight selected team with a thicker line
            dataset.hidden = false; // Ensure the selected team is shown
        } else {
            dataset.borderWidth = 2; // Dim other lines
            dataset.hidden = false; // Ensure other teams are still shown
        }
    });

    tacklesChart.update(); // Refresh the chart
}

// Function to handle team selection
document.getElementById('teamSelect').addEventListener('change', function() {
    const selectedTeam = this.value;
    highlightTeam(selectedTeam);
});
