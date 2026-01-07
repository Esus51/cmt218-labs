# Week 3 - Data Extraction (Python)

## Introduction

In this week's exercise, we will calculate a rolling metric: the total distance run in the trailing 365 days for every day in our dataset. This is a classic "Rolling Window" problem.

## Goal

Create `trailing_365_distance.csv` with a row for every day.

## Instructions

### 1. Setup

*   Use your virtual environment with `pandas` installed.

### 2. Process

**Read and Parse**:

```python
import pandas as pd

df = pd.read_csv('../../data/runs_only_redacted.csv')
# Ensure column names are lowercase
df.columns = [c.lower() for c in df.columns]

# Parse dates (Crucial for time series)
df['Date'] = pd.to_datetime(df['start_date'])
df = df.sort_values('Date')
```

**Step 2: Handle Missing Dates**:
To calculate a valid 365-day sum, we must include days where we didn't run (distance = 0). If we skip them, our "window" of 365 *rows* might actually cover numbers from 4 or 5 years ago.

```python
# 1. Aggregate to Daily level (Handle multiple runs per day)
# dt.date makes sure we group by the calendar DAY, ignoring time
daily_runs = df.groupby(df['Date'].dt.date)['distance'].sum() / 1000 # Convert to km

# 2. Create a comprehensive Date Index
# From the very first run to the very last run
all_days = pd.date_range(start=daily_runs.index.min(), end=daily_runs.index.max(), freq='D')

# 3. Reindex
# This forces our Series to have a row for EVERY day in all_days.
# fill_value=0 puts a 0 where there was no run.
daily_complete = daily_runs.reindex(all_days.date, fill_value=0)

# Convert back to DataFrame for easier handling
df_daily = pd.DataFrame({'Date': daily_complete.index, 'DailyDistance': daily_complete.values})
df_daily['Date'] = pd.to_datetime(df_daily['Date']) # Ensure explicit datetime type for plotting
```

**Step 3: Rolling Window**:

```python
# rolling(365): Look at a window of size 365
# sum(): Add them up
# min_periods=1: Don't produce NaN for the first year; just sum what we have so far
df_daily['Trailing365'] = df_daily['DailyDistance'].rolling(window=365, min_periods=1).sum()
```

### 3. Output

```python
df_daily[['Date', 'Trailing365']].round(2).to_csv('trailing_365_distance.csv', index=False)
```

## Verification

The values in `Trailing365` should generally increase for the first year. A "dip" on the chart means you ran less today than you did exactly 366 days ago (since that big day just fell out of the window).
