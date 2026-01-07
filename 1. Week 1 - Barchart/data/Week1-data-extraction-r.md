# Week 1 - Data Extraction (R)

## Introduction

In R, data manipulation is most commonly done using the **Tidyverse**—a collection of packages that share a common design philosophy.

## Goal

Process raw running data to calculate the **Total Distance per Month**.

## Instructions

### 1. Prerequisites

We will use the `tidyverse` package which acts as an "umbrella" package, loading:
- `readr`: For reading CSVs faster than base R.
- `dplyr`: For manipulating data (filter, group, summarise).
- `lubridate`: For easy date handling.

```r
install.packages("tidyverse")
library(tidyverse)
```

### 2. Loading Data

```r
# read_csv (from readr) reads the file into a "tibble" (modern data frame)
df <- read_csv("../../data/runs_only_redacted.csv")
```

### 3. Date Parsing & Grouping

We use the **Pipe Operator (`%>%`)** to chain our commands.
**How to read it**: "Take `df`, THEN mutate it, THEN group it..."

We need to:
1.  Ensure `Date` is a Date object.
2.  Extract the Month (Format YYYY-MM).
3.  Group the rows by this Month.
4.  Sum the `Distance` for each group.

```r
monthly_stats <- df %>%
  # 1. Convert string to Date
  mutate(Date = as.Date(Date)) %>%
  
  # 2. Create 'Month' column (YYYY-MM)
  mutate(Month = format(Date, "%Y-%m")) %>%
  
  # 3. Group by Month
  # This doesn't change the appearance, but changes how subsequent functions act
  group_by(Month) %>%
  
  # 4. Sum Distance
  # na.rm = TRUE ensures that if there's a missing value, it doesn't break the sum
  summarise(TotalDistance = sum(Distance, na.rm = TRUE))
```

### 4. Saving the Result

We save the resulting table to a CSV for our visualization step.

```r
# write_csv is the counterpart to read_csv
write_csv(monthly_stats, "distance_per_month.csv")
```

### Verification

Check the first few rows to ensure the aggregation worked:

```r
head(monthly_stats)
```
You should see one row per month, with columns `Month` and `TotalDistance`.
