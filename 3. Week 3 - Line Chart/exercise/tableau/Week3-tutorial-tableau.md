# Week 3 - Visualization (Tableau)

## Goal

Create a **Line Chart** of Trailing 365-Day Distance.

## Instructions

### 1. Connect to Data

1.  Connect to `Week 3/data/trailing_365_distance.csv`.
2.  Go to **Sheet 1**.

### 2. Build the View

In Tableau, Dates can be **Discrete** (Blue pills, headers like "2020", "2021") or **Continuous** (Green pills, an axis). For line charts, we usually want Continuous.

1.  **Columns (X-Axis)**:
    *   Drag `Date` to Columns.
    *   *Default*: It likely shows `YEAR(Date)` (Blue pill).
    *   *Fix*: Right-click the pill > Select **Exact Date**.
    *   *Wait*: It might turn green but then typically defaults to `Discrete`. Right-click again ensuring **Continuous** is selected.
    *   *Result*: A smooth, green time axis.
2.  **Rows (Y-Axis)**:
    *   Drag `Trailing365` to Rows.
    *   Tableau should automatically choose a **Line** mark.

### 3. Format

1.  **Color**: Click **Color** on Marks card > Set to Purple.
2.  **Size**: Click **Size** > Increase line thickness slightly.
3.  **Grid Lines**:
    *   Right-click the graph background > **Format**.
    *   Go to the **Lines** icon (Paintbrush or Lines).
    *   Set **Grid Lines** to dashed or light grey for readability.

### 4. Advanced (Raw Data Method)

*If using raw data without pre-calculation:*
Tableau has "Table Calculations" for moving windows.
1.  Drag `Distance` to Rows.
2.  Right-click `SUM(Distance)` pill > **Quick Table Calculation** > **Moving Average**.
3.  Right-click again > **Edit Table Calculation**:
    *   Compute Using: `Date`.
    *   **Previous values**: 364. **Next values**: 0.
    *   *Crucial Note*: "Moving Average" *averages* the values. We want a *Sum*. You would need to double-click the pill to edit the formula to `WINDOW_SUM(SUM([Distance]), -364, 0)`.
