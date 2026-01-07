# Week 4 - Data Extraction (Excel)

## Introduction

Pie charts are used to show "Part-to-Whole" relationships. We want to see what proportion of our runs happens in the Morning vs. the Afternoon.

## Goal

Classify runs into **AM** (Morning) and **PM** (Afternoon/Evening) and count them.

## Instructions

### 1. Open Data

Open `runs_only_redacted.csv` in Excel.

### 2. Extract Hour

We need to know the *hour* the run started to decide if it was AM or PM.

1.  **Format**: Ensure your `start_date` column (usually Col A) is formatted as Date/Time.
2.  **New Column**: In cell `O1`, type `Hour`.
3.  **Formula**: In `O2`, type `=HOUR(A2)`.
    *   *Result*: This returns a number from 0 to 23 (e.g., 9 for 9:30 AM, 14 for 2:15 PM).
4.  **Fill Down**: Apply to all rows.

### 3. Classify (IF Function)

Now we convert the number into a category.

1.  **New Column**: In `P1`, type `Category`.
2.  **Formula**: In `P2`, type `=IF(O2 < 12, "AM", "PM")`.
    *   *Logic*: If the hour is less than 12 (0-11), it's AM. Otherwise (12-23), it's PM.
3.  **Fill Down**.

### 4. Count (Pivot Table)

To make a Pie Chart, we need the *counts*, not the raw list.

1.  Select Columns `A` through `P` (or just your new columns).
2.  **Insert > Pivot Table**.
3.  **Rows**: Drag `Category` to Rows (You should see AM and PM).
4.  **Values**: Drag `Category` (or any filled column) to Values. It should say **Count of Category**.
5.  *Result*: A tiny table showing how many AM runs and how many PM runs you have.

### 5. Save

1.  Copy this small table (Headers: Category, Count).
2.  Paste values into a new workbook.
3.  Save as `time_of_day_counts.csv`.
