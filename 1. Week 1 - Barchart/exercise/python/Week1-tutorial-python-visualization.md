# Week 1 - Visualization (Python & Matplotlib)

## Goal

Create a Bar Chart of monthly distances using Python's `matplotlib` library.
**Why Matplotlib?** It is the grandmother of Python visualization libraries. While verbose, it gives you granular control over every element of the chart.

## Instructions

### 1. Setup

Ensure you have `pandas` (for data loading) and `matplotlib` (for plotting) installed.

```bash
pip install pandas matplotlib
```

### 2. Loading Data

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load the data we extracted earlier
df = pd.read_csv('../../data/distance_per_month.csv')
```

### 3. Creating the Chart

We use `plt.bar()` for bar charts.

```python
# 1. Create figure size (Width, Height in inches)
# This ensures our plot is large enough to be readable
plt.figure(figsize=(10, 6))

# 2. Plot bar chart
# x = Month, y = TotalDistance
plt.bar(df['Month'], df['TotalDistance'], color='rebeccapurple')

# 3. Add labels
# Always label your axes so the viewer knows what units you are using
plt.title('Total Distance per Month', fontsize=16)
plt.xlabel('Month', fontsize=12)
plt.ylabel('Distance (km)', fontsize=12)

# 4. Rotate x-axis labels
# If we have many months, horizontal text will overlap. Rotation fixes this.
plt.xticks(rotation=45)

# 5. Adjust layout
# "Tight Layout" automatically adjusts subplot params so that the subplot(s) fits in to the figure area.
# In simple terms: it stops your labels from being cut off.
plt.tight_layout()

# 6. Display
plt.show()
```

### 4. Saving

You can save the plot programmatically.

```python
# Save to the current directory
# dpi=300 ensures high resolution (standard for print/publications)
plt.savefig('monthly_distance_chart.png', dpi=300)
```
