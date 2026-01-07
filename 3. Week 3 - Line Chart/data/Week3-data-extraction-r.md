# Week 3 - Data Extraction (R)

## Goal

Calculate the **Trailing 365-Day Total Distance** for each day.

## Instructions

### 1. Setup

We use the `slider` package.
**Why slider?** Standard R functions often struggle with "Date-aware" windows. If data is missing for a day, a standard "rolling mean over 365 rows" will break. `slider` creates windows based on the *Index* (the Date column itself), making it incredibly robust for time series.

```r
install.packages("slider")
library(tidyverse)
library(slider)
```

### 2. Loading and Aggregating

We first aggregate runs to get a single total per day.

```r
df <- read_csv("../../data/runs_only_redacted.csv")

daily_df <- df %>%
  mutate(Date = as.Date(start_date)) %>% # Ensure Date format
  group_by(Date) %>%
  summarise(DailyDist = sum(distance, na.rm = TRUE) / 1000) %>% # m to km
  arrange(Date)
```

### 3. Rolling Window Calculation

We use `slide_index_sum`.
*   `.i`: The index column (Date). The window is calculated relative to *this*, not the row number.
*   `.before`: The size of the window looking back.

```r
result_df <- daily_df %>%
  mutate(
    # "sum DailyDist where Date is between (CurrentDate - 365) and CurrentDate"
    TotalDistance = slide_index_sum(
      x = DailyDist,
      i = Date,       
      before = 365    
    )
  ) %>%
  mutate(TotalDistance = round(TotalDistance, 2))
```

### 4. Saving

```r
write_csv(result_df %>% select(Date, TotalDistance), "trailing_365_distance.csv")
```
