var procedures = {
    "Introduction": [
        {
            "Being Organized":
            "Managing activities and accomplishing them requires oraginizing. Having able to manage activities and accomplish them in a well structured manner will increase productivity."
        },

        {
            "Tracking":
            "Productivity will increase and priorities would be well defined. Employees will be able to keep track the progress and goals. A well arranged tasks and activities will alliviate the complexity of the work."
        },
    ],

    "Objective": [
        {
            "The document":
            "The purpose of this section is to assist a Quality Assurance officer in creating a Sprint Score. This will help on being familliarized to the definition, function and procedure in creating QA Sprint Score"
        },

        {
            "Beneficiaries":
            "This wiki website would be helpful to those who are aspiring to work in the field of Quality Assurance. This also give students, beginners, or even professionals a place to reference the procedures."
        }

    ],


    "Sprint Scores": [
        {
            "What is QA Print Scores":
            "The scores of the employees are averaged  at the end of each sprint. It becomes the sprint score. One of the metrics used to track the efficiency is to track the performance of QA activities and tasks. Designing the QA process is vital to the project's success  "
        },

        {
            "Goals":
            "Satisfaction of the objectives and accomplishment of task."
        },

        {
            "Role in testing":
            "QA Sprint Score provided a way to evaluate the overall performance of the team. The progress, efficiency, and effectiveness are guided by the QA Sprint Score thus enforcing employees to have the desired result."
        },


    ],

    "Creating Sprint Scores":
    [
        {
            "Creating Task Card":
            `
            The first step to creating a QA sprint score is to create a task card by going through 
            the sprints tab under boards and adding a new work item. 
            
            The following are necessary to be filled or entered for this specific part:
                a.	Title - The title of the task.
                b.	Assignment - To whom the task is assigned.
                c.	State - Defines how the work item progresses from its creation to closure.
            
                The following are the states used on a task card:
                    ●	New - The task is new and yet to be validated.
                    ●	Active - The task is under development.
                    ●	Closed - The task has been done.
                d.	Area - The name of the project.
                e.	Iteration - The sprint number.
                f.	Effort hours - The generic numeric field the team gets to set 
                    regarding the amount of work required to complete a task.
                    ●	i. Original Estimate
                    ●	ii. Completed
            `
        },

        {
            "Query":
            `
            After the sprint has ended, the next step is to query. Access the Queries tab under boards and go through the editor tab.
            a.	Include the following in the query:
                ●	Field: Work item type
            Operator: In
                ●	Field: State
            Operator: In
                ●	Field: Assigned To
            Operator: =
                ●	Field: Created by
            Operator: =

            b.	Export to CSV - Click the meatballs menu “•••” beside save items, and export the results to CSV.       `
        },

        {
            "Import the exported CSV file to Blank Spreadsheet ":

           `After exporting the query results to CSV, the next step is to import the exported CSV file to the spreadsheet. It can be done by clicking File > Import > Upload > Select a file from your device. After successfully importing and opening the imported file, the following steps are the next things to do:
                a.	Add a column for the calculated total hours of rejected
                b.	Add a column for the calculated total hours of completed`
        },

        {
            "Create Pivot table":

            `\
           Once the spreadsheet has been created, inserting a pivot table is the next step. The following information is how to insert the pivot table.
            a.	Click Insert Pivot table. Under Insert to, choose where to add your pivot table. Click Create.
            b.	Add data by row or column by clicking Add and select the data to use.
            c.	Next, add data by value by clicking Add next to Values and choosing an option:
                    i. Select a column to use.
                    ii. Click Calculated Field, enter a formula, and under Summarize by, select Custom. The formula is provided below for reference:
                    =(sum('Completed Work') - sum('Total hours of Rejected'))/sum('Completed Work')
           `
        },



    ]




};