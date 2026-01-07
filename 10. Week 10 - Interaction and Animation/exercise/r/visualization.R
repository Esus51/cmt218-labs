# Visualize Interactive Dashboard using ggplot2 and plotly

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(readr)) install.packages("readr")
if (!require(plotly)) install.packages("plotly")
library(ggplot2)
library(readr)
library(plotly)

data_path <- "../../data/linked_data.csv"

if (file.exists(data_path)) {
  df <- read_csv(data_path, show_col_types = FALSE)
  
  # 1. Create Base ggplot
  # Scatter Plot of Distance vs Pace with tooltip text
  # TODO: Create the base ggplot with a 'text' aesthetic for tooltips
  
  # p <- ggplot(df, aes(x = Distance_km, y = Pace_min_km, 
  #                     text = ...)) + 
  #   geom_point(...)
  
  
  # 2. Convert to Plotly for Interaction
  # TODO: Use ggplotly() to convert 'p' to an interactive plot
  
  # interactive_plot <- ggplotly(...)
  
  
  # 3. Save as HTML
  # if (!require(htmlwidgets)) install.packages("htmlwidgets")
  # library(htmlwidgets)
  
  # saveWidget(interactive_plot, "interactive_dashboard.html", selfcontained = TRUE)
  # print("Interactive Dashboard saved to interactive_dashboard.html")

} else {
  print(paste("Error: File not found at", data_path))
}
