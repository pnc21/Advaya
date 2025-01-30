# Python Data Processing Project

## Overview

This project provides functionality for interacting with Google BigQuery and handling Python package requirements. It includes tools for data loading, querying, and processing.

## Features

- Google BigQuery integration for data loading and querying
- Package requirement parsing and management
- Data frame operations

## Installation

1. Create a virtual environment:

```python
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install required packages:

```python
pip install pandas pandas-gbq google-auth-oauthlib google-cloud-bigquery-storage
```

## Usage

### Google BigQuery Operations

#### Loading Data from BigQuery

```python
import pandas as pd

# Example query
sql = "SELECT name FROM table_name WHERE state = 'TX' LIMIT 100"
df = pd.read_gbq(
    sql,
    project_id='your-project-id',
    dialect='standard'
)
```

#### Writing Data to BigQuery

```python
# Write DataFrame to BigQuery
df.to_gbq(
    destination_table='dataset.table_name',
    project_id='your-project-id',
    if_exists='fail'
)
```

### Authentication

The project supports multiple authentication methods:

- Local webserver authentication (default)
- Service account credentials
- Application Default Credentials

For BigQuery authentication, see the [pandas-gbq documentation](https://pandas-gbq.readthedocs.io/en/latest/howto/authentication.html).

## Configuration

### BigQuery Settings

- `dialect`: Supports both 'legacy' and 'standard' SQL syntax
- `location`: Specify the BigQuery dataset location
- `progress_bar`: Enable/disable progress tracking during operations

## Dependencies

- pandas
- pandas-gbq
- google-auth-oauthlib
- google-cloud-bigquery-storage (optional, for improved performance)
- fastavro (optional, for improved performance)

## Notes

- The `read_gbq` and `to_gbq` functions from pandas are deprecated. It's recommended to use `pandas_gbq.read_gbq` and `pandas_gbq.to_gbq` instead.
- For large datasets, enable the BigQuery Storage API for better performance.

