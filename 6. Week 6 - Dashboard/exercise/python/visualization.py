import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

def visualize():
    # Setup Figure
    # TODO: Create a figure with a larger size
    # fig = plt.figure(...)
    
    # Grid Layout: 2x2
    # TODO: Create a GridSpec (2x2)
    # gs = ...
    
    # --- Chart 1: Bar Chart (Distance per Month) ---
    # TODO: Add subplot for Chart 1
    # ax1 = fig.add_subplot(gs[0, 0])
    
    # TODO: Load and plot data for Chart 1
    # df1 = pd.read_csv('../../data/distance_per_month.csv')
    # ax1.bar(...)
    # ax1.set_title(...)
    
    # --- Chart 2: Scatter Plot (Distance vs Pace) ---
    # TODO: Add subplot for Chart 2 and plot data
    # ax2 = fig.add_subplot(gs[0, 1])
    # ...
    
    # --- Chart 3: Line Chart (Trailing 365) ---
    # TODO: Add subplot for Chart 3 and plot data
    # ax3 = fig.add_subplot(gs[1, 0])
    # ...
    
    # --- Chart 4: Pie Chart (Time of Day) ---
    # TODO: Add subplot for Chart 4 and plot data
    # ax4 = fig.add_subplot(gs[1, 1])
    # ...
    
    # Final Layout
    # plt.tight_layout()
    # TODO: Add overall title
    # plt.suptitle(...)
    
    # TODO: Save dashboard
    # plt.savefig(...)
    
    print("Dashboard saved to dashboard.png")
    plt.show()

if __name__ == "__main__":
    visualize()
