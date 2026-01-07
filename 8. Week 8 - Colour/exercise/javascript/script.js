// Set dimensions
const margin = { top: 20, right: 30, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const tooltip = d3.select("#tooltip");

d3.csv("../../data/distance_per_month.csv").then(data => {

    data.forEach(d => {
        d.TotalDistance = +d.TotalDistance;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create X and Y Scales
    // const x = ...
    // const y = ...

    // 2. Draw Axes
    // svg.append("g")...

    // 3. Create Color Scale
    // Use d3.scaleSequential with an interpolator (e.g., d3.interpolateBlues)
    // Domain should be from 0 to max TotalDistance
    // const color = ...

    // 4. Draw Bars with Color
    // svg.selectAll("mybar")...
    // .attr("fill", d => color(d.TotalDistance))

}).catch(error => console.error(error));
