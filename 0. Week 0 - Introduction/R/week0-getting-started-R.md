# Week 0: Getting Started with R

## Introduction

This week we will introduce the R programming language, a powerful tool designed specifically for statistics and data visualization.

### Goals

- **Get started with R**: Understanding the environment.
- **Tools**: Introduction to **RStudio** (or Posit Cloud).
- **Basics**: Learn about Vectors, Data Frames, and basic syntax.
- **Key Libraries**: Introduction to the **Tidyverse** (ggplot2, dplyr).

---

## Why Choose R?

R was built by statisticians for statisticians. It excels at data analysis and visualization out of the box.

### Strengths

- **Data Visualization**: Libraries like `ggplot2` allow for publication-quality plots with minimal code.
- **Statistical Analysis**: R has a vast array of statistical packages built-in or easily installable.
- **Tidyverse**: A coherent system of packages for data manipulation, exploration, and visualization that shares a common design philosophy.

### Weaknesses

- **Performance**: Can be slower than compiled languages for non-vectorized operations.
- **Learning Curve**: The syntax can be quirky for those coming from standard programming languages like Python or C++.

---

## Getting Started

We recommend using **RStudio** (now Posit). You can install it locally or use the cloud version.

1. **Install R**: [CRAN Project](https://cran.r-project.org/)
2. **Install RStudio**: [Posit Download](https://posit.co/download/rstudio-desktop/)

Alternatively, use [Posit Cloud](https://posit.cloud/) to run R in your browser.

---

## R Basics

### Variables and Vectors

R uses `<-` for assignment (though `=` also works, `<-` is idiomatic).

```r
x <- 10
name <- "Alice"
is_valid <- TRUE

# Vectors (Atomic arrays)
numbers <- c(1, 2, 3, 4, 5) # c() combines values into a vector
print(numbers * 2) # Vectorized operation: 2, 4, 6, 8, 10
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

### Plotting (Base R)

R has built-in plotting.

```r
x <- seq(-10, 10, length.out = 100)
y <- cos(x)
plot(x, y, main = "Cosine Curve", col = "blue", type = "l")
```

---

## The Tidyverse

In this course, we will heavily rely on the **Tidyverse**, a collection of packages including `ggplot2` (visualization) and `dplyr` (data manipulation).

### Install and Load

```r
install.packages("tidyverse")
library(tidyverse)
```

### ggplot2 Example

**Why?** `ggplot2` is based on the "Grammar of Graphics", allowing you to build plots layer by layer.

```r
# Create data
df <- data.frame(x = x, y = y)

# Plot
ggplot(df, aes(x = x, y = y)) +
  geom_line(color = "blue") +
  geom_point(data = subset(df, y > 0), color = "red") +
  labs(title = "Cosine Curve (ggplot2)", x = "X Values", y = "Cos(X)") +
  theme_minimal()
```

---

## Next Steps

Experiment with RStudio. In the upcoming weeks, we will dive deeper into data extraction and visualization exercises using R.
