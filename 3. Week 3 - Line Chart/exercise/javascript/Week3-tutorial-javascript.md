# Week 3 - Visualisation (JavaScript & D3)

## Goal

Create a line chart showing the total distance run in the trailing 365 days.

## Prerequisites

*   `trailing_365_distance.csv` in `../../data/`.
*   Standard D3 setup.

## Instructions

### 1. Structure

Standard `index.html` and `style.css`.
*   **CSS**: Style the line with `fill: none` and a `stroke` color.
    ```css
    .line {
        fill: none;
        stroke: rebeccapurple;
        stroke-width: 2px;
    }
    .overlay {
        fill: none;
        pointer-events: all; /* Capture mouse events even if invisible */
    }
    ```

### 2. D3 Line Chart (`script.js`)

#### Step 2.1: Time Scale

*   Use `d3.scaleTime()` for the X axis. This scale understands dates and can position them proportionally.
*   You must parse the Date string (e.g., "2023-01-01") into a real JavaScript Date object first.

```javascript
// D3 v7 helper for parsing dates
const parseDate = d3.timeParse("%Y-%m-%d");

d3.csv("../../data/trailing_365_distance.csv").then(data => {
    data.forEach(d => {
        d.Date = parseDate(d.Date);
        d.TotalDistance = +d.Trailing365; // Ensure header matches CSV
    });

    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.Date)) # extent returns [min, max]
        .range([0, width]);
    
    // ... Y scale (Linear) ...
});
```

#### Step 2.2: Line Generator

A "Line Generator" is a function that takes data and returns distinct SVG path commands (`M 0 0 L 10 10...`).

```javascript
const line = d3.line()
    .x(d => x(d.Date))
    .y(d => y(d.TotalDistance));

// Append the path to the SVG
svg.append("path")
    .datum(data) // Bind array of data to a SINGLE element
    .attr("class", "line")
    .attr("d", line); // Use the generator
```

#### Step 2.3: Interactivity (Bisector)

Line charts are hard to hover over because the line is thin.
**Solution**: Place an invisible rectangle over the chart. When the mouse moves over it, calculate which data point is closest to the mouse's X position.

We use `d3.bisector`. This is a binary search algorithm. It finds *where* a date would fit in our sorted array.

```javascript
// Define the bisector
const bisectDate = d3.bisector(d => d.Date).left;

// Interaction Overlay
svg.append("rect") 
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .style("opacity", 0) // Invisible
    .on("mousemove", function(event) {
        // 1. Get Mouse X coordinates relative to the chart
        const mouseX = d3.pointer(event)[0];
        
        // 2. Invert scale: Convert Pixels -> Date
        const x0 = x.invert(mouseX);
        
        // 3. Find the index of this date in our data
        const i = bisectDate(data, x0, 1);
        
        // 4. Get the actual data points before/after this date to see which is closer
        const d0 = data[i - 1];
        const d1 = data[i];
        
        // Logic to pick closest...
        const d = (x0 - d0.Date > d1.Date - x0) ? d1 : d0;
        
        // Update tooltip with 'd'
    });
```
