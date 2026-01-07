# Week 2 - Visualization (Python & Matplotlib)

## Goal

Create a Scatter Plot to analyze the relationship between Distance and Pace.

## Instructions

### 1. Loading Data

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('../../data/distance_vs_pace.csv')
```

### 2. Creating the Scatter Plot

We use `plt.scatter()`. Unlike `plt.plot()`, this function is designed specifically for un-connected points and allows mapping sizes and colors to data.

```python
plt.figure(figsize=(10, 6))

# Basic Scatter
# x = Distance, y = Pace
# alpha=0.5 makes points semi-transparent so we can see density
plt.scatter(df['Distance_km'], df['AveragePace_min_km'], alpha=0.5, color='rebeccapurple')

plt.title('Distance vs Pace')
plt.xlabel('Distance (km)')
plt.ylabel('Pace (min/km)')
plt.show()
```

### 3. Adding Dimensions

We can use color (`c`) to add another dimension or emphasize a variable (e.g., Pace).

```python
plt.figure(figsize=(10, 6))

# Scatter with Colormap
sc = plt.scatter(
    df['Distance_km'], 
    df['AveragePace_min_km'], 
    c=df['AveragePace_min_km'], # Map color to Pace value
    cmap='Purples_r',           # Color scheme (_r reverses it so darker = higher value)
    alpha=0.7                   # Transparency
)

# Add Legend (Colorbar)
# This is crucial so the viewer knows what the colors mean
plt.colorbar(sc, label='Pace (min/km)')

# Labels and Grid
plt.title('Distance vs. Pace')
plt.xlabel('Distance (km)')
plt.ylabel('Pace (min/km)')
plt.grid(True, linestyle='--', alpha=0.5) # Add grid lines helps read values

plt.tight_layout()
plt.savefig('distance_vs_pace_chart.png', dpi=300)
plt.show()
```
