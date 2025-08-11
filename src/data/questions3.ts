import { Question } from '../types/quiz';

export const questions3: Question[] = [
    {
        id: 1,
        question: "Which of the following statements is correct about arguments?",
        options: [
            "A. Argument names are automatically updated in the activities inside the current workflow when the name of the argument is changed in the Data Manager",
            "B. Only String argument names are automatically updated in the activities inside the current workflow when the name of the argument is changed in the data manager.",
            "C. Argument names cannot be changed after an argument was created, if you need to rename an argument you should re-create the argument.",
            "D. Argument names are not automatically updated in the activities inside the current workflow, if you rename an argument you need to manually change the name inside the activities."
        ],
        correctAnswer: 3,
        explanation: "In UiPath, renaming an argument in the Data Manager does not automatically update its name in the activities. You must manually update it inside the workflow."
    },
    {
        id: 2,
        question: "Which of the following is a main feature of the Manage Packages feature in UiPath Studio?",
        options: [
            "A. Installing, uninstalling, and updating activity packages in a project.",
            "B. Managing package dependencies exclusively for attended automation projects.",
            "C. Automatically updating at packages in a project to their latest versions.",
            "D. Disabling previously installed packages without uninstalling them."
        ],
        correctAnswer: 0,
        explanation: "The 'Manage Packages' feature allows developers to install, uninstall, and update activity packages that are required for automation projects."
    },
    {
        id: 3,
        question: "Which of the following statements is true about Global Constants?",
        options: [
            "A. Global Constants store data in a location which can be accessed by all parts of the automation project",
            "B. Global Constants properties car be modified Curing the automation execution",
            "C. Global Constants can be created from the Data Manager panel and from the Variables panel",
            "D. Global Constants have a Scope property"
        ],
        correctAnswer: 0,
        explanation: "Global Constants in UiPath store values that remain unchanged and are accessible throughout the entire project."
    },
    {
        id: 4,
        question: "An attended automation user wants to run two background processes in UiPath Assistant: 'UpdateTimecards Process' and 'GetPTODays Process'. What is a characteristic of running these processes?",
        options: [ 
            "A. Update Timecards Process and GetPTODays Process can be run concurrently in the background.",
            "B. UpdateTimecards Process and GetPTODays Process can be run concurrently only if started from Orchestrator.",
            "C. An exception is thrown if the processes are executed concurrently.",
            "D. UpdateTimecards Process and GetPTODays Process can only be run sequentially."
        ],
        correctAnswer: 0,
        explanation: "UiPath Assistant supports running multiple background processes concurrently as long as they do not require the same UI resources."
    },
    {
        id: 5,
        question: "In a project involving an Orchestrator queue, a developer needs to extract the two values from the ItemInformation fields of each QueueItem object. \nHow can those fields be extracted from the variable?",
        options: [ 
            "A. Use a Get Transaction Item activity for each ItemInformation field.",
            "B. Use a Get Asset activity for each ItemInformation field.",
            "C. Use the SpecificContent property and supply the name of the field as the Key.",
            "D. Assign output variables for each field in the Add Queue Item activity."
                ],
        correctAnswer: 2,
        explanation: "The 'SpecificContent' property of a QueueItem allows direct access to custom data fields using their key names."
    },
    {
        id: 6,
        question: "A developer is designing a project where emails containing different employee IDs are sent to the process owner for each completed transaction. The process owner changes only once per year. \nWhich values should be designated as Orchestrator Queues versus Assets?",
        options: [ 
            "A. Process Owner Email as a field in the Queue Item and Employee ID as an Orchestrator Asset.",
            "B. Process Owner Email as an Orchestrator Asset and Employee ID as a field in the Queue Item.",
            "C. Process Owner Email as an Orchestrator Asset and Employee ID as an Orchestrator Asset.",
           "D. Process Owner Email as a field in the Queue Item and Employee ID as a field in the Queue Item."
        ],
        correctAnswer: 1,
        explanation: "Static data like Process Owner Email is best stored as an Orchestrator Asset, while dynamic data like Employee ID belongs in the Queue Item."
    },
    {
        id: 7,
        question: "What is the main purpose of using the App/Web Recorder during automation development?",
        options: [ 
            "A. To test and optimize the execution speed of automation workflows across various environments.",
            "B. To automatically generate workflow elements for UI interactions by recording actions in an application or web page.",
            "C. To create custom reusable components within UiPath Studio for future use in different projects.",
            "D. To design and debug complex workflows using dynamic components."
        ],
        correctAnswer: 1,
        explanation: "The App/Web Recorder helps speed up automation development by recording user actions and generating the corresponding UI activities."
    },
    {
        id: 8,
        question: "Which option best describes a process that is considered HIGH-COST RPA?",
        options: [ 
            "A. Processes that can be broken down into steps that can be clearly automated, and steps that need to stay manual (such as validations or usage of physical security tokens)",
            "B. Processes where change is frequent, the system environment is volatile, and multiple manual (even non-digital) actions are required.",
            "C. Processes that are rather digital and can be automated, but use some technologies that are complex (such as OCR) or require advanced programming skills.",
            "D. Processes that are digital and involve a highly static system and process environment, so that they can be easily broken into instructions and simple triggers can be defined."
        ],
        correctAnswer: 1,
        explanation: "High-cost RPA processes often involve frequent changes, unstable environments, or significant manual intervention, making automation more complex and expensive."
    },
    {
        id: 9,
        question: "What is the best way to store credential information...",
        options: [
            "A. Store in a Config.xlsx...",
            "B. Store as hardcoded values...",
            "C. Store in a local file...",
            "D. Store in a single Orchestrator asset."
        ],
        correctAnswer: 3,
        explanation: "Storing credentials in an Orchestrator Asset ensures they are securely managed and accessed during execution."
    },
    {
        id: 10,
        question: "Upon extracting data from a website, a developer saves it in three variables: 'FirstName', 'LastName', and 'City'. The developer intends to store these three String variables in a fixed-size data structure called 'UserData', to be utilized later within another workflow in the process.\nConsidering best practices, which data structure and assignment should be used?",
        options: [ 
            "A. UserData is of type List<Object> \n UserData = New List(Of Object) ({ FirstName, LastName. City })",
            "B. UserData is of type List<String>\nUserData = New List(Of String) ({ FirstName, LastName. City })",
            "C. UserData is of type String[]\nUserData = {FirstName, LastName, City}",
            "D. UserData is of type Object[]\nUserData = {FirstName, LastName, City}"
        ],
        correctAnswer: 2,
        explanation: "Using a fixed-size array like `String[]` is appropriate when the number of elements is known and consistent, such as storing FirstName, LastName, and City."
    },

    {
        id: 11,
        question: "What is the purpose of the Connector Builder in the UiPath Integration Service?",
        options: [
            "A. To modify existing connectors in the connector catalog.",
            "B. To build custom connectors for any system integration using third-party APIs.",
            "C. To build connectors for only the UiPath platform.",
            "D. To connect UiPath products without using third-party APIs."
        ],
        correctAnswer: 1,
        explanation: "The Connector Builder allows developers to create custom connectors for integrating third-party services and APIs into UiPath workflows."
    },
    {
        id: 12,
        question: "What filter should be applied if an Orchestrator user wants to filter the robot logs in order to see only the Warn, Error, and Fatal severities?",
        options: [ 
            "A. Error",
            "B. Information",
            "C. Warning",
            "D. Trace"
        ],
        correctAnswer: 2,
        explanation: "The 'Warning' filter includes logs of severity Warn, Error, and Fatal, making it the appropriate choice when looking for high-severity issues."
    },
    {
        id: 13,
        question: "How many elements within an application need to match a selector...",
        options: [
            "A. 1 element",
            "B. 2 elements",
            "C. 3 elements",
            "D. 5 elements"
        ],
        correctAnswer: 0,
        explanation: "Selectors must uniquely identify one element. If multiple elements match, the activity may fail or act unpredictably."
    },
    {
        id: 14,
        question: "What are the expected tasks that should be performed by an automation business analyst?",
        options: [
            "A. Analyze the needs and propose solutions.",
            "B. Define the overall solution of an automation project",
            "C. Test the final solution.",
            "D. Design the architecture of the automation solution"
        ],
        correctAnswer: 0,
        explanation: "The main role of a business analyst is to analyze business processes, identify automation opportunities, and suggest appropriate solutions."
    },
    {
        id: 15,
        question: "What activity retrieves the Last accessed date of a specific file stored in a local folder?",
        options: [ 
            "A. Get File Info",
            "B. Get Folder Children",
            "C. Retrieve File Info",
            "D. Get File Size"
        ],
        correctAnswer: 0,
        explanation: "The 'Get File Info' activity provides metadata about a file, including its last accessed date."
    },
    {
        id: 16,
        question: "Which of the following is a characteristic of the GIT Init feature?",
        options: [
            "A. Adds the current project to a local GIT repository.",
            "B. Creates a new remote GIT repository.",
            "C. Adds the current project to a remote GIT repository.",
            "D. Commits the changes to a local GIT repository."
        ],
        correctAnswer: 0,
        explanation: "'GIT Init' initializes a new local Git repository for the current project, enabling version control."
    },
    {
        id: 17,
        question: "Which type of projects in UiPath Studio enables the creation of automations that can be executed on Windows and Unix-like operating systems like Linux and macOS?",
        options: [ 
            "A. Cross-platform projects",
            "B. Legacy projects",
            "C. Web browser projects",
            "D. Windows projects"
        ],
        correctAnswer: 0,
        explanation: "Cross-platform projects are designed to work on both Windows and Unix-like systems, making them ideal for wider deployment."
    },
    {
        id: 18,
        question: "A developer created a process that performs the following tasks:\n1. Display an input dialog asking the user for the company name.\n2. Opens a browser and searches for the company name.\n3. Scrapes the search results.\n4. Writes the results to a notepad file.\n5. Terminate process.\nWhat is the total number of activities that require manual intervention?",
        options: [ 
            "A. Zero",
            "B. One",
            "C. Two",
            "D. Four"
        ],
        correctAnswer: 1,
        explanation: "The only step requiring manual input is the 'Input Dialog'. All other actions are fully automated."
    },
    {
        id: 19,
        question: "What user category is the UiPath StudioX profile best suited for, as opposed to the UiPath Studio profile?",
        options: [ 
            "A. Business users looking to automate tasks for themselves and their immediate teams.",
            "B. Project managers looking to guide project teams through automations.",
            "C. Business analysts looking to document the processes for automation.",
            "D. Developers looking to build complex unattended or attended process automations."
        ],
        correctAnswer: 0,
        explanation: "StudioX is designed for business users with minimal coding knowledge to create simple automations quickly and efficiently."
    },
    {
        id: 20,
        question: "A developer wants to create a process which interacts with a minimized window. However, when the process is executed, the robot is not able to click on a button inside the application.\nWhich click activity property configuration would cause the automation to run only on foreground windows?",
        options: [ 
            "A. Input Mode",
            "B. Input Element",
            "C. Click Type",
            "D. Key Modifiers"
        ],
        correctAnswer: 0,
        explanation: "The 'Input Mode' property determines how UI interactions are performed. Only some modes (like Simulate Click) support minimized windows. Others, like Default, require the window to be in the foreground."
    },
    {
        id: 21,
        question: "Which of the following statements accurately describes the function of the If activity in a workflow?",
        options: [ 
            "A. It evaluates a boolean condition and runs the branch with the highest priority, regardless of the condition's truthiness.",
            "B. It evaluates a boolean condition and creates a single branch that executes both true and false statements sequentially.",
            "C. It evaluates a set of boolean conditions and branches the workflow execution to the first true condition encountered.",
            "D. It evaluates a boolean condition and creates two separate branches for both true and false conditions, executing only one branch."
        ],
        correctAnswer: 3,
        explanation: "The If activity evaluates a Boolean condition and executes only one of its two branches—True or False—based on the result."
    },
    {
        id: 21,
        question: "A developer needs to create an unattended automation process that extracts the information from emails from a centralized mailbox. The developer needs to use the mail folder, port, server, username, and password values, with no email client accessible on the unattended machine.\nWhich activity should the developer use to fetch unread emails with the subject 'Email for Robot'?",
        options: [ 
            "A. Get IMAP Mail Messages",
            "B. Save Mail Message",
            "C. Get Outlook Mail Messages",
            "D. Save Outlook Mail Message"
        ],
        correctAnswer: 0,
        explanation: "Since there's no email client available, the developer must use 'Get IMAP Mail Messages', which works via the IMAP protocol directly with the server."
    },
    {
        id: 23,
        question: "What are the available argument directions in UiPath Studio?",
        options: [
            "A. In, Out, and In/Out arguments.",
            "B. In/Out arguments only.",
            "C. Out arguments only.",
            "D. In and Out arguments."
        ],
        correctAnswer: 0,
        explanation: "UiPath supports three types of arguments: 'In' for input, 'Out' for output, and 'In/Out' for values that are both received and modified."
    }

    // Suite à continuer pour les questions 11 à 22...
];
