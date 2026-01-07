# Week 1 - Visualisation (JavaScript & D3)

## Introduction

This week we will create a simple bar chart using **D3.js** (Data-Driven Documents).
**Why D3?** Unlike high-level libraries (like Plotly or Chart.js) that give you a pre-baked chart, D3 gives you drawing primitives (rectangles, lines, circles) and tools to bind them to data. It is harder to learn but offers infinite flexibility.

## Goal

Create a bar chart showing the total distance run per month.

## Prerequisites

*   You should have completed the Data Extraction step and have `distance_per_month.csv`.
*   You need a local web server (Instructions at the end).

## Instructions

### 1. HTML Setup (`index.html`)

We start by defining the structure. We include the D3 library from a CDN (Content Delivery Network).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 1 - Bar Chart</title>
    <link rel="stylesheet" href="style.css">
    <!-- Load D3.js -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Monthly Distance Run</h1>
        <!-- This div is where D3 will inject the SVG -->
        <div id="chart"></div>
        <!-- This div will be our floating tooltip -->
        <div id="tooltip" class="tooltip" style="opacity:0;"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. CSS Styling (`style.css`)

We separate styles to keep our code clean.

```css
/* Basic bar styling */
.bar {
    fill: rebeccapurple;
    transition: fill 0.2s; /* Smooth color change on hover */
}

.bar:hover {
    fill: #663399; /* Darker purple on hover */
}

/* Tooltip styling - critical for UX */
.tooltip {
    position: absolute; /* Allows us to move it with JS */
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    pointer-events: none; /* Critical: lets mouse events pass through to the bar below */
}
```

### 3. JavaScript Implementation (`script.js`)

This is where the magic happens.

#### Step 3.1: Setup and Margins

**The Margin Convention**: In D3, it is standard practice to define an inner drawing area and margins for axes/labels. This avoids "magic numbers" later in the code.

```javascript
// 1. Dimensions
const margin = {top: 20, right: 30, bottom: 60, left: 60};
// Calculate inner width/height (the actual plotting area)
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// 2. Append SVG to the page
const svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g") // Group element to hold everything
        .attr("transform", `translate(${margin.left},${margin.top})`);
```

#### Step 3.2: Load Data

D3 loads data asynchronously (it doesn't happen instantly). We use `.then()` to run code *after* the file is loaded.

```javascript
d3.csv("../../data/distance_per_month.csv").then(data => {
    
    // Data Parsing: CSV values are always strings. We must convert them to numbers.
    data.forEach(d => {
        d.TotalDistance = +d.TotalDistance; // The '+' is a shortcut for parseFloat()
        d.RunCount = +d.RunCount;
    });

    // --- All chart logic happens INSIDE this block ---
    
    // Call our drawing function (organizing code helps readability)
    drawChart(data);
});
```

#### Step 3.3: Scales and Axes

**Scales** translate data values (e.g., 0 to 500km) to pixel values (e.g., height 500px to 0px).
*   **Domain**: Input (Data world)
*   **Range**: Output (Screen world)

```javascript
function drawChart(data) {
    
    // X Axis: Band Scale (for discrete categories like Months)
    const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(d => d.Month)) // Map creates an array of just the month names
        .padding(0.2); // Space between bars

    // Add X Axis to SVG
    svg.append("g")
        .attr("transform", `translate(0,${height})`) // Move to bottom
        .call(d3.axisBottom(x))
        .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)") // Rotate labels
            .style("text-anchor", "end");

    // Y Axis: Linear Scale (for continuous numbers)
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.TotalDistance)]) // 0 to Max Distance
        .range([height, 0]); // SVG Y=0 is the TOP, so we go Height -> 0

    // Add Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // --- Step 3.4: Bars ---
    
    // Select the Tooltip div
    const tooltip = d3.select("#tooltip");

    // The Data Join (Enter Selection)
    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
            .attr("class", "bar")
            // Calculation of position and size
            .attr("x", d => x(d.Month))
            .attr("y", d => y(d.TotalDistance))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.TotalDistance))
            
            // Interaction
            .on("mouseover", function(event, d) {
                 d3.select(this).style("opacity", 0.7);
                 
                 // Show tooltip
                 tooltip.transition().duration(200).style("opacity", .9);
                 tooltip.html(`
                     <strong>${d.Month}</strong><br>
                     Distance: ${d.TotalDistance} km
                 `)
                 .style("left", (event.pageX + 10) + "px")
                 .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                 d3.select(this).style("opacity", 1);
                 // Hide tooltip
                 tooltip.transition().duration(500).style("opacity", 0);
            });
            
    // Add Y-axis Label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 15)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Distance (km)");
}
```

## Running the Code

Browsers block local file access for security (CORS). You must use a local server.

1.  Open your terminal in this folder.
2.  Run:
    *   **Python**: `python3 -m http.server 8000`
    *   **Node**: `npx http-server`
3.  Go to `http://localhost:8000` in your browser.
