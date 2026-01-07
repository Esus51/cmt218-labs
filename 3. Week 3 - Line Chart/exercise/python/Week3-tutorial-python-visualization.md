# Week 3 - Visualization (Python & Matplotlib)

## Goal

Create a Line Chart to visualize the trend of Trailing 365-Day Distance over time.

## Instructions

### 1. Loading Data

```python
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates # Standard library for handling dates in matplotlib

df = pd.read_csv('../../data/trailing_365_distance.csv')
df['Date'] = pd.to_datetime(df['Date']) # Ensure Date is datetime object
```

### 2. Basic Line Chart

```python
plt.figure(figsize=(12, 6))

# Plot
# Color: 'tab:red' is a nice standard red (or use 'rebeccapurple' for consistency)
plt.plot(df['Date'], df['Trailing365'], color='rebeccapurple', linewidth=2)
```

### 3. Date Formatting

Handling dates on the x-axis often requires specific formatters to avoid clutter. Matplotlib's `mdates` module helps us control ticks and labels.

```python
# Get current axis (gca) to modify it
ax = plt.gca()

# Major Locator: Where do the big ticks go? (Every Year)
ax.xaxis.set_major_locator(mdates.YearLocator())

# Major Formatter: What text do we show? (YYYY)
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y'))

# Minor Locator: Smaller ticks for months (Optional, but adds detail)
ax.xaxis.set_minor_locator(mdates.MonthLocator())

# Rotate labels to prevent overlapping
plt.xticks(rotation=45)
```

### 4. Final Polish

```python
plt.title('Trailing 365-Day Total Distance', fontsize=16)
plt.xlabel('Date')
plt.ylabel('Distance (km)')

# Add a grid for readability
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('trailing_distance_chart.png', dpi=300)
plt.show()
```
