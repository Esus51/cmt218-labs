# Week 1 - Data Extraction (Excel)

## Introduction

Before we can visualize data, we often need to aggregate it. Raw data (individual runs) is too granular for a monthly bar chart. We need to summarize it to get totals per month.

## Goal

Calculate **Total Distance per Month** using a Pivot Table.
**Why?** Pivot Tables are the fastest way to summarize large datasets in Excel without writing complex formulas.

## Instructions

1.  **Open Data**: Open `runs_only_redacted.csv` in Excel.

2.  **Date Parsing**:
    *   Ensure the `Date` column is recognized as timestamps. Sort by Date (Oldest to Newest) to verify.
    *   **Why?** If Excel treats dates as text, it cannot group them by month.
    *   *Tip*: If grouping doesn't work later, create a helper column `Month` using the formula `=TEXT(A2, "YYYY-MM")`.

3.  **Insert Pivot Table**:
    *   Select your entire data range (Ctrl+A or Cmd+A).
    *   Go to **Insert > Pivot Table**.
    *   Place it in a **New Worksheet**.

4.  **Configure Pivot Fields**:
    *   **Rows**: Drag the `Date` field here. Excel should automatically group this into Years/Quarters/Months. Remove Years and Quarters, keeping only **Months** (and Years if spanning multiple years).
        *   *If automatic grouping fails*: Drag your helper `Month` column here instead.
    *   **Values**: Drag `Distance` here.
        *   **Check aggregation**: Ensure it says **Sum of Distance**.
        *   *Correction*: If it says "Count of Distance", click the arrow > **Value Field Settings** > Select **Sum**.

5.  **Clean Up**:
    *   Pivot tables are dynamic objects. For our plotting tool, we often want a static CSV.
    *   Copy the Pivot Table results (Month and Sum of Distance).
    *   Paste them as **Values** (Right Click > Paste Special > Values) into a new sheet.

6.  **Save**:
    *   Rename columns to `Month` and `TotalDistance`.
    *   **File > Save As** > Select **CSV (Comma delimited) (.csv)**.
    *   Name it `distance_per_month.csv`.
