# IPL Data Analysis & Django-React Web Interface

This project combines **IPL cricket data analysis** with a full-stack **Django + React web interface** for managing and visualizing cricket statistics.

---

##  Project Structure
at_task1-main/
│
├── dataset1/ # IPL dataset files (CSV format)
│ ├── Match.csv
│ ├── Player.csv
│ ├── Player_Match.csv
│ ├── Season.csv
│ ├── Team.csv
│ └── matches.csv
│
├── djp1/ # Django + React project folder
│ ├── djp1/ # Django backend app
│ ├── manage.py # Django entry script
│ └── reactinterface/ # React frontend app
│
├── combined_ipl_data.csv # Combined IPL dataset (flattened version)
│
├── lam.ipynb # Data exploration notebook (advanced queries)
├── test1.ipynb # Preliminary data loading and stats
├── test2.ipynb # Visual exploration
└── test3.ipynb # Data merging and additional insights

## Project Objectives

- Load, clean, and analyze **IPL cricket match data**
- Visualize trends, player stats, and team performance
- Develop a basic **Django-React web interface** for interacting with the data

---

## Data Sources

The dataset includes:
- Match-level data (`Match.csv`)
- Player details (`Player.csv`)
- Match-wise player performance (`Player_Match.csv`)
- Season and team metadata

A merged file `combined_ipl_data.csv` is also available for faster access.

---

##  Notebooks Overview

| Notebook      | Purpose                                                |
|---------------|--------------------------------------------------------|
| `lam.ipynb`   | Advanced exploration, including relational joins       |
| `test1.ipynb` | Initial data loading, column inspection, null values   |
| `test2.ipynb` | Visualization of runs, wins, and matches               |
| `test3.ipynb` | Merging and flattening datasets into one CSV           |

---

## Web Application (Django + React)

- Located in the `djp1/` directory
- Backend: Django REST API for data access
- Frontend: React-based interface under `reactinterface/`

To run it:
```bash
cd djp1
python manage.py runserver
