# Week 1 - Visualization (R & ggplot2)

## Goal

Create a Bar Chart of monthly distances using R's `ggplot2` library.
**Why ggplot2?** It is the standard for data visualization in R, implementing the "Grammar of Graphics" which allows you to build complex plots layer by layer.

## Instructions

### 1. Setup

Ensure you have the `tidyverse` or `ggplot2` installed. `readr` is used to load data efficiently.

```r
# install.packages("ggplot2")
# install.packages("readr")
library(ggplot2)
library(readr)
```

### 2. Loading Data

```r
# Load the aggregated data
df <- read_csv("../../data/distance_per_month.csv")
```

### 3. Creating the Chart

We use `geom_col()` for bar charts where heights are pre-calculated values in the data.
*Note*: `geom_bar()` is used when you want R to count rows for you (histograms etc.). Since we already summed the distance, we use `col` (columns).

```r
# 1. Define Data and Aesthetics (what goes on axes)
# reorder(Month, ...) ensures months aren't just alphabetical
ggplot(df, aes(x = Month, y = TotalDistance)) +
  
  # 2. Geometry (Bar chart)
  # fill determines the bar color
  geom_col(fill = "rebeccapurple")
```

### 4. Refining

A good chart needs clear labels and a clean look.

```r
ggplot(df, aes(x = Month, y = TotalDistance)) +
  geom_col(fill = "rebeccapurple") +
  
  # Labels
  labs(
    title = "Total Distance per Month", 
    subtitle = "Running activities in 2020-2023",
    x = "Month", 
    y = "Distance (km)"
  ) +
  
  # Theme: Removes default gray background
  theme_minimal() +
  
  # Axis Text: Rotate x-axis labels 45 degrees so they don't overlap
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1)
  )
```

### 5. Saving

Save the plot to an image file.

```r
# ggsave saves the *last* plot created
ggsave("monthly_distance_chart.png", width = 10, height = 6)
```
