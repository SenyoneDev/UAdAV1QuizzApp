import { Question } from '../types/quiz';

export const questions4: Question[] = [
    {
        id: 1,
        question: "What is the purpose of the 'Retry Scope' activity in UiPath?",
        options: [
            "A. To retry the execution of the whole project in case of failure.",
            "B. To repeat a block of activities until a condition is met or a number of retries is exhausted.",
            "C. To automatically restart the robot service.",
            "D. To monitor queue items for retry after failure."
        ],
        correctAnswer: 1,
        explanation: "The 'Retry Scope' activity allows you to retry a set of actions until a success condition is met or the retry limit is reached, ideal for transient issues."
    },
    {
        id: 2,
        question: "Which activity can you use to extract structured data from a web page?",
        options: [
            "A. Get Text",
            "B. Data Scraping Wizard",
            "C. Get Attribute",
            "D. Image Exists"
        ],
        correctAnswer: 1,
        explanation: "The 'Data Scraping Wizard' helps extract structured data such as tables or repeated patterns from web pages using UI automation."
    },
    {
        id: 3,
        question: "How can you handle credentials securely in UiPath workflows?",
        options: [
            "A. Store them in plain text in variables.",
            "B. Hardcode them into the workflow with encryption.",
            "C. Use the 'Get Credential' activity with an Orchestrator credential asset.",
            "D. Use Excel files to store encrypted passwords."
        ],
        correctAnswer: 2,
        explanation: "The 'Get Credential' activity allows you to securely retrieve credentials stored in Orchestrator assets without exposing them in the workflow."
    },
    {
        id: 4,
        question: "Which activity is used to handle exceptions in UiPath?",
        options: [
            "A. Assign",
            "B. Try Catch",
            "C. Terminate Workflow",
            "D. If"
        ],
        correctAnswer: 1,
        explanation: "The 'Try Catch' activity lets you catch exceptions and define alternative flows, ensuring robust error handling."
    },
    {
        id: 5,
        question: "What is the default timeout for most UI activities in UiPath?",
        options: [
            "A. 5 seconds",
            "B. 15 seconds",
            "C. 30 seconds",
            "D. 60 seconds"
        ],
        correctAnswer: 2,
        explanation: "By default, most UI activities in UiPath wait up to 30 seconds for the target element to appear before throwing an error."
    },
    {
        id: 6,
        question: "What is the purpose of the 'Invoke Workflow File' activity?",
        options: [
            "A. To launch a new process in Orchestrator.",
            "B. To reuse workflows by calling them from another workflow.",
            "C. To monitor a workflow file for changes.",
            "D. To debug a workflow independently."
        ],
        correctAnswer: 1,
        explanation: "The 'Invoke Workflow File' activity enables modularization by allowing one workflow to call another, promoting code reuse."
    },
    {
        id: 7,
        question: "Which pane in UiPath Studio shows variables and their scopes?",
        options: [
            "A. Outline pane",
            "B. Properties pane",
            "C. Variables pane",
            "D. Project pane"
        ],
        correctAnswer: 2,
        explanation: "The Variables pane shows all variables defined in the current scope, including their name, type, and default values."
    },
    {
        id: 8,
        question: "Which type of variable would you use to store multiple key-value pairs in UiPath?",
        options: [
            "A. Array",
            "B. DataTable",
            "C. Dictionary",
            "D. List"
        ],
        correctAnswer: 2,
        explanation: "A Dictionary allows you to store data in key-value pairs, ideal for lookups and dynamic mappings in workflows."
    },
    {
        id: 9,
        question: "Which activity should be used to wait until a specific UI element appears on the screen?",
        options: [
            "A. Element Exists",
            "B. Find Element",
            "C. Wait Element Vanish",
            "D. Delay"
        ],
        correctAnswer: 1,
        explanation: "The 'Find Element' activity waits for a UI element to appear and throws an error if it doesn't, ideal for synchronization."
    },
    {
        id: 10,
        question: "What is the benefit of using arguments instead of variables in workflows?",
        options: [
            "A. Arguments are easier to define than variables.",
            "B. Arguments improve performance of workflows.",
            "C. Arguments allow data to be passed between workflows.",
            "D. Arguments are more secure than variables."
        ],
        correctAnswer: 2,
        explanation: "Arguments enable data to flow in and out of workflows, which is essential for modularization and reusability."
    },

    {
        id: 11,
        question: "Which activity is used to read the contents of a .csv file into a DataTable?",
        options: [
            "A. Read Text File",
            "B. Read Range",
            "C. Read CSV",
            "D. Read DataTable"
        ],
        correctAnswer: 2,
        explanation: "The 'Read CSV' activity reads the contents of a .csv file and converts it into a DataTable for further processing."
    },
    {
        id: 12,
        question: "What is the purpose of the 'Log Message' activity?",
        options: [
            "A. To write data to a text file.",
            "B. To log custom messages to the Output panel and/or Orchestrator logs.",
            "C. To send alerts via email.",
            "D. To store logs in a database."
        ],
        correctAnswer: 1,
        explanation: "The 'Log Message' activity is used for debugging or tracking workflow execution by writing messages to logs."
    },
    {
        id: 13,
        question: "Which data type is suitable for storing a table of values retrieved from an Excel sheet?",
        options: [
            "A. String",
            "B. Integer",
            "C. DataTable",
            "D. Dictionary"
        ],
        correctAnswer: 2,
        explanation: "DataTables are the appropriate data type to store tabular data such as those read from Excel files."
    },
    {
        id: 14,
        question: "How can you ensure that a UI element is interactable before performing an action on it?",
        options: [
            "A. Use 'Element Exists'",
            "B. Use 'Find Element'",
            "C. Use 'Check App State'",
            "D. Use 'Delay'"
        ],
        correctAnswer: 2,
        explanation: "The 'Check App State' activity allows you to verify if an element is available and interactable before continuing."
    },
    {
        id: 15,
        question: "Which activity would you use to convert a string '123' into an integer value?",
        options: [
            "A. CInt(\"123\")",
            "B. ToString(\"123\")",
            "C. Convert.ToString(\"123\")",
            "D. CDbl(\"123\")"
        ],
        correctAnswer: 0,
        explanation: "You can use the expression CInt(\"123\") in an Assign activity to convert a string to an Integer."
    },
    {
        id: 16,
        question: "Which activity allows iteration through rows in a DataTable?",
        options: [
            "A. For Each",
            "B. For Each Row",
            "C. While",
            "D. Do While"
        ],
        correctAnswer: 1,
        explanation: "The 'For Each Row' activity is designed to loop through all rows of a DataTable, allowing row-wise processing."
    },
    {
        id: 17,
        question: "What is the recommended way to stop the execution of a workflow in case of a critical error?",
        options: [
            "A. Use 'Terminate Workflow'",
            "B. Use 'Break'",
            "C. Use 'Log Message'",
            "D. Use 'Throw'"
        ],
        correctAnswer: 0,
        explanation: "The 'Terminate Workflow' activity immediately stops the workflow and optionally provides an error message."
    },
    {
        id: 18,
        question: "What is the default output format of the 'Serialize JSON' activity?",
        options: [
            "A. Byte array",
            "B. Dictionary",
            "C. JSON string",
            "D. XML"
        ],
        correctAnswer: 2,
        explanation: "'Serialize JSON' converts .NET objects into a JSON-formatted string suitable for storage or transmission."
    },
    {
        id: 19,
        question: "Which panel in UiPath Studio allows you to manage imported packages and libraries?",
        options: [
            "A. Project panel",
            "B. Activities panel",
            "C. Manage Packages panel",
            "D. Properties panel"
        ],
        correctAnswer: 2,
        explanation: "The 'Manage Packages' panel allows you to install, update, or remove dependencies and libraries used in your project."
    },
    {
        id: 20,
        question: "Which activity is used to write text to a .txt file in UiPath?",
        options: [
            "A. Write Cell",
            "B. Append Line",
            "C. Write Text File",
            "D. Output Text"
        ],
        correctAnswer: 2,
        explanation: "The 'Write Text File' activity writes a string to a text file, replacing existing content if the file already exists."
    },
  ]