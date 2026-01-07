# Week 1 - Visualization (Tableau)

## Introduction
Tableau is a leading visual analytics platform known for its drag-and-drop interface and ability to handle large datasets.

## Goal

Create a **Bar Chart** showing Total Distance per Month.
**Why a Bar Chart?** It effectively compares quantitative values (Distance) across categories (Months).

## Instructions

### 1. Connect to Data

1.  Open Tableau Desktop.
2.  Under **Connect** (left panel), select **Text file**.
3.  Choose `Week 1/data/distance_per_month.csv`.
4.  Tableau will take you to the "Data Source" View. Verify the data looks correct.
5.  Click on the **Sheet 1** tab at the bottom to start visualizing.

### 2. Build the View

Tableau works by dragging fields (Variables) onto "Shelves".

1.  **Columns Shelf (X-Axis)**:
    *   Drag `Month` from the Data pane to **Columns**.
    *   *Note*: Blue pills represent **Discrete** data (headers), Green pills represent **Continuous** data (axes). We want a discrete header for each month.
2.  **Rows Shelf (Y-Axis)**:
    *   Drag `TotalDistance` to **Rows**.
    *   Tableau automatically aggregates measures. Ensure it says `SUM(TotalDistance)`.
    *   **Why Sum?** Even if there's only one row per month, Tableau's default behavior is to aggregate.

### 3. Format

1.  **Labels**:
    *   Drag `TotalDistance` onto the **Label** square in the **Marks** card. specific values will appear on top of bars.
2.  **Color**:
    *   Click on the **Color** square in the Marks card.
    *   Select a custom color (e.g., Purple) to match our theme.
3.  **Titles**:
    *   Double-click the Sheet Title ("Sheet 1") at the top of the chart.
    *   Change it to "Monthly Running Distance".
4.  **Axis Titles**:
    *   Right-click the X-axis label ("Month"). You can choose "Edit Axis" or just "Hide Field Labels for Columns" if it's redundant.
    *   Right-click Y-axis ("TotalDistance") > Edit Axis > Rename to "Distance (km)".

### 4. Save

1.  **File > Save to Tableau Public** (if using the free version) or **File > Save As** (`.twb` or `.twbx` for Desktop).
    *   *Tip*: `.twbx` (Packaged Workbook) includes the data file, making it easier to share.
