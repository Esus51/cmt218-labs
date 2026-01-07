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

d3.csv("../../data/weekly_distance_heatmap.csv").then(data => {

    data.forEach(d => {
        d.Year = +d.Year;
        d.Week = +d.Week;
        d.TotalDistance = +d.TotalDistance;
        d.RunCount = +d.RunCount;
        d.AveragePace = +d.AveragePace;
    });

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create X Axis Scale (Weeks 1-53) - Band Scale
    // const x = ...

    // 2. Add X Axis
    // svg.append("g")...

    // 3. Create Y Axis Scale (Years) - Band Scale
    // const y = ...

    // 4. Add Y Axis
    // svg.append("g")...

    // 5. Create Color Scale (Sequential)
    // const myColor = ...

    // 6. Draw Cells (Rectangles)
    // svg.selectAll().data(...).enter().append("rect")...

    // 7. Add Interactivity (Tooltip)
    // .on("mouseover", ...).on("mouseleave", ...)

}).catch(error => console.error(error));
