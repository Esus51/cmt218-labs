# Week 2 - Visualization (R)

## Goal

Create a Scatter Plot to analyze the relationship between Distance and Pace.

## Instructions

### 1. Setup

```r
library(ggplot2)
library(readr)
```

### 2. Basic Scatter Plot

Mapping X and Y.
*   **Geom**: `geom_point()` is used for scatter plots.

```r
df <- read_csv("../../data/distance_vs_pace.csv")

# Basic plot
ggplot(df, aes(x = Distance_km, y = AveragePace_min_km)) +
  geom_point()
```

### 3. Handling Overplotting

When you have many points, they can overlap, making it hard to see where the data is dense.
**Solution**: Use `alpha` (transparency). A low alpha (e.g., 0.5) means points need to stack up to become fully opaque.

```r
ggplot(df, aes(x = Distance_km, y = AveragePace_min_km)) +
  geom_point(alpha = 0.5, color = "rebeccapurple") +
  theme_minimal()
```

### 4. Adding Dimensions (Color)

We can map the `color` aesthetic to a variable (like Pace itself) to create a gradient. This reinforces the Y-axis value visually.

```r
ggplot(df, aes(x = Distance_km, y = AveragePace_min_km, color = AveragePace_min_km)) +
  geom_point(alpha = 0.7) + 
  
  # Use a perceptually uniform color scale (Viridis or Magma are great)
  scale_color_viridis_c(option = "magma", direction = -1) + # Direction -1 reverses it so faster (lower pace) might be brighter
  
  labs(
    title = "Distance vs. Pace",
    subtitle = "Analysis of running performance",
    x = "Distance (km)",
    y = "Pace (min/km)",
    color = "Pace"
  ) +
  theme_light()
```

### 5. Saving

```r
ggsave("distance_vs_pace_chart.png", width = 10, height = 6)
```
