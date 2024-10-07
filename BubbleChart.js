// BubbleChart.js
const ctxBubble = document.getElementById('bubbleChart').getContext('2d');

// Data for all teams (from your dataset)
let teamsData = [
    {
        team: "Bombers",
        disposals: 380.4, // X-axis (Disposals)
        tackles: 59.7,    // Y-axis (Tackles)
        goals: 12.0,      // Bubble size (Goals)
        color: 'rgba(255, 99, 132, 0.6)' // Color for Bombers
    },
    {
        team: "Giants",
        disposals: 372.5,
        tackles: 67.0,
        goals: 13.2,
        color: 'rgba(54, 162, 235, 0.6)' // Color for Giants
    },
    {
        team: "Bulldogs",
        disposals: 370.9,
        tackles: 59.4,
        goals: 13.4,
        color: 'rgba(75, 192, 192, 0.6)' // Color for Bulldogs
    },
    {
        team: "Dockers",
        disposals: 367.2,
        tackles: 58.1,
        goals: 12.4,
        color: 'rgba(153, 102, 255, 0.6)' // Color for Dockers
    },
    {
        team: "Saints",
        disposals: 364.4,
        tackles: 59.7,
        goals: 11.0,
        color: 'rgba(255, 159, 64, 0.6)' // Color for Saints
    },
    {
        team: "Lions",
        disposals: 361.4,
        tackles: 54.6,
        goals: 13.5,
        color: 'rgba(255, 206, 86, 0.6)' // Color for Lions
    },
    {
        team: "Crows",
        disposals: 360.9,
        tackles: 63.5,
        goals: 12.1,
        color: 'rgba(75, 192, 192, 0.6)' // Color for Crows
    },
    {
        team: "Hawks",
        disposals: 360.0,
        tackles: 60.4,
        goals: 13.2,
        color: 'rgba(54, 162, 235, 0.6)' // Color for Hawks
    },
    {
        team: "Blues",
        disposals: 359.2,
        tackles: 63.4,
        goals: 13.6,
        color: 'rgba(255, 99, 132, 0.6)' // Color for Blues
    },
    {
        team: "Swans",
        disposals: 356.0,
        tackles: 58.4,
        goals: 14.0,
        color: 'rgba(153, 102, 255, 0.6)' // Color for Swans
    },
    {
        team: "Kangaroos",
        disposals: 353.6,
        tackles: 58.8,
        goals: 10.6,
        color: 'rgba(255, 159, 64, 0.6)' // Color for Kangaroos
    },
    {
        team: "Cats",
        disposals: 350.4,
        tackles: 63.6,
        goals: 14.1,
        color: 'rgba(255, 206, 86, 0.6)' // Color for Cats
    },
    {
        team: "Suns",
        disposals: 347.3,
        tackles: 59.0,
        goals: 12.2,
        color: 'rgba(75, 192, 192, 0.6)' // Color for Suns
    },
    {
        team: "Demons",
        disposals: 345.7,
        tackles: 58.1,
        goals: 11.3,
        color: 'rgba(54, 162, 235, 0.6)' // Color for Demons
    },
    {
        team: "Power",
        disposals: 344.5,
        tackles: 64.7,
        goals: 11.9,
        color: 'rgba(255, 99, 132, 0.6)' // Color for Power
    },
    {
        team: "Magpies",
        disposals: 342.7,
        tackles: 64.0,
        goals: 12.5,
        color: 'rgba(255, 206, 86, 0.6)' // Color for Magpies
    },
    {
        team: "Tigers",
        disposals: 338.2,
        tackles: 50.5,
        goals: 9.2,
        color: 'rgba(255, 159, 64, 0.6)' // Color for Tigers
    },
    {
        team: "Eagles",
        disposals: 315.8,
        tackles: 55.9,
        goals: 10.0,
        color: 'rgba(153, 102, 255, 0.6)' // Color for Eagles
    }
];

// Map the data for Chart.js
let bubbleData = teamsData.map(team => ({
    label: team.team,
    backgroundColor: team.color,
    borderColor: team.color,
    data: [{
        x: team.disposals, // X-axis value (Disposals)
        y: team.tackles,   // Y-axis value (Tackles)
        r: team.goals * 3  // Radius of the bubble (scaled Goals)
    }]
}));

// Create the bubble chart using Chart.js
const bubbleChart = new Chart(ctxBubble, {
    type: 'bubble',
    data: {
        datasets: bubbleData
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Disposals'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tackles'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const x = context.raw.x;
                        const y = context.raw.y;
                        const r = context.raw.r / 3; // Unscale the radius for tooltip
                        return `${label}: Disposals: ${x}, Tackles: ${y}, Goals: ${r}`;
                    }
                }
            }
        }
    }
});
