# Visualize Distance vs Pace using ggplot2

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/distance_vs_pace.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Plot
  # TODO: Create a scatter plot using ggplot2
  # Use geom_point() to visualize distance vs pace
  # Add color based on the pace
  
  # p <- ggplot(df, aes(x = Distance_km, y = AveragePace_min_km, ...)) +
  
  
  # Uncomment to save
  # ggsave("distance_vs_pace_chart.png", plot = p, width = 10, height = 6)
  # print("Chart saved to distance_vs_pace_chart.png")

} else {
  print(paste("Error: File not found at", data_path))
}
