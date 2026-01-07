# Visualize Trailing 365-day Distance using ggplot2

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/trailing_365_distance.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Ensure Date parsing (readr usually handles YYYY-MM-DD well)
  # But good to be explicit if needed: df$Date <- as.Date(df$Date)
  
  # Plot
  # TODO: Create a line chart using ggplot2
  # Use geom_line()
  # Consider formatting the x axis for dates using scale_x_date
  
  # p <- ggplot(df, aes(x = Date, y = TotalDistance)) + ...
  
  
  # Uncomment to save
  # ggsave("trailing_distance_chart.png", plot = p, width = 12, height = 6)
  # print("Chart saved to trailing_distance_chart.png")

} else {
  print(paste("Error: File not found at", data_path))
}
