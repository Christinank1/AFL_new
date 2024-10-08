// Import Vega Embed if necessary (via script tag or npm package)
// <script src="https://cdn.jsdelivr.net/npm/vega@5.20.2"></script>
// <script src="https://cdn.jsdelivr.net/npm/vega-lite@5.0.0"></script>
// <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.18.2"></script>

// Create the Vega-Lite specification
const chartSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "description": "A horizontal bar chart showing the average number of goals per game for each AFL team.",
  "data": {
    "values": [
      {"Team": "Swans", "Goals": 14.2},
      {"Team": "Cats", "Goals": 14.2},
      {"Team": "Bulldogs", "Goals": 13.4},
      {"Team": "Lions", "Goals": 13.2},
      {"Team": "Blues", "Goals": 13.6},
      {"Team": "Hawks", "Goals": 13.3},
      {"Team": "Giants", "Goals": 13.1},
      {"Team": "Magpies", "Goals": 12.5},
      {"Team": "Power", "Goals": 12.1},
      {"Team": "Dockers", "Goals": 12.4},
      {"Team": "Suns", "Goals": 12.2},
      {"Team": "Crows", "Goals": 12.1},
      {"Team": "Bombers", "Goals": 12.0},
      {"Team": "Demons", "Goals": 11.3},
      {"Team": "Saints", "Goals": 11.0},
      {"Team": "Kangaroos", "Goals": 10.6},
      {"Team": "Eagles", "Goals": 10.0},
      {"Team": "Tigers", "Goals": 9.2}
    ]
  },
  "params": [
    {
      "name": "Goals_selection",
      "value": 15,
      "bind": {
        "input": "range",
        "min": 9,
        "max": 15,
        "step": 0.5,
        "name": "Max Number of Goals: "
      }
    }
  ],
  "transform": [
    { "filter": "datum.Goals < Goals_selection" }
  ],
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "Team",
      "type": "nominal",
      "axis": { "labelAngle": 0 },
      "title": "AFL Team"
    },
    "x": {
      "field": "Goals",
      "type": "quantitative",
      "title": "Average Goals per Game",
      "axis": { "tickCount": 5 }
    },
    "color": {
      "field": "Team",
      "type": "nominal",
      "legend": null,
      "scale": {
        "domain": [
          "Swans", "Cats", "Bulldogs", "Lions", "Blues", "Hawks", "Giants", 
          "Magpies", "Power", "Dockers", "Suns", "Crows", "Bombers", 
          "Demons", "Saints", "Kangaroos", "Eagles", "Tigers"
        ],
        "range": [
          "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", 
          "#FFA500", "#800080", "#008000", "#FFC0CB", "#A52A2A", "#FFD700", 
          "#4B0082", "#008080", "#000000", "#C0C0C0", "#B22222", "#1E90FF"
        ]
      }
    },
    "tooltip": [
      { "field": "Goals", "type": "quantitative", "title": "Goals per Game" },
      { "field": "Team", "type": "nominal", "title": "Team" }
    ]
  }
};

// Embed the chart into the specified container in the HTML
vegaEmbed('#barchart', chartSpec);
