# Week 2 - Visualization (PowerBI)

## Introduction

Scatter plots are unique because they plot two numerical values against each other, requiring us to be careful about how Power BI aggregates data.

## Goal

Create a **Scatter Plot** showing Distance vs. Average Pace.

## Instructions

### 1. Get Data

1.  **Get Data** > **Text/CSV**.
2.  Select `Week 2/data/distance_vs_pace.csv`.
3.  Click **Load**.

### 2. Create Visual

1.  Select **Scatter Chart** from Visualizations.
2.  **Define Axes**:
    *   Drag `Distance` to the **X-axis**.
    *   Drag `AveragePace` to the **Y-axis**.
3.  **Critical Step: Don't Summarize**:
    *   Power BI usually sums up numerical fields by default (e.g., showing one dot representing the sum of all distances).
    *   Right-click the `Distance` field field in the visualization well (Where you dragged it).
    *   Select **Don't Summarize**.
    *   Repeat for `AveragePace` (Right-click > **Don't Summarize**).
    *   *Result*: You should see many dots, one for each row in your data.

### 3. Average Lines (Analytics)

To understand where the "center" of our data is, we add average lines.

1.  Go to the **Analytics** pane (Magnifying glass icon next to the Paintbrush).
2.  **Average Line**:
    *   Click **Add Line**.
    *   Measure: `Distance`.
    *   Color: Grey.
    *   Data label: **On**.
    *   *Result*: A vertical line showing the average distance run.
3.  Add another Average Line for `AveragePace`.
    *   *Result*: A horizontal line showing the average pace.

### 4. Format

1.  **Markers** (The dots):
    *   Shape: Circle.
    *   Size: Change to -10 (or smaller) to reduce overlap.
    *   Color: Select a theme color (Purple).
2.  **General > Title**:
    *   Text: "Distance vs Pace".
