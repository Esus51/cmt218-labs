// Load Data
d3.csv("../../data/linked_data.csv").then(data => {

    // Parse
    data.forEach(d => {
        d.Distance_km = +d.Distance_km;
        d.Pace_min_km = +d.Pace_min_km;
    });

    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // --- 1. Scatter Plot (Source) ---
    const svgScatter = d3.select("#scatter-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales & Axes for Scatter
    const xScatter = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Distance_km)])
        .range([0, width]);

    const yScatter = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Pace_min_km)])
        .range([height, 0]);

    svgScatter.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScatter).ticks(5));
    svgScatter.append("g").call(d3.axisLeft(yScatter));

    // Scatter Labels
    svgScatter.append("text").attr("x", width / 2).attr("y", height + 30).text("Distance (km)").style("text-anchor", "middle");
    svgScatter.append("text").attr("transform", "rotate(-90)").attr("y", -30).attr("x", -height / 2).text("Pace (min/km)").style("text-anchor", "middle");

    // Scatter Dots
    const dots = svgScatter.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScatter(d.Distance_km))
        .attr("cy", d => yScatter(d.Pace_min_km))
        .attr("r", 3)
        .style("fill", "#2c3e50")
        .style("opacity", 0.5);


    // --- 2. Bar Chart (Target) ---
    const svgBar = d3.select("#bar-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Init Bar Scales (X is Month, fixed domain)
    const allMonths = [...new Set(data.map(d => d.Month))].sort();
    const xBar = d3.scaleBand().domain(allMonths).range([0, width]).padding(0.2);
    const yBar = d3.scaleLinear().range([height, 0]);

    // Draw X Axis (static)
    svgBar.append("g").attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xBar)).selectAll("text").attr("transform", "rotate(-45)").style("text-anchor", "end");

    const yAxisGroup = svgBar.append("g");

    // Function to update Bar Chart based on filtered data
    function updateBarChart(selectedData) {
        // --- WRITE YOUR CODE BELOW ---

        // a. Aggregate selectedData (Sum distance per Month)
        // const rollup = ...

        // b. Map back to ensuring all months exist (fill 0 if empty)

        // c. Update Y Domain based on max distance

        // d. Join Data to Rects and Animate (Enter/Update/Exit)
    }

    // Initial Render with all data
    updateBarChart(data);


    // --- 3. Brushing ---

    // --- WRITE YOUR CODE BELOW ---

    // a. Define Brush (extent, on "brush end" event)
    // const brush = ...

    // b. Call Brush on Scatter SVG
    // svgScatter.append("g")...

    // c. Define brushed function
    // function brushed({ selection }) {
    //     if selection:
    //        filter data
    //        highlight dots
    //        updateBarChart(filtered)
    //     else:
    //        reset
    // }

}).catch(err => console.error(err));
