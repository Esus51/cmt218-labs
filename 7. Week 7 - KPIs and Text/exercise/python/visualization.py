import pandas as pd
import matplotlib.pyplot as plt
import os

def visualize():
    data_path = '../../data/kpi_stats.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load data
    # df = ...
    
    # Get the single row of KPIs
    # kpis = df.iloc[0]
    
    # Plot "Infographic"
    fig, ax = plt.subplots(figsize=(12, 4))
    ax.axis('off')
    
    # Define Metrics to show
    metrics = [
        # TODO: Add your metrics here as tuples (Label, Value)
        # ('Total Runs', ...),
        # ...
    ]
    
    # Position them
    for i, (label, value) in enumerate(metrics):
        x = (i + 0.5) / len(metrics)
        # TODO: Add text to the plot using ax.text()
        # ax.text(...) # For value
        # ax.text(...) # For label
        pass # Remove this pass when you add code
        
    plt.title('Quick Global Stats', fontsize=18)
    plt.tight_layout()
    # TODO: Save
    # plt.savefig(...)
    
    print("KPI Infographic saved to kpi_dashboard.png")
    plt.show()

if __name__ == "__main__":
    visualize()
