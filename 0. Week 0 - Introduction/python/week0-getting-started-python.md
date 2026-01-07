# Week 0: Getting Started with Python

## Introduction

This week we will introduce the Python programming language and the tools we will be using for data science.

### Goals

- Get started with **Python**
- Understand **Jupyter Notebooks** and **Google Colab**
- Learn basic Python syntax: variables, loops, functions
- Introduction to key libraries: **NumPy**, **Pandas**, **Matplotlib**

## Why Choose Python?

Your choice of tools should depend on:
- Industry standards in your target field, along with colleague expertise.
- Your experience (i.e., the speed of delivering solutions vs. learning new tools).
- Strengths and weaknesses of the toolset.

### Strengths

- **Popularity**: Python is one of the most commonly used programming languages today.
- **Machine Learning**: It has access to the most up-to-date and widely used machine learning libraries.
- **Readability**: It is considered easy to learn and read.
- **Ecosystem**: There is a wide range of packages and libraries available for most tasks.
- **General-Purpose**: It can be used for almost every task, from web development to data science.
- **Interpreted**: No compilation step is needed; code runs line-by-line.
- **Community**: Strong community support and extensive online documentation.

### Weaknesses

- **Performance**: While improving, Python and its libraries often prioritize accessibility over raw speed compared to compiled languages like C++.
- **Syntax**: Python syntax doesn't follow C-family rules, which can make moving to/from other tools slightly harder.
- **Dependencies**: Python does not have many tools by default; you rely heavily on external libraries.
- **Abstraction**: Extensive use of libraries can sometimes obscure what operations are actually happening under the hood.

## Getting Started

We will use **Google Colab** for these sessions. This ensures we are all using the same environment and versions, avoiding local installation issues.

1. Go to [https://colab.research.google.com](https://colab.research.google.com).
2. Sign in with your Google account.
3. Click **New Notebook**.
4. You can add:
   - **Text cells** (Markdown) for explanations.
   - **Code cells** (Python) to run code.

## Notebooks

Python programs are traditionally written as scripts (`.py` files) executed sequentially. **Notebooks** (originating from Jupyter) provide a more interactive workflow. A notebook is composed of cells:

- **Code cells**: Contain Python code. Can be executed individually or all at once.
- **Text cells (Markdown)**: Contain formatted text for documentation and notes.

### Execution Flow & Order
One key feature of notebooks is that code cells can be run **independently and out of order**. This allows you to:
- Load libraries once.
- Define variables or functions in one cell.
- Experiment in separate cells without rerunning the entire script.

> [!WARNING]
> **Caveat**: If cells are executed in an inconsistent order, the notebook state may become unclear. Always ensure your notebook runs correctly from top to bottom before sharing.

## Python Basics

### Variables and Types

Python is dynamically typed and high-level.

```python
x = 10          # int
y = 3.14        # float
name = "Alice"  # string
is_valid = True # bool

print(x, y, name, is_valid)
```

### Lists and Dictionaries

Lists are ordered collections. Dictionaries are key-value pairs.

```python
# List
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # Access first element

# Dictionary
student = {"name": "Bob", "age": 21}
print(student["name"])
```

### Conditionals

```python
age = 20
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### Loops

```python
# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 3:
    print(count)
    count += 1
```

### Functions

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

## Data Science Libraries

Python contains relatively few specialized native methods for data science. We rely on **libraries** (both standard and external). In Google Colab, many common external libraries are pre-installed.

We will focus on three key libraries:

### 1. NumPy
**NumPy** provides mathematical and numerical functions.
- Largely implemented in C and C++, making it fast and reliable.
- **NumPy arrays** are significantly faster than Python lists for numerical operations.
- Supports **vectorised computation** (applying operations to whole arrays without loops).

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr * 2)  # Element-wise multiplication
```

### 2. Pandas
**Pandas** brings R-style dataframes to Python.
- Relies on NumPy for low-level operations.
- Provides tools for analyzing tabular data.
- Excellent for exploring small to medium-sized datasets.

```python
import pandas as pd

data = {
    "Name": ["Alice", "Bob"],
    "Age": [25, 30]
}
df = pd.DataFrame(data)
print(df)
```

### 3. Matplotlib
**Matplotlib** brings MATLAB-style plotting to Python.
- Renders plots as image outputs.
- The most basic yet widely used plotting library.
- Used here to get started; later we may explore tools like Plotly or Seaborn.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [2, 4, 6]

plt.plot(x, y)
plt.show()
```

## Exercises

Note: You will need to research the named functions. Avoid relying solely on LLMs; instead, use web resources and Python documentation (`help()` function, official docs, etc).

We will use:
- `numpy` for numeric operations (`np.cos`, `np.linspace`, etc.)
- `pandas` for DataFrames
- `matplotlib` for plotting

---

### 1) Create and plot a data frame

Create a DataFrame with two columns `x` and `y` where:
- `x` has 10 values in the range -10 to 10
- `y = cos(x)`

Plot the output (scatter plot).

```python
# Example solution for Exercise 1

# 10 values from -10 to 10
x = np.linspace(-10, 10, 10)
y = np.cos(x)

dfcos = pd.DataFrame({"x": x, "y": y})
print(dfcos)

plt.scatter(dfcos["x"], dfcos["y"])
plt.xlabel("x")
plt.ylabel("cos(x)")
plt.title("Cosine scatter (10 points)")
plt.show()
```

### 2) Add a line through the points

In `matplotlib`, you can:
- Use `plt.scatter()` for points.
- Use `plt.plot()` to draw a line through the same points.

```python
# Example of adding a line to a plot
plt.scatter(x, y)
plt.plot(x, y)  # draws a line through the points
plt.xlabel("x")
plt.ylabel("y")
plt.title("Scatter + line")
plt.show()
```

### 3) Use `np.linspace()` to increase the number of x values

Use `np.linspace()` to increase the number of x values to 100, still on the range -10 to 10.

```python
# Example of using np.linspace()
sequence = np.linspace(-1, 1, num=10)
print(sequence)
```

Then:
- Recompute `y = cos(x)` with 100 points.
- Plot the results.

### 4) Plot only positive values

Filter your DataFrame so that only rows with `y > 0` are plotted.

### 5) Label axes and title the chart

Use `plt.xlabel()`, `plt.ylabel()`, and `plt.title()`.

### 6) Make the scatter points blue and the line red

Use the `color` (or `c`) parameter in `plt.scatter()` (e.g. `color="blue"`).

### 7) Bonus – grid lines at 2.5 intervals on the x axis

Hint: Look at:
- `plt.grid()`
- `plt.xticks()`
- `np.arange()` to generate tick positions.

```python
# Full worked example

# Generate data
x = np.linspace(-10, 10, 100)
y = np.cos(x)
df = pd.DataFrame({"x": x, "y": y})

# Filter positive y
dfpositive = df[df["y"] > 0]

# Plot
plt.scatter(dfpositive["x"], dfpositive["y"], color="blue")
plt.plot(dfpositive["x"], dfpositive["y"], color = "red")

plt.title("Cosine Curve (Positive y values)")
plt.xlabel("x")
plt.ylabel("cos(x)")

# Grid lines every 2.5 units on x
xticks = np.arange(-10, 10.1, 2.5) # creates a numpy array of values spaced 2.5 between -10 and 10.1
plt.xticks(xticks)
plt.grid(True)

plt.show()
```

## Project

This week we will begin to investigate the data from the `runs_only.csv` dataset.

### 1) Average Speed vs Distance

> ## Assessment
>
> Produce a scatter plot showing **Average Speed vs Distance**.
>
> - Ensure axes are labelled and units are provided.
> - Use **km** for distance.
> - Assume:
>   - `distance` is in metres
>   - `average_speed` is in m/s
>
> We will:
> - Convert distance to km.
> - Convert average speed to km/h.

```python
# Convert to km and km/h
runs_only["distance_km"] = runs_only["distance"] / 1000.0
runs_only["avg_speed_kmh"] = runs_only["average_speed"] * 3.6

# Plot
plt.scatter(runs_only["distance_km"], runs_only["avg_speed_kmh"],
            color="blue")
plt.title("Average Speed vs Distance")
plt.xlabel("Distance (km)")
plt.ylabel("Average Speed (km/h)")
plt.show()
```

### 2) Pace vs Distance

Runners might want to see **pace** (minutes per km).

> ## Assessment
>
> Create a chart for **Average Pace vs Distance**, ensuring that:
>
> - Only rows with `sport_type == "Run"` are included.
> - Rows with zero (or negative) `average_speed` are excluded.
> - Pace is defined as `min/km`.
>
> Steps:
> 1. Filter `runs_only` to keep only `"Run"` and `average_speed > 0`.
> 2. Convert:
>    - distance to km
>    - pace to min/km (using `pace_min_km = (1000 / average_speed) / 60`)
> 3. Plot `pace_min_km` vs `distance_km`.

```python
# Filter only runs with positive speed
runs_runs = runs_only[(runs_only["sport_type"] == "Run") &
                      (runs_only["average_speed"] > 0)].copy()

# Convert to km and min/km
runs_runs["distance_km"] = runs_runs["distance"] / 1000.0
runs_runs["pace_min_km"] = (1000.0 / runs_runs["average_speed"]) / 60.0

# Plot
plt.scatter(runs_runs["distance_km"], runs_runs["pace_min_km"],
            color="blue")
plt.title("Pace vs Distance")
plt.xlabel("Distance (km)")
plt.ylabel("Pace (min/km)")
plt.show()
```

### 3) Reverse the Y axis (pace)

When you view the chart, note that a **lower** pace value (e.g. 4 min/km) means a **faster** run than 6 min/km.

It is often more intuitive if faster runs appear **higher** on the chart. To do this, we can reverse the y-axis.

Hints in Python:
- `values[::-1]` reverses a sequence.
- `min(values)` and `max(values)` give the range.
- In `matplotlib`, you can either:
  - Use `plt.ylim(max_value, min_value)`, or
  - Use `plt.gca().invert_yaxis()`.

```python
# Calculate reversed y-axis limits
y_min = runs_runs["pace_min_km"].min()
y_max = runs_runs["pace_min_km"].max()

# Plot with reversed y-axis (higher on the plot = faster pace)
plt.scatter(runs_runs["distance_km"], runs_runs["pace_min_km"],
            color="blue")
plt.title("Pace vs Distance (Reversed Y-Axis)")
plt.xlabel("Distance (km)")
plt.ylabel("Pace (min/km)")

# Set limits reversed: max first, then min
plt.ylim(y_max, y_min)

plt.show()
```
