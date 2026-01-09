# Week 0: Getting Started with R

## Introduction

This week we will introduce the R programming language, a powerful tool designed specifically for statistics and data visualization. This tutorial serves as a foundation for the rest of the course, ensuring you catch up with the basics of syntax and environment setup.

### Goals

- **Get started with R**: Understanding the environment.
- **Tools**: Introduction to **RStudio**.
- **Basics**: Learn about Vectors, Data Frames, and basic syntax.
- **Key Libraries**: Introduction to the **Tidyverse** (specifically `ggplot2` and `dplyr`) later in the course, but starting with Base R today.

---

## Why Choose R?

Your choice of tools should depend on the problem at hand, industry standards, and your own experience. We chose R for parts of this course because:

### Strengths

- **Built-in statistical capabilities**: R was designed for statistics, with base functions for descriptive stats, regression, and data frames. It often requires less code than other languages for these tasks.
- **Publication-Quality Visualisations**: R's libraries (like `ggplot2`) are designed to produce high-quality, customizable visualizations ideal for academic or professional publications.
- **Standard**: R has long been the standard for statistical programming, meaning it has extensive base functionality and trusted packages.
- **RStudio IDE**: Excellent for data exploration, variable tracking, and integration with Markdown.

### Weaknesses

- **Performance**: Can be slower than compiled languages like C++, though generally comparable to Python for many tasks.
- **Learning Curve**: The syntax can be quirky for those coming from standard programming languages like C or Python.
- **Deep Learning**: While R has wrappers for Keras/Torch, the ecosystem is smaller than Python's.

---

## Getting Started

We recommend using **RStudio** (now Posit).

1. **Install R**: [CRAN Project](https://cran.r-project.org/)
2. **Install RStudio**: [Posit Download](https://posit.co/download/rstudio-desktop/)

Alternatively, you can use [Posit Cloud](https://posit.cloud/) to run R in your browser.

### The RStudio Environment

When you open RStudio, you will see four main panes:

1.  **Script Window** (Top Left): Where you write and save your code. You can run a line with `Ctrl+Enter` (Windows) or `Cmd+Enter` (Mac).
2.  **Console** (Bottom Left): Where code is executed immediately. You can type commands here directly.
3.  **Environment** (Top Right): Shows your loaded data and variables. Extremely useful for exploring your datasets.
4.  **Plots/Files/Help** (Bottom Right): Where visualizations appear, and where you can manage packages.

---

## R Basics

Let's look at the building blocks of R.

### Variables and Vectors

R uses `<-` for assignment (though `=` also works, `<-` is idiomatic).

```r
x <- 10
name <- "Alice"
is_valid <- TRUE

# Vectors (Atomic arrays)
# c() combines values into a vector
numbers <- c(1, 2, 3, 4, 5) 

# Vectorized operation: multiplies every element by 2
print(numbers * 2) 
```

### Data Frames

The `data.frame` is the core data structure in R, similar to an Excel table.

```r
df <- data.frame(
  Name = c("Alice", "Bob"),
  Age = c(25, 30)
)
print(df)
```

You can access columns using the `$` operator:

```r
# Access the Name column
print(df$Name)

# Create a new column
df$AgePlusOne <- df$Age + 1
```

### Filtering Data

You can filter data frames using logical conditions. The format is `dataframe[rows, columns]`.

```r
# Filter rows where Age is greater than 25
filtered <- df[df$Age > 25, ]
print(filtered)
```

---

## Exercises

Each exercise below builds on the previous one. We will use Base R plotting functions to understand the fundamentals.

### 1) Create and plot a data frame

**Goal**: Create a dataset representing a cosine wave and visualize it.
**Why?** This tests your ability to generate data and plot it.

1.  Create a vector `x` with 10 values in the range -10 to 10 (use `c()` or `seq()`).
2.  Create `y` as the cosine of x (`cos(x)`).
3.  Store them in a dataframe.
4.  Plot the result.

```r
x <- seq(-10, 10, length.out = 10)
y <- cos(x)
df <- data.frame(x, y)

plot(df$x, df$y)
```

### 2) Add a line through the points

**Goal**: Combine points and lines.

```r
plot(df$x, df$y)
# lines() adds connected lines to the existing plot
lines(df$x, df$y)
```

### 3) Increase Resolution

**Goal**: Improve the smoothness of the curve.
**Why?** 10 points is too few for a smooth curve.

1.  Use `seq()` to generate **100** x values instead of 10.
2.  Recompute `y` and the dataframe.
3.  Plot again.

```r
x <- seq(-10, 10, length.out = 100)
y <- cos(x)
df <- data.frame(x, y)

plot(df$x, df$y, type = "l") # 'type = l' plots a line directly
```

### 4) Filter Data

**Goal**: Plot only a subset of the data.

Filter your dataframe so that only rows with `y > 0` are plotted.

```r
# creating a subset
df_positive <- df[df$y > 0, ]

plot(df_positive$x, df_positive$y)
```

### 5) Visual Polish

**Goal**: Make the chart presentation-ready.

- Add a title and axis labels.
- Change the color to blue.
- Add grid lines.

```r
plot(df_positive$x, df_positive$y,
     main = "Cosine Curve (Positive y Values)",
     xlab = "x",
     ylab = "cos(x)",
     col = "blue")

lines(df_positive$x, df_positive$y, col = "blue")

# Add grid lines
# abline() adds straight lines. 'v' is vertical, 'h' is horizontal
abline(v = seq(-10, 10, by = 2.5), col = "lightgray", lty = "dotted")
abline(h = seq(0, 1, by = 0.25), col = "lightgray", lty = "dotted")
```