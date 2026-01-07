# Week 4 - Visualization (R)

## Goal

Create a Pie Chart to show the distribution of runs by Time of Day.

## Instructions

### 1. Setup

```r
library(ggplot2)
library(readr)
```

### 2. Loading Data

```r
df <- read_csv("../../data/time_of_day_counts.csv")
```

### 3. Creating the Pie Chart

**"Where is `geom_pie`?"**
It doesn't exist! In the Grammar of Graphics (ggplot2), a pie chart is simply a **Stacked Bar Chart** plotted in **Polar Coordinates**.

**Step 3.1: Create a Stacked Bar**
*   **x**: Empty string `""` (Stacks everything on one bar).
*   **y**: Count.
*   **fill**: Category.

```r
# Calculate percentages for labels
df <- df %>%
  mutate(
    perc = Count / sum(Count),
    label = paste0(Category, "\n", scales::percent(perc))
  )

ggplot(df, aes(x = "", y = Count, fill = Category)) +
  geom_col(width = 1) +
  
  # Coordinate Transformation: Cartesian -> Polar
  # "y" means map the Y-axis (Counts) to the angle
  coord_polar("y", start = 0) +
  
  # Custom Colors
  scale_fill_manual(values = c("AM" = "#E6E6FA", "PM" = "rebeccapurple")) +
  
  # Add Labels
  # position_stack(vjust = 0.5) centers text in the slice
  geom_text(aes(label = label), position = position_stack(vjust = 0.5)) +
  
  # Remove background, axes, and gridlines (Theme Void)
  theme_void() +
  labs(title = "Runs by Time of Day")
```

### 4. Saving

```r
ggsave("time_of_day_pie.png", width = 8, height = 8)
```
