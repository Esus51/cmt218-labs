import pandas as pd
import matplotlib.pyplot as plt
import os

def visualize():
    # Load data
    data_path = '../../data/distance_per_month.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load the dataset using pandas
    # df = ...
    
    # 1. Plot
    plt.figure(figsize=(10, 6))
    # TODO: Create a bar chart using plt.bar()
    # plt.bar(...)
    
    # 2. Labels
    # TODO: Add title, x-label, and y-label
    # plt.title(...)
    # plt.xlabel(...)
    # plt.ylabel(...)
    
    plt.xticks(rotation=45)
    plt.tight_layout()
    
    # 3. Save
    # TODO: Save the figure to a file
    # plt.savefig(...)
    
    print("Chart saved to monthly_distance_chart.png")
    plt.show()

if __name__ == "__main__":
    visualize()
