d3.csv("../../data/kpi_stats.csv").then(data => {
    // data is an array of objects. Since we have 1 row:
    const stats = data[0];

    // --- WRITE YOUR CODE BELOW ---
    // Update the DOM elements with IDs: total-runs, total-distance, longest-run, avg-distance

    // 1. Set Total Runs text
    // d3.select("#total-runs")...

    // 2. Set Total Distance text

    // 3. Set Longest Run text

    // 4. Set Avg Distance text

}).catch(error => {
    console.error("Error loading KPI data:", error);
});
