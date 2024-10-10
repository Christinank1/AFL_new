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

// Predefined team colors
let teamColors = {
    "Bombers": 'rgba(139, 0, 0, 1)',      // Bombers (Red/Black)
    "Giants": 'rgba(255, 102, 0, 1)',    // Giants (Orange/Charcoal)
    "Bulldogs": 'rgba(0, 0, 255, 1)',    // Bulldogs (Blue/Red/White)
    "Dockers": 'rgba(102, 0, 153, 1)',   // Dockers (Purple/White)
    "Saints": 'rgba(0, 0, 0, 1)',        // Saints (Black/White/Red)
    "Lions": 'rgba(255, 204, 0, 1)',     // Lions (Maroon/Blue/Gold)
    "Crows": 'rgba(173, 216, 230, 1)',   // Crows (Blue/Red/Yellow)
    "Hawks": 'rgba(128, 64, 0, 1)',      // Hawks (Brown/Gold)
    "Blues": 'rgba(0, 128, 0, 1)',       // Blues (Navy Blue/White)
    "Swans": 'rgba(255, 0, 0, 1)',       // Swans (Red/White)
    "Kangaroos": 'rgba(0, 102, 204, 1)', // Kangaroos (Blue/White)
    "Cats": 'rgba(144, 238, 144, 1)',    // Cats (Navy Blue/White)
    "Suns": 'rgba(255, 192, 203, 1)',    // Suns (Red/Yellow)
    "Demons": 'rgba(0, 0, 102, 1)',      // Demons (Navy Blue/Red)
    "Power": 'rgba(0, 128, 128, 1)',     // Power (Teal/Black/White)
    "Magpies": 'rgba(128, 128, 128, 1)', // Magpies (Black/White)
    "Tigers": 'rgba(230, 230, 250, 1)',  // Tigers (Yellow/Black)
    "Eagles": 'rgba(121, 160, 221, 1)'   // Eagles (Blue/Gold)
};

// Convert tacklesData to Chart.js dataset format
let datasets = Object.keys(tacklesData).map(team => ({
    label: team,
    data: tacklesData[team],
    fill: false,
    borderColor: teamColors[team],  // Use predefined team color
    borderWidth: 3,
    hidden: false // Start with all lines visible
}));

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
