// BubbleChart.js
const ctxBubble = document.getElementById('bubbleChart').getContext('2d');

// Data for all teams (from dataset, data.csv))
let teamsData = [
    {
        team: "Bombers",
        disposals: 380.4, // X-axis (Disposals)
        tackles: 59.7,    // Y-axis (Tackles)
        goals: 12.0,      // Bubble size (Goals)
        color: 'rgba(139, 0, 0, 1)' // Color for Bombers
    },
    {
        team: "Giants",
        disposals: 372.5,
        tackles: 67.0,
        goals: 13.2,
        color: 'rgba(255, 102, 0, 1)' // Color for Giants
    },
    {
        team: "Bulldogs",
        disposals: 370.9,
        tackles: 59.4,
        goals: 13.4,
        color: 'rgba(0, 0, 255, 1)' // Color for Bulldogs
    },
    {
        team: "Dockers",
        disposals: 367.2,
        tackles: 58.1,
        goals: 12.4,
        color: 'rgba(102, 0, 153, 1)' // Color for Dockers
    },
    {
        team: "Saints",
        disposals: 364.4,
        tackles: 59.7,
        goals: 11.0,
        color: 'rgba(0, 0, 0, 1)' // Color for Saints
    },
    {
        team: "Lions",
        disposals: 361.4,
        tackles: 54.6,
        goals: 13.5,
        color: 'rgba(255, 204, 0, 1)' // Color for Lions
    },
    {
        team: "Crows",
        disposals: 360.9,
        tackles: 63.5,
        goals: 12.1,
        color: 'rgba(173, 216, 230, 1)' // Color for Crows
    },
    {
        team: "Hawks",
        disposals: 360.0,
        tackles: 60.4,
        goals: 13.2,
        color: 'rgba(128, 64, 0, 1)' // Color for Hawks
    },
    {
        team: "Blues",
        disposals: 359.2,
        tackles: 63.4,
        goals: 13.6,
        color: 'rgba(0, 128, 0, 1)' // Color for Blues
    },
    {
        team: "Swans",
        disposals: 356.0,
        tackles: 58.4,
        goals: 14.0,
        color: 'rgba(255, 0, 0, 1)' // Color for Swans
    },
    {
        team: "Kangaroos",
        disposals: 353.6,
        tackles: 58.8,
        goals: 10.6,
        color: 'rgba(0, 102, 204, 1)' // Color for Kangaroos
    },
    {
        team: "Cats",
        disposals: 350.4,
        tackles: 63.6,
        goals: 14.1,
        color: 'rgba(144, 238, 144, 1)' // Color for Cats
    },
    {
        team: "Suns",
        disposals: 347.3,
        tackles: 59.0,
        goals: 12.2,
        color: 'rgba(255, 192, 203, 1)' // Color for Suns
    },
    {
        team: "Demons",
        disposals: 345.7,
        tackles: 58.1,
        goals: 11.3,
        color: 'rgba(0, 0, 102, 1)' // Color for Demons
    },
    {
        team: "Power",
        disposals: 344.5,
        tackles: 64.7,
        goals: 11.9,
        color: 'rgba(0, 128, 128, 1)' // Color for Power
    },
    {
        team: "Magpies",
        disposals: 342.7,
        tackles: 64.0,
        goals: 12.5,
        color: 'rgba(128, 128, 128, 1)' // Color for Magpies
    },
    {
        team: "Tigers",
        disposals: 338.2,
        tackles: 50.5,
        goals: 9.2,
        color: 'rgba(230, 230, 250, 1)' // Color for Tigers
    },
    {
        team: "Eagles",
        disposals: 315.8,
        tackles: 55.9,
        goals: 10.0,
        color: 'rgba(121, 160, 221, 1)' // Color for Eagles
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
