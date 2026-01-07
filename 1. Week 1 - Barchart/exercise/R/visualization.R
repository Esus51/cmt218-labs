# Visualize Distance per Month using ggplot2

# Load Libraries
if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# 1. Load Data
# We need to make sure the path points to our data file
data_path <- "../../data/distance_per_month.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # 2. Plot
  # TODO: Create the bar chart using ggplot2
  # Use geom_col() for the bars
  # Add labels and a theme
  
  # p <- ggplot(df, aes(x = Month, y = TotalDistance)) + ...
    
  
  # 3. Save
  # Uncomment the following lines once 'p' is created
  # ggsave("monthly_distance_chart.png", plot = p, width = 10, height = 6)
  # print("Chart saved to monthly_distance_chart.png")
  
} else {
  print(paste("Error: File not found at", data_path))
}
