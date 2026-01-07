import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import os

def visualize():
    data_path = '../../data/weekly_distance_heatmap.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load data
    # df = ...
    
    # TODO: Pivot the dataframe for the heatmap
    # matrix = df.pivot(...)
    
    plt.figure(figsize=(15, 8))
    
    # TODO: Create a heatmap using seaborn
    # sns.heatmap(...)
    
    # TODO: Add title
    # plt.title(...)
    
    plt.tight_layout()
    # TODO: Save the chart
    # plt.savefig(...)
    
    print("Chart saved to heatmap.png")
    plt.show()

if __name__ == "__main__":
    visualize()
