# Week 2 - Visualization (Tableau)

## Introduction

Creating a scatter plot in Tableau requires understanding how Tableau aggregates data. By default, Tableau sums everything up.

## Goal

Create a **Scatter Plot** of Distance vs. Pace.

## Instructions

### 1. Connect to Data

1.  Connect to `Week 2/data/distance_vs_pace.csv`.
2.  Go to **Sheet 1**.

### 2. Build the View

1.  **Columns (X-Axis)**: Drag `Distance` to Columns.
2.  **Rows (Y-Axis)**: Drag `AveragePace` to Rows.
3.  **The Aggregation Problem**:
    *   You will initially see just one circle. This is because Tableau has summed all distances and all paces into `SUM(Distance)` and `SUM(Pace)`.
4.  **Disaggregate Measures**:
    *   Go to the **Analysis** menu (Top bar).
    *   Uncheck **Aggregate Measures**.
    *   *Result*: Tableau now plots every individual row of data as its own mark. You should see a cloud of points.

### 3. Analytics (Average Lines)

1.  Switch to the **Analytics** tab (left pane, next to Data).
2.  Drag **Average Line** into the view.
3.  Drop it on the **Table** option in the pop-up that appears.
    *   *Result*: This creates a crosshair showing the average distance and average pace for the entire dataset.

### 4. Format

1.  **Shape**: On the Marks card, change the dropdown from Automatic to **Circle**.
2.  **Color**: Set to Purple.
3.  **Opacity**: Click Color again > reduce Opacity to 60%.
    *   **Why?** In a scatter plot, points often overlap. Transparency helps reveal density (darker areas = more runs).
