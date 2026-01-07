import pandas as pd
import matplotlib.pyplot as plt
import os

def visualize():
    data_path = '../../data/time_of_day_counts.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load data
    # df = ...
    
    # Plot
    plt.figure(figsize=(8, 8))
    
    # Colors (Purple Theme)
    colors = ['#D1C4E9', '#9575CD', '#673AB7', '#311B92']
    
    # TODO: Plot the pie chart
    # Hint: Use plt.pie(..., labels=..., autopct=..., colors=...)
    # plt.pie(...)
    
    # TODO: Add title
    # plt.title(...)
    
    plt.tight_layout()
    # TODO: Save the chart
    # plt.savefig(...)
    
    print("Chart saved to time_of_day_pie.png")
    plt.show()

if __name__ == "__main__":
    visualize()
