# Week 0: Getting Started with Python

## Introduction

This week we will introduce the Python programming language and the tools we will be using for data science. This tutorial serves as a foundation for the rest of the course, ensuring you catch up with the basics of syntax and environment setup.

### Goals

- **Get started with Python**: Set up your environment and run your first commands.
- **Understand Jupyter Notebooks and Google Colab**: Learn why we use notebooks for data science (interactive, cell-based execution).
- **Learn basic Python syntax**: Cover fundamental concepts like variables, loops, and functions.
- **Introduction to key libraries**: Get a first look at **NumPy**, **Pandas**, and **Matplotlib**, explaining *why* they are the industry standard.

---

## Why Choose Python?

Your choice of tools should depend on the problem at hand, industry standards, and your own experience. We chose Python for this course because:

### Strengths

- **Popularity**: Python is the dominant language in data science and AI.
- **Ecosystem**: It has a massive collection of libraries (like Pandas for data and Scikit-Learn for ML) that prevent you from "reinventing the wheel."
- **Readability**: Python code often reads like English, making it easier to learn and debug.
- **General-Purpose**: You can use it for web apps, automation, and data analysis alike.

### Weaknesses

- **Performance**: Pure Python can be slower than compiled languages like C++, though libraries like NumPy bridge this gap by running optimized C code under the hood.
- **Indentation**: Python relies on whitespace (indentation) to define code blocks, which can be tricky for beginners coming from other languages.

---

## Getting Started

We will use **Google Colab** for these sessions.
**Why?** Colab is a free, cloud-based Jupyter notebook environment. It requires no setup, runs on Google's servers, and gives you free access to computing resources (including GPUs). This ensures everyone has the exact same environment, avoiding "it works on my machine" issues.

1. Go to [https://colab.research.google.com](https://colab.research.google.com).
2. Sign in with your Google account.
3. Click **New Notebook**.
4. You will see an interface with **cells**. You can add:
   - **Text cells** (Markdown): For writing explanations, notes, and documentation.
   - **Code cells** (Python): For writing and executing code.

---

## Notebooks

Python programs are traditionally written as scripts (`.py` files) executed from top to bottom. **Notebooks** allow for a more interactive, explorative workflow.

### Execution Flow & Order
One key feature of notebooks is that code cells can be run **independently and out of order**. This is powerful for data science because you can:
- Load a large dataset once in the first cell.
- Experiment with analyzing that data in subsequent cells without reloading it every time.

> [!WARNING]
> **Order Matters**: Variables defined in one cell exist globally in the notebook. If you run cells out of order (e.g., cell 3 before cell 1), you might get errors or unexpected results. Always verify your work by trying "Runtime > Restart and Run All" to ensure it works sequentially.

---

## Python Basics

Let's look at the building blocks of Python.

### Variables and Types

Python is **dynamically typed**, meaning you don't need to declare whether a variable is a number or a text string; Python figures it out.

```python
x = 10          # int (Integer)
y = 3.14        # float (Decimal number)
name = "Alice"  # string (Text)
is_valid = True # bool (True/False)

print(x, y, name, is_valid)
```

### Lists and Dictionaries

These are the primary ways to store collections of data.

```python
# List: An ordered sequence of items
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # Access the first element (Python uses 0-based indexing)

# Dictionary: A collection of key-value pairs (like a real dictionary)
student = {"name": "Bob", "age": 21}
print(student["name"]) # Look up the value associated with the key "name"
```

### Conditionals

Logic to control the flow of your program.

```python
age = 20
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### Loops

Used to repeat actions.

```python
# For loop: Best when you know how many times to loop (e.g., over a list)
for i in range(5):
    print(i) # Prints 0, 1, 2, 3, 4

# While loop: Best when you want to loop until a condition changes
count = 0
while count < 3:
    print(count)
    count += 1
```

### Functions

Reusable blocks of code. **Why?** They keep your code DRY (Don't Repeat Yourself).

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

---

## Data Science Libraries

Python's standard library is great, but for data science, we rely on specialized **external libraries**.

### 1. NumPy
**Why?** Python lists are flexible but slow for math. **NumPy** (Numerical Python) provides "arrays" that are efficient and fast, allowing us to perform math on millions of numbers instantly.

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr * 2)  # Multiplies every element by 2 instantly
```

### 2. Pandas
**Why?** **Pandas** gives us the **DataFrame**, which is essentially a programmable Excel spreadsheet. It allows us to load, filter, and manipulate tabular data easily.

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
**Why?** Visualizing data is crucial for understanding it. **Matplotlib** is the foundational plotting library in Python. It's powerful and versatile, though sometimes verbose.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [2, 4, 6]

plt.plot(x, y)
plt.show()
```

---

## Exercises

Each exercise below builds on the previous one. We are using `np.linspace` and `pd.DataFrame` to generate synthetic data so you can see how the plotting works in a controlled environment.

### 1) Create and plot a data frame

**Goal**: Create a dataset representing a cosine wave and visualize it.
**Why?** This tests your ability to generate data using NumPy, store it in a Pandas DataFrame, and plot it with Matplotlib.

1.  Create a DataFrame with two columns `x` and `y`.
2.  `x` should have 10 values in the range -10 to 10 (use `np.linspace`).
3.  `y` should be the cosine of x (`np.cos`).
4.  Plot the result as a scatter plot.

```python
# 1. Generate 10 evenly spaced values from -10 to 10
x = np.linspace(-10, 10, 10)
# 2. Calculate cosine for each x
y = np.cos(x)

# 3. Store in a DataFrame
dfcos = pd.DataFrame({"x": x, "y": y})
print(dfcos)

# 4. Plot
plt.scatter(dfcos["x"], dfcos["y"])
plt.xlabel("x")
plt.ylabel("cos(x)")
plt.title("Cosine scatter (10 points)")
plt.show()
```

### 2) Add a line through the points

**Goal**: Combine different plot types (scatter and line).
**Why?** Often we want to see both the individual data points and the trend (line) connecting them.

In `matplotlib`, we can stack plots by calling functions sequentially before `plt.show()`.

```python
plt.scatter(x, y) # The points
plt.plot(x, y)    # The connecting line
plt.xlabel("x")
plt.ylabel("y")
plt.title("Scatter + line")
plt.show()
```

### 3) Increase Resolution

**Goal**: Improve the smoothness of the curve.
**Why?** 10 points is too few to see a smooth curve. We use `np.linspace` to easily generate more points.

1.  Use `np.linspace()` to generate **100** x values instead of 10.
2.  Recompute `y`.
3.  Plot again.

```python
# High resolution data
x = np.linspace(-10, 10, 100)
y = np.cos(x)

plt.plot(x, y)
plt.title("Cosine Curve (100 points)")
plt.show()
```

### 4) Filter Data

**Goal**: Plot only a subset of the data.
**Why?** In real analysis, you often want to exclude outliers or focus on specific regions (e.g., only positive values).

Filter your DataFrame so that only rows with `y > 0` are plotted.

```python
df = pd.DataFrame({"x": x, "y": y})
# Boolean indexing: select rows where df["y"] is greater than 0
df_positive = df[df["y"] > 0]

plt.scatter(df_positive["x"], df_positive["y"])
plt.title("Positive Cosine Values Only")
plt.show()
```

### 5) Visual Polish

**Goal**: Make the chart presentation-ready.
**Why?** A chart without labels or grids is hard to read. Good visualization communicates clearly.

- Add red line and blue points.
- Add grid lines every 2.5 units on the x-axis.

```python
# Full worked example

# 1. Generate data
x = np.linspace(-10, 10, 100)
y = np.cos(x)
df = pd.DataFrame({"x": x, "y": y})

# 2. Filter positive y
dfpositive = df[df["y"] > 0]

# 3. Plot with specific colors
plt.scatter(dfpositive["x"], dfpositive["y"], color="blue", label="Points")
plt.plot(dfpositive["x"], dfpositive["y"], color="red", label="Trend")

# 4. Labels and Title
plt.title("Cosine Curve (Positive y values)")
plt.xlabel("x")
plt.ylabel("cos(x)")

# 5. Grid lines every 2.5 units on x
# np.arange creates values from start to stop with a specific step
xticks = np.arange(-10, 10.1, 2.5) 
plt.xticks(xticks)
plt.grid(True, alpha=0.3) # alpha makes grid lines subtle

plt.legend() # Shows labels defined in plot/scatter
plt.show()
```

---

## Project: Running Data Analysis

This week we will begin investigating real user data from the `runs_only_redacted.csv` dataset. This file contains running activities with redacted location data for privacy.

**Note on Data:** Ensure you have `runs_only_redacted.csv` uploaded to your Colab environment or available in your working directory.

### 1) Average Speed vs Distance

> **Assessment Task**
> Produce a scatter plot showing **Average Speed vs Distance**.
>
> - **Inputs**: `runs_only_redacted.csv`
> - **Requirements**:
>   - Convert distance from metres to **km**.
>   - Convert average speed from m/s to **km/h**.
>   - Label axes clearly with units.

**Why?** This is a classic correlation check. Do runs get slower as they get longer?

```python
# Load the data (assuming file is in current directory)
runs_only = pd.read_csv("runs_only_redacted.csv")

# Create new columns for converted units
# We divide by 1000 to get km
runs_only["distance_km"] = runs_only["distance"] / 1000.0
# We multiply m/s by 3.6 to get km/h
runs_only["avg_speed_kmh"] = runs_only["average_speed"] * 3.6

# Plot
plt.figure(figsize=(10, 6)) # Make the plot larger
plt.scatter(runs_only["distance_km"], runs_only["avg_speed_kmh"], alpha=0.5, color="purple")

plt.title("Average Speed vs Distance")
plt.xlabel("Distance (km)")
plt.ylabel("Average Speed (km/h)")
plt.grid(True)
plt.show()
```

### 2) Pace vs Distance

**Context**: Runners usually talk about **pace** (minutes per km) rather than speed (km/h). A lower pace value means you are running faster (it takes fewer minutes to run a km).

> **Assessment Task**
> Create a chart for **Average Pace vs Distance**.
>
> **Requirements**:
> - Filter to include only rows where `sport_type` is "Run".
> - Exclude rows with errors (e.g., `average_speed` is 0 or less).
> - Calculate Pace: `pace (min/km) = (1000 / average_speed_m_s) / 60`.

**Explanation of Math**:
- `1000 / speed` gives seconds per km.
- Dividing by 60 gives minutes per km.

```python
# 1. Filter data: 'Run' only and valid speed
runs_runs = runs_only[
    (runs_only["sport_type"] == "Run") & 
    (runs_only["average_speed"] > 0)
].copy() # .copy() ensures we don't modify the original slice warningly

# 2. Calculate Pace
runs_runs["distance_km"] = runs_runs["distance"] / 1000.0
runs_runs["pace_min_km"] = (1000.0 / runs_runs["average_speed"]) / 60.0

# 3. Plot
plt.figure(figsize=(10, 6))
plt.scatter(runs_runs["distance_km"], runs_runs["pace_min_km"], color="teal", alpha=0.5)
plt.title("Pace vs Distance")
plt.xlabel("Distance (km)")
plt.ylabel("Pace (min/km)")
plt.grid(True)
plt.show()
```

### 3) Reverse the Y axis (Intuitive Pace)

**Problem**: On a standard graph, higher values are at the top. But for pace, "higher" means "slower".
**Solution**: Reverse the y-axis so that "faster" (lower numbers) is at the top. This mimics how we think about "speed" on a chart (up = fast).

**How to do it**:
- `plt.ylim(max, min)` (swapping the order).
- `plt.gca().invert_yaxis()`.

```python
plt.figure(figsize=(10, 6))
plt.scatter(runs_runs["distance_km"], runs_runs["pace_min_km"], color="teal", alpha=0.5)

plt.title("Pace vs Distance (Reversed Y-Axis)")
plt.xlabel("Distance (km)")
plt.ylabel("Pace (min/km)")

# Reverse Y-axis: Top is faster (lower min/km), Bottom is slower (higher min/km)
plt.gca().invert_yaxis()

plt.grid(True)
plt.show()
```
