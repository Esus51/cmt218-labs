# Week 4 - Data Extraction (R)

## Goal

Classify runs into **AM** (Morning) and **PM** (Afternoon/Evening) categories.

## Instructions

### 1. Setup

We use `lubridate` which makes working with dates and times in R very easy.

```r
library(tidyverse)
library(lubridate)
```

### 2. Loading and Processing

We load the data and create a new `Category` column.

```r
df <- read_csv("../../data/runs_only_redacted.csv")

processed <- df %>%
  # Parse DateTime using ymd_hms (Year-Month-Day Hour-Minute-Second)
  mutate(Datetime = ymd_hms(start_date)) %>%
  
  # Extract Hour (0-23)
  mutate(Hour = hour(Datetime)) %>%
  
  # Classify using case_when
  mutate(Category = case_when(
    Hour < 12 ~ "AM",
    TRUE      ~ "PM"   # 'TRUE' acts as the 'else' catch-all
  ))
```

### 3. Aggregating

For a Pie Chart, we don't plot individual runs. We plot the size of the groups. We use `count()` to summarize.

```r
counts <- processed %>%
  count(Category, name = "Count")
```

### 4. Saving

```r
write_csv(counts, "time_of_day_counts.csv")
```
