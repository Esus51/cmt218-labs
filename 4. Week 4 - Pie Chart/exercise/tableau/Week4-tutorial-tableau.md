# Week 4 - Visualization (Tableau)

## Goal

Create a **Pie Chart** of Runs by Time of Day.

## Instructions

### 1. Connect to Data

1.  Connect to `Week 4/data/time_of_day_counts.csv`.

### 2. Build the View

Building a Pie Chart in Tableau is manual compared to other tools.

1.  **Marks Card**: Change the dropdown from "Automatic" to **Pie**.
2.  **Angle**: Drag `Count` to the **Angle** card.
3.  **Color**: Drag `Category` to the **Color** card.
    *   *Result*: A tiny pie chart appears.

### 3. Format & Labels

1.  **Make it bigger**:
    *   Change the view from "Standard" to **Entire View** (toolbar dropdown).
    *   Or click **Size** on Marks card and drag slider.
2.  **Labels**:
    *   Drag `Category` to **Label**.
    *   Drag `Count` to **Label**.
3.  **Percent of Total**:
    *   We want to see %, not just the raw count.
    *   Right-click the `SUM(Count)` pill that is on the **Label** card.
    *   Select **Quick Table Calculation** > **Percent of Total**.
4.  **Colors**:
    *   Click **Color** > Edit Colors.
    *   Assign Purple for PM, Grey for AM (or similar).

### 4. Clean Up

1.  Chart Title: "Time of Day Distribution".
2.  Hide the Legend if labels are clear enough (Right-click legend > Hide Card).
