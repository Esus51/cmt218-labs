# Visualize Running Dashboard using ggplot2 and patchwork

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
if (!require(patchwork)) install.packages("patchwork") # For dashboard layout
library(ggplot2)
library(readr)
library(patchwork)

# --- 1. Load Data ---
df_bar <- read_csv("../../data/distance_per_month.csv", show_col_types = FALSE)
df_scatter <- read_csv("../../data/distance_vs_pace.csv", show_col_types = FALSE)
df_line <- read_csv("../../data/trailing_365_distance.csv", show_col_types = FALSE)
df_pie <- read_csv("../../data/time_of_day_counts.csv", show_col_types = FALSE)

# --- 2. Create Individual Plots ---
# TODO: Recreate the plots from previous weeks (or simplified versions)

# Bar Chart
# p1 <- ggplot(df_bar, aes(x = Month, y = TotalDistance)) + ...

# Scatter Plot
# p2 <- ggplot(df_scatter, aes(x = Distance_km, y = AveragePace_min_km)) + ...

# Line Chart
# p3 <- ggplot(df_line, aes(x = Date, y = TotalDistance)) + ...

# Pie Chart
# p4 <- ggplot(df_pie, aes(x = "", y = Count, fill = Category)) + ...


# --- 3. Assemble Dashboard ---
# TODO: Use patchwork to combine the plots
# Syntax example: (p1 | p2) / (p3 | p4)

# dashboard <- ...


# Uncomment to save
# ggsave("dashboard.png", plot = dashboard, width = 12, height = 10)
# print("Dashboard saved to dashboard.png")
