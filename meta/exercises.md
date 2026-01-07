# Week 1 - Bar Chart

A bar chart showing the total distance run per month, for every month in the dataset

## Data description

All months present in the dataset, with the total distance run in that month, the average pace for the month, and the total number of runs for the month. Duplicate runs have been removed, as well as those with outlier distances.

## Data visualisation

A bar chart showing the total distance run per month, for every month in the dataset. Axes are present and labelled.

### Interactivity

A hover that highlights the bar currently being hovered over and displays a tooltip providing the number of runs that month, the total distance (as represented by the bar itself) and the average pace for the month.

# Week 2 - Scatter Plot

A scatterplot showing the distance of each run plotted against the pace of the run

## Data description

Each run as a row, with the distance and average pace of the run as columns

## Data visualisation

A scatterplot showing the distance of each run plotted against the pace of the run. Axes are present and labelled.

### Interactivity

When each run is hovered over, runs that are both longer in distance and faster in pace are highlighted. Guidelines are displayed that link that particular run back to the axes. an extra dot is displayed showing the average pace and distance of all the runs that are currently highlighted.

# Week 3 - Line Chart

A line chart over time showing the total distance run in the trailing 365 days

## Data description

A row for each day from the first run to the last run in the dataset, each with the total distance run in the preceeding 365 days

## Data visualisation

A line chart over time showing the total distance run in the trailing 365 days

### Interactivity

Hovering over a particular day in the line chart displays a tooltip showing the total number of runs in the preceeding 365 days, the avg pace of those runs, and the total distance covered.

# Week 4 - Pie Chart

A pie chart showing the proportion of runs that are in the morning (AM) and the proportion in the afternoon and evening (PM). Runs that span over midday are counted in a 'both' category.

## Data description

A count of the number of runs in the morning (AM), the number of runs in the afternoon and evening (PM), and the number of runs that span over midday (both).

## Data visualisation

A pie chart showing the proportion of runs that are in the morning (AM) and the proportion in the afternoon and evening (PM), and the proportion that span over midday (both). Each segment is labelled with the count and the category name.

# Week 5 - Calendar Heatmap

A heatmap with weeks on the x-axis and years on the y-axis, showing the total distance run in each week of each year.

## Data description

A row for each week in the dataset, with the total distance run in that week, the average pace of the runs in that week, and the total number of runs in that week.

## Data visualisation

A heatmap with weeks on the x-axis and years on the y-axis, showing the total distance run in each week of each year. Colour intensity represents the total distance run in that week.

### Interactivity

Hovering over a particular week in the heatmap displays a tooltip showing the total distance run in that week, the average pace of the runs in that week, and the total number of runs in that week.

# Week 6 - Dashboard 1

This week we start to combine multiple visualisations into a dashboard.

## Data description

A combined subset of data extraction for each of the previous weeks. Where one dataset can be used for multiple visualisations, we only extract the data once.

## Data visualisation

A dashboard containing the visualisations from the previous weeks. Visualisations are presented together in a single display, but do not interact with each other.

# Week 7 - KPIs and Text

This week we will add KPIs and text to our visualisations.

## Data description

We extract some key statistics from the dataset, such as the total distance run, the average pace, and the total number of runs. We sum the total distance run overall time, and calculate which day of the week is the most popular for running and which is the least popular.

## Data visualisation

We present textual statistics in a dashboard, along with the visualisations from the previous weeks.

# Week 8 - Colouring

This week we will add colouring to our visualisations.

## Data description

No extra data is required for this week, we use the same data extracted in previous weeks

## Data visualisation

We colour the visualisations from previous weeks, walking students through the steps required to change colour for the visualisations.

# Week 9 - Maps

We create some maps to show the locations of the runs.

## Data description

The data includes runs encoded as polylines. We need to extract all the runs and convert the polylines into a format that can be used to create a map - latitude and longitude coordinates.

## Data visualisation

A simple map showing all the runs in the dataset with coordinates within the bounding box [[-3.32322, 51.38586], [-3.14065, 51.51634]].

# Week 10 - Interaction and Animation

This week we start making the visualisations work together

## Data description

None needed -  we use existing data from previous weeks.

## Data visualisation

We link the visualisations together on the dashboard so that interacting with a datapoint or a set of data in one visualisation highlights the same data in the other visualisations.