# Week 2 - Data Extraction (Excel)

## Introduction

Scatter plots allow us to look at the relationship between two numerical variables. In this case, we want to see if there is a relationship between how far we run (**Distance**) and how fast we run (**Pace**).

## Goal

Calculate **Average Pace** (min/km) for each run.

**Why Pace?** Runners typically measure speed in "minutes per kilometer". A lower number (e.g., 4:00/km) is faster than a higher number (e.g., 6:00/km).

## Instructions

1.  **Open Data**: Open `runs_only_redacted.csv` in Excel.

2.  **Verify Units**:
    *   `Distance`: Check if it is in meters or kilometers. Strava exports are often in meters. If so, create a `Distance_km` column (`=Distance / 1000`).
    *   `Moving Time`: This is usually in seconds.

3.  **Create New Column**:
    *   Header in cell `O1` (or next free column): `Pace (min/km)`.

4.  **Enter Formula**:
    *   Logic: Pace = Time (in minutes) / Distance (in km).
    *   Step 1: Convert Time to minutes (`Moving Time / 60`).
    *   Step 2: Divide by Distance in km.
    *   **Formula**: `=(H2 / 60) / (D2 / 1000)`
        *   *Assumptions*: H2 is Time (seconds), D2 is Distance (meters).
    
5.  **Fill Down**: Double-click the fill handle (small square at bottom-right of cell) to apply to all rows.

6.  **Filter and Clean**:
    *   **Filter**: Select Headers > **Data > Filter**.
    *   Filter out `0` distances or `#DIV/0!` errors. This removes invalid data points that would break our chart.
    *   *Optional*: Filter out huge outliers (e.g., Pace > 20 min/km often indicates walking or GPS errors).

7.  **Select & Save**:
    *   Copy `Distance` (or `Distance_km`) and your new `Pace` column.
    *   Paste as **Values** into a new workbook.
    *   Save as `distance_vs_pace.csv`.
