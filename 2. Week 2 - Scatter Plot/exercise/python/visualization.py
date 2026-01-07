import pandas as pd
import matplotlib.pyplot as plt
import os

def visualize():
    data_path = '../../data/distance_vs_pace.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load the dataset using pandas
    # df = ...
    
    # Plot
    plt.figure(figsize=(10, 6))
    
    # TODO: Create a scatter plot with color mapping
    # Hint: Use plt.scatter(x, y, c=..., cmap=...)
    # sc = plt.scatter(...)
    
    # TODO: Add a colorbar
    # plt.colorbar(...)
    
    # TODO: Add title and labels
    # plt.title(...)
    # plt.xlabel(...)
    # plt.ylabel(...)
    
    plt.grid(True, linestyle='--', alpha=0.5)
    
    plt.tight_layout()
    # TODO: Save the chart
    # plt.savefig(...)
    
    print("Chart saved to distance_vs_pace_chart.png")
    plt.show()

if __name__ == "__main__":
    visualize()
