import { Question } from '../types/quiz';

export const questions5: Question[] = [
    {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

//Debugging

{
    id: 11,
    question: "What is the purpose of the 'Breakpoints' feature in UiPath Studio?",
    options: [
      "A. To terminate the workflow at a certain activity.",
      "B. To run the entire workflow in a slower execution mode.",
      "C. To pause the workflow at a specific activity during debugging.",
      "D. To remove all exceptions automatically during execution."
    ],
    correctAnswer: 2,
    explanation: "Breakpoints allow developers to pause the execution at a specific activity to inspect variable values and debug the workflow step-by-step."
  },
  {
    id: 12,
    question: "Which panel in UiPath Studio shows variable values during debugging?",
    options: [
      "A. Output Panel",
      "B. Locals Panel",
      "C. Breakpoints Panel",
      "D. Activities Panel"
    ],
    correctAnswer: 1,
    explanation: "The Locals panel displays current values of variables and arguments when debugging is paused."
  },
  {
    id: 13,
    question: "Which activity can help in logging values while debugging a workflow?",
    options: [
      "A. Throw",
      "B. Log Message",
      "C. Write Line",
      "D. Assign"
    ],
    correctAnswer: 2,
    explanation: "'Write Line' is commonly used to output messages to the Output panel for debugging purposes."
  },
  {
    id: 14,
    question: "What is the function of the 'Highlight Elements' option during debugging?",
    options: [
      "A. It highlights the current log messages.",
      "B. It outlines UI elements being interacted with during execution.",
      "C. It changes the color of variables in the Locals panel.",
      "D. It disables activities temporarily."
    ],
    correctAnswer: 1,
    explanation: "Highlight Elements shows which UI element is being targeted during UI automation, helpful for debugging selectors."
  },
  {
    id: 15,
    question: "Which debug action allows you to continue execution until the next breakpoint?",
    options: [
      "A. Step Over",
      "B. Step Into",
      "C. Continue",
      "D. Stop"
    ],
    correctAnswer: 2,
    explanation: "'Continue' resumes the execution of the workflow until it hits another breakpoint or completes."
  },
//Email Automation 

{
id: 16,
question: "Which activity is used to retrieve messages from Outlook in UiPath?",
options: [
  "A. Get POP3 Mail Message",
  "B. Get Outlook Mail Messages",
  "C. Get IMAP Mail Message",
  "D. Read Outlook Messages"
],
correctAnswer: 1,
explanation: "'Get Outlook Mail Messages' is used to retrieve emails from an Outlook account configured on the local machine."
},
{
id: 17,
question: "Which property should you use to filter only unread emails in 'Get Outlook Mail Messages'?",
options: [
  "A. FilterExpression",
  "B. OnlyUnreadMessages",
  "C. MailFilter",
  "D. SubjectFilter"
],
correctAnswer: 1,
explanation: "Setting 'OnlyUnreadMessages' to True ensures that only unread messages are retrieved from the mailbox."
},
{
id: 18,
question: "What must be configured to send emails using the SMTP protocol in UiPath?",
options: [
  "A. Only sender email",
  "B. SMTP Server and Port",
  "C. Just the message body",
  "D. PDF Reader"
],
correctAnswer: 1,
explanation: "SMTP Server and Port settings are required to establish a connection to the email server when using 'Send SMTP Mail Message'."
},
{
id: 19,
question: "Which activity allows you to send emails with attachments in UiPath?",
options: [
  "A. Send Outlook Mail Message",
  "B. Send Text Email",
  "C. Get Outlook Mail Messages",
  "D. Forward Mail"
],
correctAnswer: 0,
explanation: "'Send Outlook Mail Message' allows you to send emails and also attach files using the Attachments property."
},
{
id: 20,
question: "How can you read the subject of each mail message in a For Each loop?",
options: [
  "A. item.Subject",
  "B. email.Subject",
  "C. message.Subject",
  "D. row.Subject"
],
correctAnswer: 0,
explanation: "Inside a For Each loop iterating through a list of MailMessage objects, you can access the subject using 'item.Subject'."
},

//pdf automation 

{
id: 21,
question: "Which activity is used to extract all the text from a non-scanned PDF file in UiPath?",
options: [
  "A. Read PDF with OCR",
  "B. Read PDF Text",
  "C. Screen Scraping",
  "D. Read Image"
],
correctAnswer: 1,
explanation: "'Read PDF Text' is used to extract text from text-based (non-scanned) PDF files."
},
{
id: 22,
question: "What is required to use 'Read PDF with OCR' in UiPath?",
options: [
  "A. An internet connection",
  "B. An OCR engine (e.g., Tesseract)",
  "C. A Microsoft Office license",
  "D. A valid selector"
],
correctAnswer: 1,
explanation: "'Read PDF with OCR' requires an OCR engine to recognize text from scanned images in PDF files."
},
{
id: 23,
question: "Which package needs to be installed to access PDF activities in UiPath?",
options: [
  "A. UiPath.Mail.Activities",
  "B. UiPath.Excel.Activities",
  "C. UiPath.PDF.Activities",
  "D. UiPath.Word.Activities"
],
correctAnswer: 2,
explanation: "The 'UiPath.PDF.Activities' package provides all necessary activities to read, extract, and process PDF files."
},
{
id: 24,
question: "Which OCR engine is free and commonly used with PDF automation in UiPath?",
options: [
  "A. Abbyy OCR",
  "B. Microsoft OCR",
  "C. Tesseract OCR",
  "D. Google Cloud OCR"
],
correctAnswer: 2,
explanation: "Tesseract OCR is an open-source OCR engine that can be used freely in UiPath projects."
},
{
id: 25,
question: "When reading a scanned PDF, which activity provides the best accuracy?",
options: [
  "A. Read PDF Text",
  "B. Screen Scraping",
  "C. Read PDF with OCR + a strong OCR engine",
  "D. Data Scraping Wizard"
],
correctAnswer: 2,
explanation: "For scanned PDFs, using 'Read PDF with OCR' with a strong OCR engine (like Abbyy or Google OCR) provides better text recognition."
},
//excepton 

{
id: 26,
question: "Which activity is used to manage exceptions in UiPath workflows?",
options: [
  "A. Try Catch",
  "B. Retry Scope",
  "C. Throw",
  "D. Terminate Workflow"
],
correctAnswer: 0,
explanation: "'Try Catch' is the standard activity to handle errors by defining blocks for Try, Catch, and Finally logic."
},
{
id: 27,
question: "What does the 'Throw' activity do in UiPath?",
options: [
  "A. Terminates the process immediately",
  "B. Ignores the exception",
  "C. Explicitly raises an exception",
  "D. Catches system exceptions"
],
correctAnswer: 2,
explanation: "The 'Throw' activity is used to intentionally raise an exception to be handled or logged."
},
{
id: 28,
question: "Which exception is typically thrown when a selector is not found?",
options: [
  "A. TimeoutException",
  "B. UiPath.Core.SelectorNotFoundException",
  "C. ArgumentNullException",
  "D. SystemException"
],
correctAnswer: 1,
explanation: "'SelectorNotFoundException' occurs when UiPath cannot find the specified UI element using the given selector."
},
{
id: 29,
question: "What is the purpose of the 'Retry Scope' activity?",
options: [
  "A. To retry an entire project in Orchestrator",
  "B. To log exceptions multiple times",
  "C. To retry an action until a condition is met or timeout is reached",
  "D. To exit Try Catch blocks"
],
correctAnswer: 2,
explanation: "'Retry Scope' repeats a set of actions until a given condition is satisfied or the retry limit is reached."
},
{
id: 30,
question: "What happens if an exception occurs and there is no Try Catch block to handle it?",
options: [
  "A. The exception is ignored",
  "B. The workflow continues as normal",
  "C. The workflow stops and throws an error",
  "D. The exception is logged silently"
],
correctAnswer: 2,
explanation: "If an exception occurs and isn't caught, it causes the workflow to stop with an error message."
},

//i,tegration service

{
id: 31,
question: "Which activity is commonly used to call a REST API in UiPath?",
options: [
  "A. Invoke Workflow File",
  "B. HTTP Request",
  "C. Call API",
  "D. Open Browser"
],
correctAnswer: 1,
explanation: "'HTTP Request' is the standard activity used in UiPath to perform API calls, such as GET, POST, PUT, or DELETE."
},
{
id: 32,
question: "What must be provided to authenticate an API call using the 'HTTP Request' activity?",
options: [
  "A. Browser path",
  "B. Selector",
  "C. Headers with authentication token or credentials",
  "D. Retry Scope"
],
correctAnswer: 2,
explanation: "Headers must include authentication details like bearer tokens or API keys to ensure the request is accepted by the service."
},
{
id: 33,
question: "Which property of the 'HTTP Request' activity contains the API response data?",
options: [
  "A. Endpoint",
  "B. ResponseString",
  "C. Headers",
  "D. ResultCode"
],
correctAnswer: 1,
explanation: "The 'ResponseString' property captures the content returned by the API, such as a JSON or plain text response."
},
{
id: 34,
question: "To parse JSON from an API response in UiPath, which activity should be used?",
options: [
  "A. Deserialize XML",
  "B. Deserialize JSON",
  "C. Convert to DataTable",
  "D. Get Text"
],
correctAnswer: 1,
explanation: "'Deserialize JSON' is used to convert JSON strings into a JObject so you can extract structured data from API responses."
},
{
id: 35,
question: "What UiPath package must be installed to access the 'HTTP Request' activity?",
options: [
  "A. UiPath.Excel.Activities",
  "B. UiPath.Mail.Activities",
  "C. UiPath.Web.Activities",
  "D. UiPath.PDF.Activities"
],
correctAnswer: 2,
explanation: "The 'UiPath.Web.Activities' package contains activities for making HTTP requests, downloading files, and working with web APIs."
},
//methodologie implementation 

{
id: 36,
question: "Which phase in the RPA lifecycle involves identifying and analyzing processes suitable for automation?",
options: [
  "A. Deployment",
  "B. Monitoring",
  "C. Process Assessment",
  "D. Development"
],
correctAnswer: 2,
explanation: "Process Assessment is the phase where business processes are evaluated for automation feasibility and ROI."
},
{
id: 37,
question: "What is the main objective of the 'Design' phase in an RPA project?",
options: [
  "A. Deploy robots to production",
  "B. Monitor automation performance",
  "C. Create process documentation and technical workflows",
  "D. Train business users"
],
correctAnswer: 2,
explanation: "During the Design phase, developers prepare the PDD (Process Design Document) and define how the process will be automated."
},
{
id: 38,
question: "Which document describes the detailed steps of a business process for automation?",
options: [
  "A. Solution Design Document (SDD)",
  "B. Technical Specification",
  "C. Business Requirements Document (BRD)",
  "D. Process Design Document (PDD)"
],
correctAnswer: 3,
explanation: "The PDD (Process Design Document) outlines the business process steps and rules required for automation."
},
{
id: 39,
question: "What is the role of the Solution Architect in an RPA project?",
options: [
  "A. Execute the automation process daily",
  "B. Identify bugs in the automation",
  "C. Define the overall architecture and integration of the RPA solution",
  "D. Schedule robots in Orchestrator"
],
correctAnswer: 2,
explanation: "The Solution Architect is responsible for defining how the automation fits into the technical ecosystem and ensures scalability."
},
{
id: 40,
question: "Which best practice should be followed during the development phase of an RPA project?",
options: [
  "A. Avoid logging for performance reasons",
  "B. Use hardcoded values for stability",
  "C. Build reusable components and follow naming conventions",
  "D. Delay testing until deployment"
],
correctAnswer: 2,
explanation: "Best practices include writing reusable, maintainable workflows with proper naming, exception handling, and minimal hardcoding."
},
//loggging
{
id: 41,
question: "Which activity in UiPath is used to write custom log messages?",
options: [
  "A. Write Line",
  "B. Log Message",
  "C. Message Box",
  "D. Write Cell"
],
correctAnswer: 1,
explanation: "'Log Message' is used to write custom logs to the Output panel and/or Orchestrator logs, depending on the robot configuration."
},
{
id: 42,
question: "Which logging levels are available in the 'Log Message' activity?",
options: [
  "A. Info, Warning, Error, Fatal",
  "B. Low, Medium, High",
  "C. Critical, Major, Minor",
  "D. Debug, Test, Production"
],
correctAnswer: 0,
explanation: "UiPath supports different log levels: Trace, Debug, Info, Warn, Error, and Fatal, used to categorize messages."
},
{
id: 43,
question: "Where can you view logs generated by an unattended robot running in Orchestrator?",
options: [
  "A. Output panel in Studio",
  "B. Logs folder on desktop",
  "C. Orchestrator → Logs tab",
  "D. Command Prompt"
],
correctAnswer: 2,
explanation: "Orchestrator captures logs from robots, which can be accessed in the Logs tab under each Job or Robot."
},
{
id: 44,
question: "What happens when you set the logging level to 'Error' in UiPath Assistant?",
options: [
  "A. Only error logs and higher (fatal) are recorded",
  "B. All logs are captured",
  "C. Info and warning messages are recorded",
  "D. Debug logs are displayed"
],
correctAnswer: 0,
explanation: "Setting logging to 'Error' means only messages marked as 'Error' or 'Fatal' will be captured and stored."
},
{
id: 45,
question: "Which log level is most appropriate for tracking the execution flow of a process?",
options: [
  "A. Error",
  "B. Warning",
  "C. Info",
  "D. Fatal"
],
correctAnswer: 2,
explanation: "'Info' logs are typically used to record key steps and flow points in an automation process."
},

//Version control

{
id: 46,
question: "Which version control system is directly supported in UiPath Studio for collaboration?",
options: [
  "A. SVN",
  "B. Git",
  "C. TFS",
  "D. All of the above"
],
correctAnswer: 3,
explanation: "UiPath Studio supports integration with Git, TFS (Azure DevOps), and SVN for version control and collaboration."
},
{
id: 47,
question: "What is the purpose of the 'Commit' action in version control?",
options: [
  "A. To delete changes from the local project",
  "B. To upload code directly to production",
  "C. To save changes to the local repository",
  "D. To execute the automation workflow"
],
correctAnswer: 2,
explanation: "Committing means saving your changes to the local repository before pushing them to the remote server."
},
{
id: 48,
question: "What action must be taken to get the latest changes from the remote repository in Git?",
options: [
  "A. Pull",
  "B. Push",
  "C. Commit",
  "D. Clone"
],
correctAnswer: 0,
explanation: "'Pull' fetches and merges changes from the remote repository into your local project."
},
{
id: 49,
question: "Which tab in UiPath Studio allows you to connect your project to Git?",
options: [
  "A. Execute",
  "B. Manage Packages",
  "C. Home → Team",
  "D. Tools"
],
correctAnswer: 2,
explanation: "Under the 'Home' tab, the 'Team' section allows you to configure Git, TFS, or SVN integration for the current project."
},
{
id: 50,
question: "Why is it recommended to use version control systems in RPA projects?",
options: [
  "A. To speed up execution",
  "B. To allow real-time collaboration and track changes",
  "C. To reduce memory usage",
  "D. To eliminate the need for Orchestrator"
],
correctAnswer: 1,
explanation: "Version control enables collaborative development, change tracking, and rollback to previous versions in case of issues."
}

]