# Week 2 - Data Extraction (R)

## Goal

Calculate **Average Pace** (min/km) from raw Time and Distance data.

## Instructions

### 1. Setup

```r
library(tidyverse)
```

### 2. Loading Data

```r
df <- read_csv("../../data/runs_only_redacted.csv")
```

### 3. Calculating Columns

We use `mutate` to create new columns.

*   `Distance`: Convert meters to km.
*   `Pace`: Time (min) / Distance (km).

```r
df_processed <- df %>%
  mutate(
    # Create clear column names
    Distance_km = Distance / 1000,
    
    # Calculate Pace
    # Time is usually in seconds (e.g., 'moving_time' or 'elapsed_time')
    # If the column is named 'Time', assume seconds.
    time_min = `Moving Time` / 60, # Use backticks for columns with spaces
    AveragePace_min_km = time_min / Distance_km
  ) %>%
  
  # Keep only relevant columns
  select(Distance_km, AveragePace_min_km)
```

### 4. Cleaning

Scatter plots are sensitive to bad data. We remove rows where values are infinite (division by zero) or unrealistic.

```r
df_clean <- df_processed %>%
  filter(is.finite(AveragePace_min_km)) %>% 
  filter(AveragePace_min_km > 0 & AveragePace_min_km < 30) %>% # Reasonable running pace
  mutate(across(where(is.numeric), \(x) round(x, 2))) # Round to 2 decimals for clean CSV
```

### 5. Saving

```r
write_csv(df_clean, "distance_vs_pace.csv")
```
