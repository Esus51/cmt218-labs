# Week 3 - Visualization (PowerBI)

## Introduction

Line charts are the standard for visualizing change over time.
However, PowerBI loves to group dates into "Hierarchies" (Year > Quarter > Month > Day). For a continuous running history, we need to disable this hierarchy.

## Goal

Create a **Line Chart** showing Trailing 365-Day Distance.

## Instructions

### 1. Get Data

1.  **Get Data** > **Text/CSV**.
2.  Load `Week 3/data/trailing_365_distance.csv`.
3.  Ensure `Date` is detected as a Date column (Check the icon next to the field in the Data pane).

### 2. Create Visual

1.  Select **Line Chart** from Visualizations.
2.  **X-Axis (Date)**:
    *   Drag `Date` to the **X-axis**.
    *   *The Problem*: Power BI normally defaults to a "Date Hierarchy". You might see just "Year" or points aggregated by year.
    *   *The Fix*: Right-click the `Date` field in the X-axis well. Select **Date** (the option usually below "Date Hierarchy"). This switches it to treat every day as a unique point on a continuous timeline.
3.  **Y-Axis (Values)**:
    *   Drag `Trailing365` to the **Y-axis**.

### 3. Format

1.  **Lines**:
    *   Go to **Format visual** > **Lines**.
    *   **Stroke Width**: Increase to 3px for better visibility.
    *   **Color**: Purple.
2.  **Y-Axis**:
    *   **Title**: Change to "Distance (km)".
    *   **Range**: Notice how it likely starts at 0. If appropriate, you can adjust the "Start" to "Auto" or a specific number to zoom in on the trend.
3.  **Title**:
    *   Text: "Annual Running Volume (Trailing 365)".
    *   Subtitle: "Rolling sum of distance run in the previous year".

## Advanced Note (DAX)

If you were working with the raw data directly in PowerBI (instead of our pre-calculated CSV), you would need a **Measure** to do this calculation.
*   **DAX Formula**: `CALCULATE(SUM(Runs[Distance]), DATESINPERIOD(Runs[Date], LASTDATE(Runs[Date]), -365, DAY))`
*   This is powerful because it recalculates dynamically if you filter by other things (like Shoe Type).
