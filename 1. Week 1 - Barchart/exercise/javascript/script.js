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
d3.csv("../../data/distance_per_month.csv").then(data => {

    // Parse data if needed (csv returns strings)
    data.forEach(d => {
        d.TotalDistance = +d.TotalDistance;
        d.AveragePace = +d.AveragePace;
        d.RunCount = +d.RunCount;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create X axis scale (Band Scale)
    // const x = ...

    // 2. Add X axis to SVG
    // svg.append("g")...

    // 3. Create Y axis scale (Linear Scale)
    // const y = ...

    // 4. Add Y axis to SVG
    // svg.append("g")...

    // 5. Create Bars
    // svg.selectAll("mybar")...

    // 6. Add Interactivity (Mouseover/Mouseout) (Optional)

}).catch(error => {
    console.error("Error loading data:", error);
});
