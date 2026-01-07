# Visualize GeoJSON Maps using ggplot2 and sf

if (!require(ggplot2)) install.packages("ggplot2")
if (!require(sf)) install.packages("sf") # For GeoJSON handling
library(ggplot2)
library(sf)

# We need to make sure the path points to our data file
data_path <- "../../data/runs.geojson"

if (file.exists(data_path)) {
  # Load GeoJSON
  runs_sf <- st_read(data_path, quiet = TRUE)
  
  # Plot
  # TODO: Create the map using ggplot2 and sf
  # Use geom_sf() which handles coordinate projection automatically
  
  # p <- ggplot(runs_sf) +
  #   geom_sf(...)
  
  
  # Uncomment to save
  # ggsave("map.png", plot = p, width = 10, height = 10)
  # print("Map saved to map.png")

} else {
  print(paste("Error: File not found at", data_path))
}
