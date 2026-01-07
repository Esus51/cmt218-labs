# Week 4 - Visualization (Python & Matplotlib)

## Goal

Create a Pie Chart to show the distribution of runs by Time of Day.

## Instructions

### 1. Loading Data

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('../../data/time_of_day_counts.csv')
```

### 2. Creating the Pie Chart

We use `plt.pie()`.
*   **x**: The values (Counts).
*   **labels**: The categories (AM/PM).
*   **autopct**: String format to display percentages (e.g., `%1.1f%%` means 1 decimal place).

```python
plt.figure(figsize=(8, 8))

# Data preparation
counts = df['Count']
labels = df['Category']

# Define colors (Purple Theme)
# Lavender for AM, Rebeccapurple for PM
colors = ['#E6E6FA', 'rebeccapurple'] 

# Plot
plt.pie(
    counts, 
    labels=labels, 
    autopct='%1.1f%%', 
    startangle=90,      # Start vertical at top
    colors=colors,
    textprops={'fontsize': 14} # Make text readable
)

plt.title('Runs by Time of Day', fontsize=16)

plt.tight_layout()
plt.savefig('time_of_day_pie.png', dpi=300)
plt.show()
```
