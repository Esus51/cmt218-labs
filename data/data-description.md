# Runs Data Description

This document describes the dataset `runs_only_redacted.csv` found in the `data` folder. The file contains running activity data from Strava, spanning from 2011 to 2025.

## Dataset Summary

- **Total Activities:** 1,090
- **Time Period:** 2011-01-05 to 2025-07-21
- **Activity Type:** All activities are classified as 'Run'.
- **File Format:** CSV (Comma Separated Values)

## Data Schema

The dataset contains 26 columns. Below is a description of each field:

| Column Name | Data Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| `achievement_count` | Integer | Number of achievements (e.g., PRs, segments) earned. | |
| `average_cadence` | Float | Average cadence (steps per minute). | Contains missing values (approx. 60%). |
| `average_heartrate` | Float | Average heart rate (bpm). | Contains missing values. |
| `average_speed` | Float | Average speed in meters per second. | |
| `average_temp` | Integer | Average temperature during the run (Celsius). | Contains missing values. |
| `average_watts` | Float | Average power output in watts. | Contains missing values. Likely estimtated for runs. |
| `commute` | Boolean | Whether the run was a commute. | True (57) vs False (1033). |
| `distance` | Float | Total distance covered in meters. | |
| `elapsed_time` | Integer | Total elapsed time in seconds. | |
| `elev_high` | Float | Highest elevation point in meters. | |
| `elev_low` | Float | Lowest elevation point in meters. | |
| `end_latlng` | String | Lat/Lng coordinates of the end point. | Format: `[lat, lng]` |
| `has_heartrate` | Boolean | Whether heart rate data is available. | |
| `kilojoules` | Float | Energy output in Kilojoules. | Contains missing values. |
| `kudos_count` | Integer | Number of kudos receiving on Strava. | |
| `map` | String | Dictionary containing map overlay data. | Includes `id`, `summary_polyline` (Google encoded polyline), and `resource_state`. |
| `max_heartrate` | Integer | Maximum heart rate recorded. | Contains missing values. |
| `max_speed` | Float | Maximum speed in meters per second. | |
| `max_watts` | Integer | Maximum power output in watts. | Contains missing values. |
| `moving_time` | Integer | Moving time in seconds. | Often less than `elapsed_time`. |
| `sport_type` | String | Type of activity. | All values are 'Run'. |
| `start_date` | String | ISO 8601 timestamp of start time. | UTC, e.g., `2025-07-21T17:12:06Z`. |
| `start_latlng` | String | Lat/Lng coordinates of the start point. | Format: `[lat, lng]` |
| `suffer_score` | Integer | Strava 'Suffer Score' (intensity metric). | Contains missing values. |
| `total_elevation_gain`| Float | Total elevation gained in meters. | |
| `utc_offset` | Integer | Offset from UTC in seconds. | |

## Key Observations

- **Polyline Data:** The `map` column contains detailed path information encoded as a Google Polyline. This can be used for mapping the route.
- **Missing Data:** Physiological metrics like Heart Rate, Watts, and Temperature are not available for every run (likely dependent on device used).
- **Location:** Start and End coordinates are provided as JSON-like lists stringified.
