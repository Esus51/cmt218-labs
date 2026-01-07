import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import os

def visualize():
    data_path = '../../data/trailing_365_distance.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load data and convert Date column to datetime objects
    # df = ...
    # df['Date'] = ...
    
    # 1. Plot
    plt.figure(figsize=(12, 6))
    
    # TODO: Plot the line chart
    # plt.plot(...)
    
    # 2. Formatting
    # TODO: Add title and labels
    # plt.title(...)
    # plt.xlabel(...)
    # plt.ylabel(...)
    plt.grid(True, linestyle='--', alpha=0.5)
    
    # 3. Date Axis Formatting
    # TODO: Format the x-axis to show Year-Month and use YearLocator
    # plt.gca().xaxis.set_major_formatter(...)
    # plt.gca().xaxis.set_major_locator(...)
    plt.xticks(rotation=45)
    
    plt.legend()
    plt.tight_layout()
    
    # TODO: Save the chart
    # plt.savefig(...)
    
    print("Chart saved to trailing_distance_chart.png")
    plt.show()

if __name__ == "__main__":
    visualize()
