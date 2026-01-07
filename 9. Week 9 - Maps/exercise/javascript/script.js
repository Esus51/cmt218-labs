const width = 800;
const height = 600;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Load GeoJSON
d3.json("../../data/runs.geojson").then(geojson => {

    // --- WRITE YOUR CODE BELOW ---

    // 1. Create Projection
    // Use d3.geoMercator() and .fitSize([width, height], geojson) to center the map
    // const projection = ...

    // 2. Create Path Generator
    // const pathGenerator = ...

    // 3. Render Features
    // svg.selectAll("path")...
    // .attr("d", pathGenerator)

}).catch(err => console.error("Error loading GeoJSON:", err));
