# Visualize KPIs using ggplot2

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
library(ggplot2)
library(readr)

# We need to make sure the path points to our data file
data_path <- "../../data/kpi_stats.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # Reshape for plotting
  # We want a dataframe like: Label, Value
  # TODO: Create a data frame 'kpis' with columns 'Label', 'Value', 'x', and 'y'
  # Label should be c("Total Runs", "Total Distance", "Longest Run", "Avg Pace")
  # Value should come from df columns (df$TotalRuns, df$TotalDistance, etc.)
  
  # kpis <- data.frame(
  #   Label = c("Total Runs", "Total Distance", "Longest Run", "Avg Pace"),
  #   Value = c(...),
  #   x = c(1, 2, 3, 4),
  #   y = 1
  # )
  
  
  # Plot
  # TODO: Create the KPI visualization
  # Use geom_text() to display the values and labels
  
  # p <- ggplot(kpis, aes(x = x, y = y)) + ... 
    
  
  # Uncomment to save
  # ggsave("kpi_dashboard.png", plot = p, width = 10, height = 3)
  # print("Infographic saved to kpi_dashboard.png")

} else {
  print(paste("Error: File not found at", data_path))
}
