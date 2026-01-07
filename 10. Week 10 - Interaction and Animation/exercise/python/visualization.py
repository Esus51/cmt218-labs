import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import os

def visualize():
    data_path = '../../data/linked_data.csv'
    
    if not os.path.exists(data_path):
        print(f"Data not found at {data_path}")
        return

    # TODO: Load Data
    # df = ...
    
    # Setup Figure with Subplots
    # TODO: Create subplots with 1 row and 2 columns
    # fig = make_subplots(...)
    
    # --- 1. Scatter Plot ---
    # TODO: Create a scatter plot trace
    # scatter = go.Scatter(...)
    # TODO: Add trace to figure
    # fig.add_trace(scatter, row=1, col=1)
    
    # --- 2. Bar Chart (Aggregated) ---
    # TODO: Aggregate data for bar chart
    # monthly = ...
    
    # TODO: Create a bar chart trace
    # bar = go.Bar(...)
    # TODO: Add trace to figure
    # fig.add_trace(bar, row=1, col=2)
    
    # Layout
    # TODO: Update layout with title and sizing
    # fig.update_layout(...)
    
    # Axis labels
    # TODO: Update axis labels
    # fig.update_xaxes(...)
    # fig.update_yaxes(...)
    
    # Save
    # TODO: Write to HTML
    # fig.write_html("interactive_dashboard.html")
    
    print("Interactive Dashboard saved to interactive_dashboard.html")

if __name__ == "__main__":
    visualize()
