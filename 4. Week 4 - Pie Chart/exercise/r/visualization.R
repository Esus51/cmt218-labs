# Visualize Time of Day Runs using ggplot2 (Pie Chart)

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/time_of_day_counts.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Calculate percentages for labels if needed
  # df$percent <- df$Count / sum(df$Count) * 100
  # df$label <- paste0(df$Category, "\n", round(df$percent, 1), "%")
  
  # Plot
  # TODO: Create the pie chart using ggplot2
  # Note: A pie chart in ggplot2 is typically a bar chart with coord_polar
  
  # p <- ggplot(df, aes(x = "", y = Count, fill = Category)) +
  #   geom_bar(stat = "identity", width = 1) + ...
    
  
  # Uncomment to save
  # ggsave("time_of_day_pie.png", plot = p, width = 8, height = 8)
  # print("Chart saved to time_of_day_pie.png")

} else {
  print(paste("Error: File not found at", data_path))
}
