# Week 4 - Visualisation (JavaScript & D3)

## Goal

Create a Pie Chart showing the proportion of runs in AM vs PM.

## Instructions

### 1. D3 Pie Chart (`script.js`)

#### Step 1.1: Setup and Scales
Unlike bar/line charts, we need a **Radius**.
We check width/height and take the smaller one so the circle fits.

```javascript
const radius = Math.min(width, height) / 2;

// Append 'g' centered in the svg
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width/2},${height/2})`); 
    // ^ Move origin to center of container

// Color Scale
const color = d3.scaleOrdinal()
    .domain(["AM", "PM"])
    .range(["#E6E6FA", "rebeccapurple"]);
```

#### Step 1.2: Generators

D3 doesn't draw "pie slices". It calculates **Paths**.
1.  `d3.pie()`: Takes data (e.g., `[10, 20]`) and calculates start/end angles.
    *   *Input*: Data Array. *Output*: Array of objects with `{startAngle, endAngle}`.
2.  `d3.arc()`: Takes angles and calculates the SVG path string (`M...`).

```javascript
const pie = d3.pie()
    .value(d => d.Count);

const arc = d3.arc()
    .innerRadius(0)       // 0 = Full Pie. >0 = Donut Chart.
    .outerRadius(radius);
```

#### Step 1.3: Draw Slices

```javascript
svg.selectAll('slices')
    .data(pie(data)) // Ensure you pass data through the pie generator!
    .enter()
    .append('path')
    .attr('d', arc) // Pass the arc generator here
    .attr('fill', d => color(d.data.Category))
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);
```

#### Step 1.4: Labels

We use another arc generator (`labelArc`) to calculate the center of each slice (`centroid`) for placing text.

```javascript
const labelArc = d3.arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.5);

svg.selectAll('text')
    .data(pie(data))
    .enter()
    .append('text')
    // Move text to the centroid of the slice
    .attr("transform", d => `translate(${labelArc.centroid(d)})`)
    .text(d => d.data.Category)
    .style("text-anchor", "middle")
    .style("font-size", 14)
    .style("fill", "white");
```
