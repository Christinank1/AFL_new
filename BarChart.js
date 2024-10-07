// BarChart.js
const ctxHBK = document.getElementById('handballKicksChart').getContext('2d');

// Team Data (from your dataset)
let teams = [
    "Bombers", "Giants", "Bulldogs", "Dockers", "Saints", "Lions", "Crows", 
    "Hawks", "Blues", "Swans", "Kangaroos", "Cats", "Suns", "Demons", 
    "Power", "Magpies", "Tigers", "Eagles"
];

// Data for handballs and kicks (from your dataset)
let handballs = [159.1, 163.6, 154.1, 160.8, 137.9, 128.7, 147.9, 149.6, 142.1, 136.0, 146.1, 134.5, 145.4, 132.9, 125.8, 139.1, 138.5, 124.9];
let kicks = [221.3, 208.9, 216.8, 206.4, 226.5, 232.6, 213.0, 210.3, 217.1, 220.0, 207.5, 215.9, 201.8, 212.8, 218.7, 203.7, 199.7, 190.9];

// Create the bar chart using Chart.js
const handballKicksChart = new Chart(ctxHBK, {
    type: 'bar',
    data: {
        labels: teams, // Team names as labels on the x-axis
        datasets: [
            {
                label: 'Handballs',
                data: handballs, // Data for Handballs
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background
                borderColor: 'rgba(255, 99, 132, 1)', // Red border
                borderWidth: 1
            },
            {
                label: 'Kicks',
                data: kicks, // Data for Kicks
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue background
                borderColor: 'rgba(54, 162, 235, 1)', // Blue border
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Y-axis starts from 0
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Comparison of Handballs and Kicks by AFL Teams'
            }
        }
    }
});
