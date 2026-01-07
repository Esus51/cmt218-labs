# Week 5 - Data Extraction (Excel)

## Introduction

For a Calendar Heatmap, we need to aggregate our data by **Week** and **Year**.
This allows us to see patterns like "Did I run more in the winter of 2020?" or "Was Week 35 consistently high volume?"

## Goal

Create `weekly_distance_heatmap.csv` with columns: `Year`, `Week`, `TotalDistance`.

## Instructions

### 1. Open Data
Open `runs_only_redacted.csv`.

### 2. Calculate Year & Week (ISO Standard)

We use the **ISO 8601** standard (Weeks start on Monday). This is crucial because "Week 1" and "Week 52" definitions vary otherwise.

1.  **Format**: Ensure Date column (A) is Date formatted.
2.  **Helper Col 1 (Week)**:
    *   Header: `Week`.
    *   Formula: `=ISOWEEKNUM(A2)`. (Requires Excel 2013+).
3.  **Helper Col 2 (ISO Year)**:
    *   Header: `Year`.
    *   *The Problem*: Simpy using `=YEAR(A2)` is wrong for days like Jan 1st if they belong to the *previous* week number.
    *   *The Fix*: Use this formula to get the ISO Year:
        `=YEAR(A2-WEEKDAY(A2,2)+4)`
    *   *Simple Alternative*: If you don't care about perfect edge-case precision, `=YEAR(A2)` is acceptable for this exercise.

### 3. Pivot Table

1.  Insert Pivot Table.
2.  **Rows**: `Year`.
3.  **Columns**: `Week`.
4.  **Values**: `Sum of Distance`.

### 4. Flatten for Output

The visualization tools (R, Python, Tableau) usually prefer "Long Format" (one row per week), not a wide matrix.

1.  **Move Columns to Rows**: Drag the `Week` field from **Columns** area to **Rows** area (below Year).
2.  **Tabular Layout**:
    *   Click inside Pivot Table.
    *   Go to **Design** Tab (top ribbon).
    *   **Report Layout** > **Show in Tabular Form**.
    *   **Report Layout** > **Repeat All Item Labels** (Critical! Fills in the "2020" for every week).
    *   **Subtotals** > **Do Not Show Subtotals**.
3.  *Result*: A clean list with 3 columns: Year, Week, Total.

### 5. Save

1.  Copy the data (excluding Grand Totals).
2.  Paste values into new workbook.
3.  Save as `weekly_distance_heatmap.csv`.
