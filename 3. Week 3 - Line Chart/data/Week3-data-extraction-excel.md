# Week 3 - Data Extraction (Excel)

## Introduction

In this week, we are creating a **Line Chart** to visualize running volume over time.
However, we don't just want daily distance (which is noisy); we want a **Trailing 365-Day Total**. This tells us, for any given day, "How many km have I run in the *last year*?"

## Goal

Calculate **Trailing 365-Day Total Distance** for every day.

## The Challenge: Missing Dates

Standard logic (`SUM(B2:B366)`) assumes row B2 was exactly 365 days ago.
**BUT**, if you didn't run on Jan 5th, that date won't be in your raw data. Your rows are not consecutive days.
*   **Implication**: If we just drag a formula down, we are summing the last 365 *runs*, not the last 365 *days*.

## Instructions

### Step 1: Aggregate by Day

First, we need one row per day (summing up multiple runs on the same day).

1.  **Insert Pivot Table** from your raw `runs_only_redacted.csv`.
2.  **Rows**: `Date` (Ungroup logic: Right-click Date > Group/Ungroup > Ensure it shows daily dates like "01/01/2019", not just "Jan").
3.  **Values**: `Sum of Distance`.
4.  **Copy/Paste**: Copy the result (headers and data). Paste as **Values** into a new sheet named `Processed`.

### Step 2: Fix Missing Dates

To do a true rolling window, we need a continuous timeline (Jan 1, Jan 2, Jan 3...) even if the distance is 0.

1.  **Create a Date Master Column**:
    *   In a new column (e.g., Column `E`), type your first date (e.g., `1/1/2019`).
    *   Fill Series: Drag down or use **Home > Fill > Series** to create a row for every single day up to today.
2.  **VLOOKUP Distance**:
    *   In Column `F` (DailyDist), use VLOOKUP to pull data from your Pivot results.
    *   `=IFNA(VLOOKUP(E2, A:B, 2, FALSE), 0)`
    *   *Translation*: Look for this specific date (E2) in our Pivot data (A:B). If found, give me the distance. If not found (error), give me `0`.

### Step 3: Rolling Sum Formula

Now that Column `F` has continuous daily data (including zeros):

1.  Header `G1`: `Trailing 365`.
2.  **The Formula**:
    *   We can't calculate a full year's history for the first 364 days.
    *   Scroll down to row 366 (representing the 365th day).
    *   Formula: `=SUM(F2:F366)` (Sum of today + previous 364 days).
3.  **Fill Down**: Double-click handle.

### Step 4: Save

1.  Copy your continuous Date column (`E`) and the Trailing 365 column (`G`).
2.  Paste as **Values** into a new workbook.
3.  Save as `trailing_365_distance.csv`.
