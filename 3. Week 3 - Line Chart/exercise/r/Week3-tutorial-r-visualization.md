# Week 3 - Visualization (R)

## Goal

Create a Line Chart to visualize the trend of Trailing 365-Day Distance over time.

## Instructions

### 1. Setup

```r
library(ggplot2)
library(readr)
```

### 2. Loading Data

`readr` automatically parses `YYYY-MM-DD` strings into Date objects, which is helpful.

```r
df <- read_csv("../../data/trailing_365_distance.csv")
```

### 3. Basic Line Chart

For line charts, we use `geom_line()`.

```r
ggplot(df, aes(x = Date, y = TotalDistance)) +
  geom_line(color = "rebeccapurple", size = 1)
```

### 4. Date Axis Formatting

Use `scale_x_date` to control labels and breaks. R needs to know how often to place a tick (`date_breaks`) and how to print the date (`date_labels`).

```r
ggplot(df, aes(x = Date, y = TotalDistance)) +
  geom_line(color = "rebeccapurple", size = 1) +
  
  # Custom Axis
  scale_x_date(
    date_labels = "%Y",       # Just the Year
    date_breaks = "1 year",   # A tick every year
    minor_breaks = "1 month"  # Small ticks every month
  ) + 
  
  labs(
    title = "Annual Running Performance",
    subtitle = "Trailing 365-day cumulative distance",
    y = "Distance (km)"
  ) +
  
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))
```

### 5. Saving

```r
ggsave("trailing_distance_chart.png", width = 12, height = 6)
```
