# Week 1 - Data Extraction (Python)

## Introduction

In this week's exercise, we will check our data and prepare it for visualisation. We will be using the Python programming language and the **Pandas** library.

**Why Pandas?** Pandas allows us to manipulate structured data (like CSVs) programmatically. This makes our workflow **reproducible**—if the data changes, we just run the script again.

## Goal

We want to create a `distance_per_month.csv` file that contains the total distance run for each month in our dataset.

## Instructions

### 1. Setup

*   Ensure you have Python installed.
*   **Virtual Environment**: It is good practice to use a virtual environment to isolate your project dependencies from other projects.
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Mac/Linux
    # .\venv\Scripts\activate # On Windows
    ```
*   **Install Pandas**:
    ```bash
    pip install pandas
    ```

### 2. Create your script

*   Create a new file named `extract_data.py`.
*   Import the necessary libraries.

```python
import pandas as pd
import os

# We import os to handle file paths safely, though pandas can often handle strings directly.
```

### 3. Load the Data

Use `pd.read_csv()` to load the dataset into a DataFrame.

```python
# Load the raw data
# We assume the script is running from the same directory, or adjust the path.
df = pd.read_csv('../../data/runs_only_redacted.csv')
```

### 4. Process the Data

We need to aggregate the data. This involves **Dates** and **Grouping**.

*   **Convert Dates**: Pandas reads CSVs as strings (text). We must tell it which column contains dates so we can extract months.

```python
# Convert 'Date' column to datetime objects
df['Date'] = pd.to_datetime(df['Date'])
```

*   **Create Grouping Column**: We want to group by "Year-Month".

```python
# .dt accessor allows us to access date properties
# to_period('M') converts a specific date (e.g., 2023-01-15) to a period (2023-01)
df['YearMonth'] = df['Date'].dt.to_period('M')
```

*   **Group and Aggregate**: This is the core step. We split the data by month, calculate the sum of distance for each month, and then combine it back.

```python
monthly_stats = df.groupby('YearMonth').agg(
    TotalDistance=('Distance', 'sum'), # Name of new col = (Column to agg, Function)
    RunCount=('Distance', 'count')     # Optional: count runs per month
).reset_index()

# Note: .reset_index() moves 'YearMonth' from the index back to a regular column
```

*   **Formatting**: Raw distance is in meters. We usually visualize kilometers.

```python
# Convert to string for CSV output (YYYY-MM)
monthly_stats['Month'] = monthly_stats['YearMonth'].dt.strftime('%Y-%m')

# Convert meters to km
monthly_stats['TotalDistance'] = monthly_stats['TotalDistance'] / 1000
```

### 5. Save the Output

Finally, we save the aggregated data to a new CSV file. This small file is what we will feed into our visualization tools.

```python
# Select only the columns we need
output_df = monthly_stats[['Month', 'TotalDistance']]

# Save to CSV, excluding the pandas index numbers
output_df.to_csv('distance_per_month.csv', index=False)
```

## Verification

Run your script from the terminal:
```bash
python3 extract_data.py
```

Check that `distance_per_month.csv` is created. Open it and ensure it has columns `Month` and `TotalDistance`.
