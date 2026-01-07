# Tutorial Structure

This document describes the structure of each individual tutorial that the students will complete as part of the data visualisation class.

Each week's tutorial is contained in its own `Week X` folder, where `X` is the number of the exercise. Typically, a tutorial consists of 2 steps:

1. Data extraction - during which the raw data is extracted, cleaned and manipulated to form the required input for that weeks visualisation
2. Data visualisation - during which the extracted data from the first step is visualised.

Each tutorial is written to allow completion in a range of languages or tools. For programming languages, we supply a skeleton starting piece of code alongside a markdown file containing the tutorial instructions. For tools that do not involve programming we supply the markdown file containing the tutorial instructions.

For the first step of each tutorial, data extraction, we supply instructions, and skeleton code for programming examples, that walk the students step by step through completing the data extraction, cleaning, and filtering using R, Python, an Excel spreadsheet, or Google Sheets. 

For the visualisation step of each tutorial we supply instructions (and skeleton code for programming language examples) that walk the students step by step through completing the data visualisation task using:

- Programming language solutions:
    - interactive JavaScript, using the D3 library, HTML and CSS
    - static Python, using matplotlib or seaborn
    - interactive Python, using Dash or Plotly
    - static R, using ggplot
    - interactive R, using XXXXXXX

- Tool solutions:
    - Tableau
    - PowerBI
    - Flourish 

Each tutorial folder contains a `data` folder. This `data` folder contains:

- `runs_only_redacted.csv` a copy of the source file from the root `data` folder. 
- `data_description.md` a description of the cleaned and reformatted data that is used for that weeks tutorial. This is created by taking the description of the data from this weeks exercise in `exercises.md` and expanding it to be clear to students what data we have extracted and why. This folder also contains the instructions and skeleton code for performing the data extraction in the different tools/languages.

Each tutorial folder contains a `solution` folder. This `solution` folder contains:

- `solutions` a folder for the completed solutions for the data extraction step. The `solutions` folder contains further folders for each programming language or tool used to complete the exercise, so `javascript`, `python`, `R`
- `JS` a folder that contains the completed solutions for the data visualisation step using javascript
- `R` a folder that contains the completed solutions for the data visualisation step using R
- `Python` a folder that contains the completed solutions for the data visualisation step using Python (both static and interactive)

No complete solutions are provided for the Tableau, PowerBI or Flourish examples, only the instructions.

Each tutorial folder contains an `exercise` folder. This `exercise` folder contains the starting skeleton code templates for the programming exercises, along with markdown files for the instructions for each of the examples. 

So, a full tutorial structure might look like:

```
Week 1
    /data
        /runs_only_redacted.csv
        /data_description.md
        /extract_data.py
        /extract_data.R
        /Week1-data-extraction-python.md
        /Week1-data-extraction-R.md
        /Week1-data-extraction-Excel.md
        /Week1-data-extraction-Sheets.md
    /solutions
        /javascript
            /index.html
            /script.js
            /style.css
        /python
            /static.py
            /interactive.py
        /R
            /static.R
            /interactive.R
    /exercise
        /javascript
            /index.html
            /script.js
            /style.css        
            /Week1-tutorial-javascript.md       
        /python
            /static.py
            /interactive.py
            /Week1-tutorial-python-static.md
            /Week1-tutorial-python-interactive.md
        /R
            /static.R
            /interactive.R
            /Week1-tutorial-R-static.md
            /Week1-tutorial-R-interactive.md
        /Tableau
            /Week1-tutorial-tableau.md
        /PowerBI
            /Week1-tutorial-powerbi.md
        /Flourish
            /Week1-tutorial-flourish.md

```

