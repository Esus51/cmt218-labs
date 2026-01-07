# Week 1 - Visualization (PowerBI)

## Introduction
Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.

## Goal

Create a **Bar Chart** showing Total Distance per Month.
**Why a Bar Chart?** We are comparing a quantitative value (Distance) across categorical periods (Months). Bar charts make it easy to compare the magnitude of values side-by-side.

## Instructions

### 1. Get Data

1.  Open Power BI Desktop.
2.  **Home Ribbon** > **Get Data** > **Text/CSV**.
3.  Navigate to and select `Week 1/data/distance_per_month.csv`.
    *   *Note*: You could use the raw `runs_only_redacted.csv` and aggregate it within Power BI, but for this tutorial, we will use the clean, pre-aggregated data.
4.  Data Preview window appears > Click **Load**.
    *   **Why Load?** "Transform Data" allows for cleaning (Power Query), but our data is already clean.

### 2. Create Visual

1.  In the **Visualizations** pane (right side), select the **Clustered Column Chart** icon (vertical bars).
    *   *Tip*: Hover over icons to see their names.
2.  **Build the Chart**:
    *   Drag `Month` from the **Data** pane to the **X-axis** field.
    *   Drag `TotalDistance` to the **Y-axis** field.
    *   **Result**: You should see bars appear. If the X-axis looks cluttered, don't worry, we'll fix it.

### 3. Format

A generic chart is rarely presentation-ready. We need to label it clearly.

1.  With the chart selected, go to the **Visualizations** pane > **Format your visual** tab (Paintbrush icon).
2.  **X-Axis**:
    *   **Title** > Text: "Month"
    *   *Conciseness*: Often "Month" is obvious from the labels like "Jan", "Feb". You might choose to turn the title off to save space.
3.  **Y-Axis**:
    *   **Title** > Text: "Total Distance (km)" (Always include units!)
4.  **Columns** (or Bars):
    *   **Color**: Change from default blue to a custom color (e.g., Purple/Rebeccapurple).
    *   **Why?** Consistent branding/color helps users navigate your dashboard.
5.  **General Tab** (next to Visual tab) > **Title**:
    *   Text: "Monthly Running Distance"
    *   Make it Bold, centered.

### 4. Save

1.  **File > Save As**.
2.  Name it `Week1_Solution.pbix`.
