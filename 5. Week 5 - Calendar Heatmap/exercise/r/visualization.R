# Visualize Weekly Distance Heatmap using ggplot2

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/weekly_distance_heatmap.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Plot
  # TODO: Create a heatmap using ggplot2
  # Use geom_tile() to visualize the data
  # x-axis: Week Number, y-axis: Year, fill: TotalDistance
  
  # p <- ggplot(df, aes(x = Week, y = Year, fill = TotalDistance)) + ...

  
  # Uncomment to save
  # ggsave("heatmap.png", plot = p, width = 12, height = 8)
  # print("Chart saved to heatmap.png")

} else {
  print(paste("Error: File not found at", data_path))
}
