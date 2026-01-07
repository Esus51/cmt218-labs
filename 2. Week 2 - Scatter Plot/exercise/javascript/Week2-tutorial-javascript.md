# Week 2 - Visualisation (JavaScript & D3)

## Goal

Create a scatter plot of Distance (x-axis) vs. Average Pace (y-axis). Implement interactivity to highlight potential "better" runs (longer and faster).

## Prerequisites

*   `distance_vs_pace.csv` in `../../data/`.
*   Standard D3 HTML/CSS setup (Week 1).

## Instructions

### 1. Setup (`index.html` structure)

Use the same structure as Week 1. Update the title.

### 2. D3 Scatter Plot (`script.js`)

#### Step 2.1: Setup and Scales

In a scatter plot, both X and Y axes use **Linear Scales** (continuous numbers), unlike the Bar Chart which used a Band Scale for X.

```javascript
// ... standard boilerplate setup for margins and svg ...

// X Axis: Linear Scale for Distance
// We multiply max by 1.1 to add some breathing room (padding) at the end
const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Distance) * 1.1]) 
    .range([0, width]);

svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

// Y Axis: Linear Scale for Pace
// Note: SVG y=0 is at the top. 
const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.AveragePace) * 1.1])
    .range([height, 0]);

svg.append("g")
    .call(d3.axisLeft(y));
```

#### Step 2.2: Circles

Instead of `<rect>`, we draw `<circle>` elements.
*   `cx`: Center X position.
*   `cy`: Center Y position.
*   `r`: Radius.

```javascript
const dots = svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", d => x(d.Distance))
        .attr("cy", d => y(d.AveragePace))
        .attr("r", 4)
        .attr("class", "dot")
        .style("fill", "rebeccapurple")
        .style("opacity", 0.6); // Semi-transparent to handle overlaps
```

#### Step 2.3: Interactivity (Logic)

We want to answer: *"If I select this run, which other runs were both longer AND faster (better pace)?"*
This is a quadrant query relative to the selected point.

*   **Longer**: `run.Distance > selected.Distance`
*   **Faster**: `run.AveragePace < selected.AveragePace` (Remember: Lower pace is faster)

```javascript
dots.on("mouseover", function(event, d) {
    const currentDistance = d.Distance;
    const currentPace = d.AveragePace;

    // Filter/Highlight Logic
    dots.classed("highlighted", run => {
         // Highlight self
         if (run === d) return true; 
         
         // Highlight better runs
         // Logic: Is this 'run' longer than 'd'? AND Is this 'run' faster (lower pace) than 'd'?
         const isLonger = run.Distance > currentDistance;
         const isFaster = run.AveragePace < currentPace;
         
         return isLonger && isFaster;
    });

    // Optional: Add visual guidelines (lines to axes) to help read values
    // ...
})
.on("mouseout", function() {
    // defined in CSS: .highlighted { fill: orange; opacity: 1; }
    dots.classed("highlighted", false);
});
```

### 3. CSS for Interaction

Add this to `style.css`:

```css
.dot {
    transition: all 0.2s;
}

/* When a dot is part of the 'better' set, change its look */
.highlighted {
    fill: orange !important;
    opacity: 1 !important;
    r: 6; /* Make it slightly bigger */
}
```
