// Tooltip reference
const tooltip = d3.select("#tooltip");

// Common Margins
const margin = { top: 20, right: 20, bottom: 40, left: 50 };

// Load All Data using Promise.all
Promise.all([
    d3.csv("../../data/distance_per_month.csv"),
    d3.csv("../../data/trailing_365_distance.csv"),
    d3.csv("../../data/time_of_day_counts.csv"),
    d3.csv("../../data/distance_vs_pace.csv"),
    d3.csv("../../data/weekly_distance_heatmap.csv")
]).then(([barData, lineData, pieData, scatterData, heatmapData]) => {

    // Call draw functions
    drawBarChart(barData, "#bar-chart");
    drawLineChart(lineData, "#line-chart");
    drawPieChart(pieData, "#pie-chart");
    drawScatterPlot(scatterData, "#scatter-chart");
    drawHeatmap(heatmapData, "#heatmap-chart");

}).catch(err => console.error("Error loading data", err));


// --- Chart Functions ---

function drawBarChart(data, selector) {
    // 1. Process Data (Convert types)
    data.forEach(d => {
        d.TotalDistance = +d.TotalDistance;
        d.RunCount = +d.RunCount;
    });

    // 2. Setup SVG
    // const container = d3.select(selector);
    // const width = 400 - margin.left - margin.right;
    // const height = 300 - margin.top - margin.bottom;
    // Append SVG...

    // 3. Create Scales (Bond, Linear)

    // 4. Draw Axes

    // 5. Draw Bars
}

function drawLineChart(data, selector) {
    // 1. Process Data

    // 2. Setup SVG

    // 3. Create Scales (Time, Linear)

    // 4. Draw Axes

    // 5. Draw Line
}

function drawPieChart(data, selector) {
    // 1. Process Data

    // 2. Setup SVG

    // 3. Create Scales (Color)

    // 4. Pie & Arc Generators

    // 5. Draw Slices
}

function drawScatterPlot(data, selector) {
    // 1. Process Data

    // 2. Setup SVG

    // 3. Create Scales (Linear, Linear)

    // 4. Draw Axes

    // 5. Draw Circles
}

function drawHeatmap(data, selector) {
    // 1. Process Data

    // 2. Setup SVG (Wider for heatmap)

    // 3. Create Scales (Band, Band, Sequential Color)

    // 4. Draw Axes

    // 5. Draw Cells
}

// Helpers
function showTooltip(event, html) {
    tooltip.style("opacity", 1)
        .html(html)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
}
function hideTooltip() {
    tooltip.style("opacity", 0);
}
