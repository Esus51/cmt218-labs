import json
import matplotlib.pyplot as plt
import os

def visualize():
    data_path = '../../data/runs.geojson'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load Data
    # with open(data_path, 'r') as f:
    #     data = ...
    
    plt.figure(figsize=(10, 10))
    
    # Iterate through features and plot LineStrings
    # for feature in data['features']:
        # geom = feature['geometry']
        # if geom['type'] == 'LineString':
            # coords = geom['coordinates']
            
            # TODO: Convert GeoJSON [lon, lat] for matplotlib
            # lons = ...
            # lats = ...
            
            # TODO: Plot the path
            # plt.plot(...)
            
    # TODO: Add title and adjust axis
    # plt.title(...)
    # plt.axis('equal') # Standard for maps
    # plt.axis('off')   # Clean look
    
    plt.tight_layout()
    # TODO: Save
    # plt.savefig(...)
    
    print("Map saved to map.png")
    plt.show()

if __name__ == "__main__":
    visualize()
