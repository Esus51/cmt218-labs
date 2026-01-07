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

// Load data
d3.csv("../../data/distance_vs_pace.csv").then(data => {

    // Parse data
    data.forEach(d => {
        d.Distance = +d.Distance;
        d.AveragePace = +d.AveragePace;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create Scales (X: Distance, Y: Pace)
    // const x = ...
    // const y = ...

    // 2. Add Axes (X and Y)
    // svg.append("g")...

    // 3. Plot Dots (Scatterplot)
    // const dots = svg.append('g').selectAll("dot")...

    // 4. Add Groups for Guidelines & Avg Dot (Optional structure)
    // const guidelinesGroup = svg.append("g").attr("class", "guidelines");
    // const avgDotGroup = svg.append("g").attr("class", "avg-dots");

    // 5. Add Interactivity (Mouseover/Mouseout)
    // dots.on("mouseover", function (event, d) {
    // a. Determine which runs are "faster" and "longer" than current (d)
    // b. Highlight relevant dots
    // c. Add guidelines (vertical/horizontal lines) back to axis
    // d. Calculate and plot the "Average" dot of the highlighted runs
    // e. Show Tooltip
    // })
    // .on("mouseout", function () {
    // Reset everything
    // });

}).catch(error => {
    console.error("Error loading data:", error);
});
