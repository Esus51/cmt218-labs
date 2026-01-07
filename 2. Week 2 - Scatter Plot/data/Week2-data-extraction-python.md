# Week 2 - Data Extraction (Python)

## Introduction

In this week's exercise, we will extract data suitable for a scatter plot to analyze the relationship between Distance and Pace.

## Goal

Create a `distance_vs_pace.csv` file containing two numerical columns for every run.

## Instructions

### 1. Setup

*   Use the virtual environment you set up in Week 1.
*   Make sure `pandas` is installed.

### 2. Create Script

*   Create `extract_data.py`.
*   Import pandas.

### 3. Process

**Read Data**:
```python
import pandas as pd
df = pd.read_csv('../../data/runs_only_redacted.csv')
```

**Calculate Metrics**:
We need to handle units carefully.
*   **Distance**: Convert from meters to km.
*   **Pace**: Run speed is usually stored as m/s (`average_speed`). Runners prefer min/km.
    *   Formula: `(1000 / Speed_in_m_s) / 60`.

```python
# Create explicit copies to avoid SettingWithCopy warnings if filtering later
df = df.copy()

# 1. Distance in km
df['Distance_km'] = df['distance'] / 1000

# 2. Pace in min/km
# We could use (Time / 60) / Distance_km, but using average_speed is often more robust against pauses.
# 16.667 is the conversion factor ( (1000 m/km) / (60 s/min) ) approx.
# We use apply/lambda to handle division by zero safely.
df['AveragePace'] = df['average_speed'].apply(lambda x: (1000 / x) / 60 if x > 0 else 0)
```

**Filter**:
Scatter plots show outliers clearly. We should remove invalid data (e.g., zero distance) but keep genuine outliers to visualize them.

```python
# Keep only valid runs
df_clean = df[(df['Distance_km'] > 0) & (df['AveragePace'] > 0) & (df['AveragePace'] < 20)] 
# < 20 filters out walking/errors (20 min/km is 3km/h walking speed)
```

### 4. Output

Save just the columns we need.

```python
df_clean[['Distance_km', 'AveragePace']].round(2).to_csv('distance_vs_pace.csv', index=False)
```

## Verification

Check your CSV. It should have two columns of numerical data (`Distance_km` and `AveragePace`).
