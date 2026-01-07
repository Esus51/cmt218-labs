// Set dimensions and margins
const margin = { top: 20, right: 30, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Append SVG object
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Tooltip reference
const tooltip = d3.select("#tooltip");

// Parse Date generators
const parseDate = d3.timeParse("%Y-%m-%d");
const formatDate = d3.timeFormat("%b %d, %Y");

// Load data
d3.csv("../../data/trailing_365_distance.csv").then(data => {

    // Parse data
    data.forEach(d => {
        d.Date = parseDate(d.Date);
        d.TotalDistance = +d.TotalDistance;
        d.RunCount = +d.RunCount;
        d.AveragePace = +d.AveragePace;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create Scales (X: Time, Y: Linear)
    // const x = ...
    // const y = ...

    // 2. Add Axes (X and Y)
    // svg.append("g")...

    // 3. Define Line Generator
    // const line = d3.line()...

    // 4. Append Line Path
    // svg.append("path")...

    // 5. Add Interactivity (Hover Line & Tooltip)
    // a. Create bisector
    // const bisectDate = d3.bisector(d => d.Date).left;

    // b. Create Focus Group (Circle + Line)

    // c. Create Overlay Rect for mouse events
    // svg.append("rect")...on("mousemove", mousemove);

    // function mousemove(event) {
    // Recover coordinate we need
    // Find closest data point using bisector
    // Update focus position and tooltip content
    // }

}).catch(error => {
    console.error("Error loading data:", error);
});
