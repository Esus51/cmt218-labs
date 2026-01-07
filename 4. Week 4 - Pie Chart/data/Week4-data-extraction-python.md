# Week 4 - Data Extraction (Python)

## Introduction

In this week's exercise, we will classify runs into **Morning (AM)** and **Afternoon (PM)** to visualize the split in a Pie Chart.

## Goal

Create `time_of_day_counts.csv` with counts for each category.

## Instructions

### 1. Setup

*   Use your virtual environment with pandas.

### 2. Process

**Read Data**:

```python
import pandas as pd

df = pd.read_csv('../../data/runs_only_redacted.csv')
```

**Parse Time**:
We need to extract the hour from the start string.

```python
# Convert to datetime objects
df['Start'] = pd.to_datetime(df['start_date'])

# Extract the hour (0-23)
df['Hour'] = df['Start'].dt.hour
```

**Classify**:
We will derive a category based on the start hour.
*   **AM**: Start Hour < 12 (Midnight to 11:59 AM)
*   **PM**: Start Hour >= 12 (Noon to 11:59 PM)

```python
# Define a simple function or use numpy/apply
# Here we use a list comprehension for readability
df['Category'] = ['AM' if h < 12 else 'PM' for h in df['Hour']]

# Alternative using apply:
# df['Category'] = df['Hour'].apply(lambda x: 'AM' if x < 12 else 'PM')
```

### 3. Aggregate

For a Pie Chart, we need the total count of runs in each distinct category.

```python
# value_counts() calculates the frequency of each unique value
counts = df['Category'].value_counts().reset_index()

# Rename columns for clarity
counts.columns = ['Category', 'Count']
```

### 4. Output

```python
counts.to_csv('time_of_day_counts.csv', index=False)
```

## Verification

Your CSV file should look something like this:

```csv
Category,Count
AM,154
PM,89
```
