// Set dimensions
const width = 500;
const height = 500;
const margin = 40;
const radius = Math.min(width, height) / 2 - margin;

// Append SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

const tooltip = d3.select("#tooltip");

// Load Data
d3.csv("../../data/time_of_day_counts.csv").then(data => {

    data.forEach(d => {
        d.Count = +d.Count;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create Color Scale (Ordinal)
    // const color = ...

    // 2. Define Pie Generator (Compute positions)
    // const pie = d3.pie()...

    // 3. Define Arc Generator (Shape)
    // const arc = d3.arc()...

    // 4. Build the Pie Chart (Draw Slices)
    // svg.selectAll('slices')...

    // 5. Add Interactivity (Tooltip)
    // .on("mousemove", ...)

    // 6. Add Labels (Optional)
    // svg.selectAll('allLabels')...

}).catch(error => {
    console.error(error);
});
