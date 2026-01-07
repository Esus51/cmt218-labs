# Week 4 - Visualization (PowerBI)

## Introduction

Pie charts are controversial in data visualization because comparing angles is hard for the human eye.
 However, **Donut Charts** (Pie charts with a hole) are often preferred because:
1.  They look modern.
2.  The center can be used to display the "Total" number.

## Goal

Create a **Donut Chart** showing runs by Time of Day (AM/PM).

## Instructions

### 1. Get Data

1.  **Get Data** > **Text/CSV**.
2.  Load `Week 4/data/time_of_day_counts.csv`.

### 2. Create Visual

1.  Select **Donut Chart** from the Visualizations pane.
2.  **Legend**: Drag `Category` (AM/PM).
3.  **Values**: Drag `Count`.

### 3. Format

A pie/donut chart is useless without clear labels.

1.  **Slices**:
    *   Change colors to distinct shades.
    *   *Recommendation*: **PM** = Dark Purple, **AM** = Light Purple (or Grey).
2.  **Detail Labels**:
    *   Position: **Outside**.
    *   Label Contents: Select **Category, Percent of Total**.
    *   *Why?* We care less about the raw number (e.g., 154 runs) and more about the share (65%).
3.  **Title**:
    *   "Runs by Time of Day".
