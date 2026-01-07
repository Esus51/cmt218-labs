# Visualize Monthly Distance with Color Scale using ggplot2

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/distance_per_month.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Plot
  # TODO: Create a bar chart that uses color to represent the distance intensity
  # Use geom_col(aes(fill = TotalDistance))
  # Experiment with scale_fill_gradient()
  
  # p <- ggplot(df, aes(x = Month, y = TotalDistance, fill = TotalDistance)) + ...

  
  # Uncomment to save
  # ggsave("colored_bar_chart.png", plot = p, width = 12, height = 6)
  # print("Chart saved to colored_bar_chart.png")

} else {
  print(paste("Error: File not found at", data_path))
}
