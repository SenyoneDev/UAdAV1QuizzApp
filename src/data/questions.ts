import { Question } from '../types/quiz';

export const questions1: Question[] = [
  {
    id: 1,
    question: "How can the value be configured for each of the three arguments (one 'In', one 'Out', and one 'In/Out') in the Arguments window of the Invoked Workflow?",
    options: [
      "A. In: Variable or Hard-coded value \n Out: Variable or Hard-coded value\n In/Out: Hard-coded value only", 
      "B. In: Variable or Hard-coded value\nOut: Variable only\nIn/Out: Variable only",
      "C. In: Variable or Hard-coded value\nOut: Hard-coded value only\nIn/Out: Variable only",
      "D. In: Variable only\nOut: Variable only\nIn/Out: Variable only"
    ],
    correctAnswer: 1,
    explanation: "In UiPath, 'In' arguments can take hard-coded values or variables, while 'Out' and 'In/Out' arguments must be bound to variables to reflect the changes back to the caller."
  },

  {
    id: 2,
    question: "What are the three source control plug ins found in the backstage view of UiPath Studio in Home - Tools - Plugins?",
    options: ["A. GIT, SVN, Mercurial.", "B. GIT, SVN, TFS.", "C. GIT, CVS, TFS", "D. GIT, CVS, Bitbucket."],
    correctAnswer: 1,
    explanation: "UiPath Studio natively supports integration with Git, SVN, and TFS (Team Foundation Server) from the Tools > Plugins section."
  },

  {
    id: 3,
    question: "A developer utilized the Add Data Row activity to insert a row into a data table called 'dt_Reports'. However, during runtime, UiPath Studio encounters an exception, 'Add Data Row: Object reference not set to an instance of an object.' because the data table has not been initialized. To rectify this issue, what should the developer include in an Assign before the Add Data Row activity?",
    options: [
      "A. Assign New System.Data.DataTable = dt_Reports.",
      "B. Assign dt_Reports = New System.Data.DataRow.",
      "C. Assign dt_Reports = New System.Data.DataTable.",
      "D. Assign dt_Reports = New List(Of DataRow)."
    ],
    correctAnswer: 2,
    explanation: "The error occurs because the DataTable object is null. It must be initialized with 'New System.Data.DataTable()' before using it in activities like Add Data Row."
  },

  {
    id: 4,
    question: "What is the best method for passing data across activities within workflows?",
    options: ["A. Arguments", "B. Namespaces", "C. Properties", "D. Variables"],
    correctAnswer: 3,
    explanation: "Variables are used for passing data between activities within the same workflow. Arguments are used when passing data between workflows."
  },

  {
    id: 5,
    question: "What is a correct description of a dictionary?",
    options: [
      "A. Dictionaries are collections of key, value pairs, in which the keys are unique.",
      "B. Dictionaries are collections of item, values, in which no constraints are present over the values of the items.",
      "C. Dictionaries are collections of unique values.",
      "D. Dictionaries are collections of item, values, in which the items and values are unique."
    ],
    correctAnswer: 0,
    explanation: "A dictionary stores data in key-value pairs, and the keys must be unique. Values can be duplicated."
  },

  {
    id: 6,
    question: "How can Folder roles be assigned in an Orchestrator instance where Activate Classic Folders is unchecked under Tenant > Settings > General?",
    options: [
      "A. From the Roles tab of the Tenant > Manage Access page.",
      "B. From the Tenant > Settings > General page.",
      "C. From the Assign roles tab of the Tenant > Manage Access page",
      "D. From the Folders page or from the folder's Settings page"
    ],
    correctAnswer: 3,
    explanation: "When modern folders are enabled (Classic Folders deactivated), folder roles are assigned from the Folder or its Settings page."
  },

  {
    id: 7,
    question: "Which of the following statements correctly describes the primary purpose of the Use Excel File activity?",
    options: [
      "A. To create a new Microsoft Excel file with a specified name and location.",
      "B. To convert an existing Microsoft Excel file to a different file format, such as CSV or PDF.",
      "C. To establish the scope for Excel automation and specify the target Excel file for subsequent activities.",
      "D. To establish a connection to a Microsoft Excel file and perform complex calculations and data manipulation directly using Studio."
    ],
    correctAnswer: 2,
    explanation: "'Use Excel File' sets a working context for interacting with an Excel file. It ensures efficient resource management and provides a scope for nested activities."
  },

  {
    id: 8,
    question: "Which is the valid syntax for checking if the StrVar variable of type String includes the word 'robot'?",
    options: [
      "A. StrVar. Equalsf('robot')",
      "B. 'robot'.Substring(StrVar)",
      "C. StrVar.Contains('robot')",
      "D. StrVar.Substring('robot')"
    ],
    correctAnswer: 2,
    explanation: "'String.Contains' is the correct method to check if a string contains a specific substring. Syntax: StrVar.Contains(\"robot\")"
  },

  {
    id: 9,
    question: "Which of the following statements is true about Global Variables?",
    options: [
      "A. Global Variables store data in a location which can be accessed by all parts of the automation project.",
      "B. Global Variables can be created from the Variables panel.",
      "C. Global Variables can be created from the Data Manager panel and from the Variables panel.",
      "D. Global Variables can only have two types: Text and Number."
    ],
    correctAnswer: 0,
    explanation: "Global variables are accessible from any part of the project and are typically created in the Data Manager panel."
  },

  {
    id: 10,
    question: "How can the value be configured for each of the three arguments (one 'In', one 'Out', and one 'In/Out') in the Arguments window of the Invoked Workflow?",
    options: [
      "A. In: Variable or Hard-coded value \n Out: Variable or Hard-coded value\n In/Out: Hard-coded value only", 
      "B. In: Variable or Hard-coded value\nOut: Variable only\nIn/Out: Variable only",
      "C. In: Variable or Hard-coded value\nOut: Hard-coded value only\nIn/Out: Variable only",
      "D. In: Variable only\nOut: Variable only\nIn/Out: Variable only"
    ],
    correctAnswer: 1,
    explanation: "Only 'In' arguments can accept hard-coded values. 'Out' and 'In/Out' arguments require variables to pass values back from the invoked workflow."
  },

  {
    id: 11,
    question: "What is the expected behavior when the execution of a process is started from UiPath Studio in Debug mode and the developer has enabled a breakpoint on a Type Into activity?",
    options: [
      "A. The execution will pause for 5 seconds when it encounters the breakpoint.",
      "B. The execution will not take the breakpoint into consideration when it encounters the Type activity.",
      "C. The execution will pause when it encounters the breakpoint until the user clicks the Continue button.",
      "D. The execution will throw an exception when it encounters the breakpoint."
    ],
    correctAnswer: 2,
    explanation: "When debugging with a breakpoint set, the process pauses at that point until the user manually resumes execution using the Continue button."
  },

  {
    id: 12,
    question: "Which property of the Check App State activity in UiPath is used to define the maximum wait time for the application state to change?",
    options: ["A. RetryInterval", "B. Delay", "C. Timeout", "D. WaitTime"],
    correctAnswer: 2,
    explanation: "The 'Timeout' property specifies the maximum time to wait for the target UI element or app state to be detected."
  },

  {
    id: 13,
    question: "What component of the UiPath Ecosystem allows a user to post questions or answers on RPA topics?",
    options: ["A. UiPath Marketplace", "B. UiPath Studio", "C. UiPath Community", "D. UiPath Forum"],
    correctAnswer: 3,
    explanation: "UiPath Forum is the official platform for users to post questions, share knowledge, and get help from the RPA community."
  },

  {
    id: 14,
    question: "What is true about the behavior of the Read Range Workbook activity?",
    options: [
      "A. It works with .xlm and .xlsx files, and Excel must be installed on the system.",
      "B. It works only with .xlsm files and Excel must be installed on the system.",
      "C. It works only with .xls files and Excel does not need to be installed on the system.",
      "D. It works with .xls and .xlsx files and Excel does not need to be installed on the system."
    ],
    correctAnswer: 3,
    explanation: "'Read Range Workbook' activity does not require Excel to be installed and supports .xls and .xlsx file formats."
  },

  {
    id: 15,
    question: "Which activity or activities should be used to add a suffix to all the file names from a specific folder, considering that the files are present on the local machine?",
    options: [
      "A. Rename All Files in Folder.",
      "B. For Each File in Folder and Rename Folder.",
      "C. For Each File in Folder and Rename File.",
      "Rename All Files."
    ],
    correctAnswer: 2,
    explanation: "'For Each File in Folder' allows iterating through files, and 'Rename File' lets you modify each filename individually by appending a suffix."
  },

  {
    id: 16,
    question: "Which of the following actions can be performed from the Tenant context in UiPath Orchestrator?",
    options: [
      "A. Manage Assets and Storage Buckets for a specific folder.",
      "B. Manage tenant-level entities, licenses, and settings.",
      "C. Assign Folder roles and Mixed roles from the Folders page or from the folder’s Settings page.",
      "D. Access Test Sets, Test Cases, and Test Executions tabs for specific folders."
    ],
    correctAnswer: 1,
    explanation: "The Tenant context in Orchestrator is used for managing global-level configurations like licenses, users, and general settings."
  },

  {
    id: 17,
    question: "Which activity in UiPath Studio's Properties panel does not require the user to input email credentials?",
    options: [
      "  A. Get IMAP Mail Messages",
      "B. Get Outlook Mail Messages",
      "C. Get Exchange Mail Messages",
      "D. Get POP3 Mail Messages"
    ],
    correctAnswer: 1,
    explanation: "The 'Get Outlook Mail Messages' activity uses the Outlook desktop client configuration and doesn't require explicit credentials if Outlook is already logged in."
  },

  {
    id: 18,
    question: "In a UiPath Studio project, what is the broadest scope a variable can have?",
    options: [
      "A. Within the activity in which it is defined.",
      "B. Within the surrounding 'Do' or \"Body\" sequence",
      "C. Global, available in the entire project.",
      "D. Outermost container in the current xaml project file."
    ],
    correctAnswer: 3,
    explanation: "In a XAML file, the outermost container (like a Flowchart or Sequence) defines the broadest scope for variables within that file."
  },

  {
    id: 19,
    question: "What happens when there is a breakpoint on an activity and the project is started in Run mode?",
    options: [
      "A. The project pauses for 5 seconds when it reaches the activity.",
      "B. The project pauses at the activity until the Continue button is clicked.",
      "C. The project is executed without pausing at the activity.",
      "D. The project throws an error when it reaches the activity."
    ],
    correctAnswer: 2,
    explanation: "Breakpoints are ignored when the workflow is run in normal Run mode; they only take effect in Debug mode."
  },

  {
    id: 20,
    question: "A developer is troubleshooting a workflow that enters a Suspended mode when encountering a breakpoint. To inspect the subsequent activities individually by pausing after each one, which operation must be employed from the Debug section of the UiPath Studio’s toolbar?",
    options: ["A. Slow Step", "B. Step Out", "C. Break", "D. Step Into"],
    correctAnswer: 0,
    explanation: "'Slow Step' allows the workflow to pause after each activity, making it easier to inspect the flow and variable values during debugging."
  }
];
