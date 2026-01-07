import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import matplotlib.colors as mcolors
import numpy as np
import os

def visualize():
    data_path = '../../data/distance_per_month.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load data
    # df = ...
    
    # Setup Colors
    # TODO: Normalize distance values
    # norm = mcolors.Normalize(...)
    
    # TODO: Choose a colormap
    # cmap = ...
    
    # TODO: Create colors for each bar
    # colors = ...
    
    plt.figure(figsize=(12, 6))
    
    # TODO: Create bar chart using your custom colors
    # bars = plt.bar(..., color=colors)
    
    # TODO: Add title and labels
    # plt.title(...)
    # plt.xlabel(...)
    # plt.ylabel(...)
    plt.xticks(rotation=45)
    
    # TODO: Add a Colorbar
    # sm = cm.ScalarMappable(...)
    # sm.set_array([])
    # plt.colorbar(...)
    
    plt.tight_layout()
    # TODO: Save
    # plt.savefig(...)
    
    print("Chart saved to colored_bar_chart.png")
    plt.show()

if __name__ == "__main__":
    visualize()
