
import { Question } from '../types/quiz';

export const questions2: Question[] = [
  {
    id: 1,
    question: "Which Studio workflow type is best-suited for a simple and linear process?",
    options: ["A. State Machine", "B. Global Exception Handler", "C. Flowchart", "D. Sequence"],
    correctAnswer: 3,
    explanation: "Sequences are ideal for linear processes with straightforward logic. They're simple, easy to read, and maintain."
  },

  {
    id: 2,
    question: "Which of the following statements is true about Global Variables?",
    options: [
      "A. Global Variables values can be modified during the automation execution.",
      "B. Global Variables can be created from the Data Manager panel and from the Variables panel.",
      "C. Global Variables can be accessed only from the Main workflow.",
      "D. Global Variables have a Direction properly (In/Out)."
    ],
    correctAnswer: 0,
    explanation: "Global Variables in UiPath can be modified at runtime and are available across the entire project."
  },

  {
    id: 3,
    question: "What is one of the main purposes of connecting Robots to Orchestrator?",
    options: [
      "A. To provide an alternative development environment to Studio.",
      "B. To prevent Robots from operating on unsupported applications.",
      "C. To enable Robots to communicate with other third-party systems.",
      "D. To manage and monitor Robot deployments and executions centrally."
    ],
    correctAnswer: 3,
    explanation: "Connecting Robots to Orchestrator enables centralized scheduling, monitoring, logging, and resource management."
  },

  {
    id: 4,
    question: "Which output method should be used to extract hidden text from a PDF file?",
    options: ["A. FullTexI only.", "B. Native only.", "C. OCR.", "D. FullText and Native"],
    correctAnswer: 3,
    explanation: "FullText and Native methods are both used to extract hidden text from digital PDFs. OCR is used for scanned PDFs."
  },

  {
    id: 5,
    question: "Which option best describes a process that is considered ZERO-TOUCH AUTOMATION?",
    options: [
      "A. Processes that are rather digital and can be automated, but use some technologies that are complex (such as OCR) or require advanced programming skills.",
      "B. Processes that are digital and involve a highly static system and process environment, so that they can be easily broken into instructions and simple triggers can be defined.",
      "C. Processes where change is frequent, the system environment is volatile, and multiple manual (even non-digital) actions are required.",
      "D. Processes that can be broken down into steps that can be clearly automated, and steps that need to stay manual (such as validations or usage of physical security tokens)."
    ],
    correctAnswer: 1,
    explanation: "Zero-touch automation targets highly predictable, rule-based processes that can be fully automated without human input."
  },

  {
    id: 6,
    question: "During which stage does an automation developer have the greatest contribution and responsibility?",
    options: [
      "A. In the Solution Design, Development and Unit Testing, and Deployment and Hypercare stages.",
      "B. In the Process Analysis, Solution Design, and Development and Unit Testing stages.",
      "C. In the Development and Unit Testing, Integration and UAT, and Deployment and Hypercare stages.",
      "D. In the Discovery and Kickoff, Development and Unit Testing, and Deployment and Hypercare stages."
    ],
    correctAnswer: 1,
    explanation: "Automation developers are heavily involved in process understanding, solution design, and especially development and testing."
  },

  {
    id: 7,
    question: "Following best practices, which activity is recommended for a developer to generate separate sets of actions for each vendor when developing a process that performs background verification for documents from 10 distinct vendors, each with varying document formats and requiring unique processing?",
    options: ["A. Flow Decision", "B. Flow Switch", "C. For Each", "D. Do While"],
    correctAnswer: 1,
    explanation: "'Flow Switch' allows you to route execution based on multiple conditions—ideal when processing data from multiple vendors."
  },

  {
    id: 8,
    question: "Which panel in UiPath Studio can be used to update the scope of a variable?",
    options: ["A. Data Manager", "B. Project", "C. Locals", "D. Variables"],
    correctAnswer: 3,
    explanation: "The Variables panel lets you define and update variable scopes, types, and default values within a workflow."
  },

  {
    id: 9,
    question: "What happens if a process is started from an on-premise UiPath Orchestrator?",
    options: [
      "A. The process starts running on all machines that are provisioned in Orchestrator and were selected for the job.",
      "B. The process starts running on a different machine as the Orchestrator.",
      "C. The process starts running on the same machine as the Orchestrator.",
      "D. The process starts running on all machines that are provisioned in Orchestrator no matter if they are selected for the job or not."
    ],
    correctAnswer: 2,
    explanation: "Unless specified otherwise, processes in on-premise Orchestrator typically run on the machine where the job was scheduled or initiated."
  },

  {
    id: 10,
    question: "Who is responsible for devising a strategy to prioritize processes during the Business Case and Technical Validation phase?",
    options: ["A. Project manager", "B. Solution architect", "C. Automation developer", "D. Business analyst"],
    correctAnswer: 3,
    explanation: "The Business Analyst identifies and prioritizes automation candidates based on ROI and feasibility during early stages."
  },

  {
    id: 11,
    question: "Given a variable of Object type that is assigned a Boolean value, what is the expected output when converting the variable to a string using the ToString method?",
    options: ["A. 'T' or 'F'", "B. 't' or 'f'", "C. 'True' or 'False'", "D. '1' or '0'"],
    correctAnswer: 2,
    explanation: "Calling ToString on a Boolean object returns the full word 'True' or 'False'."
  },

  {
    id: 12,
    question: "What are the steps to start building a custom connector using the Connector Builder for Integration Service?",
    options: [
      "A. Open Automation Cloud, go to Orchestrator, on the Connectors tab. select Add a new Connector, choose to start from an API definition or choose OAuth 2.0 authentication method.",
      "B. Open Automation Cloud, go to Integration Service, on the Connectors tab, select Add a new Connector, choose to start from an API definition or from a blank connector.",
      "C. Open UiPath Studio, create a new process, on the Connectors tab, select Add a new Connector, choose to start from an API definition or from a blank connector",
      "D. Open Automation Cloud, go to Orchestrator, on the Connections tab, select Add a new Connection, choose to start from an API definition or from a blank connector"
    ],
    correctAnswer: 1,
    explanation: "Custom connectors are created in the Integration Service within Automation Cloud, where you can define APIs or use a blank template."
  },

  {
    id: 13,
    question: "What is the default behavior when publishing files in UiPath Studio regarding the project folder?",
    options: [
      "A. By default, all files in the project folder, including test cases, are published as separate packages.",
      "B. By default, all files in the project folder are published except for test cases.",
      "C. By default, only selected files in the project folder are published.",
      "D. By default, all files in the project folder are published, including test cases."
    ],
    correctAnswer: 1,
    explanation: "By default, test cases are not included when publishing unless specifically selected in the Publish settings."
  },

  {
    id: 14,
    question: "Which activity can the developer use to iterate through a list, process each element individually, and utilize the Break activity to stop the iteration if a certain condition is not met?",
    options: ["A. Switch", "B. If", "C. Assign", "D. For Each"],
    correctAnswer: 3,
    explanation: "'For Each' enables iteration through collections and supports the 'Break' activity to exit based on custom conditions."
  },

  {
    id: 15,
    question: "In the UiPath Implementation Methodology, which phase involves building the SDD (Solution Design Document)?",
    options: ["A. Kick-off phase", "B. User Acceptance Testing phase", "C. Process Design phase", "D. Solution Design phase"],
    correctAnswer: 3,
    explanation: "The Solution Design Document is created during the Solution Design phase, outlining the architecture and approach."
  },

  {
    id: 16,
    question: "What activity from the Microsoft 365 package should be used to share a Sharepoint file URL with specific permissions to a specific user?",
    options: ["A. GetFile/Folder", "B. Upload File", "C. Share File/Folder", "D. Move File/Folder"],
    correctAnswer: 2,
    explanation: "'Share File/Folder' enables you to generate a link with specific permissions for external or internal users."
  },

  {
    id: 17,
    question: "A developer is working on a project that uses GIT for source control. A fellow team member seeks to compare two versions of a specific workflow within the project. Which option in UiPath Studio offers this functionality?",
    options: ["A. Show History", "B. Checkout Branch", "C. Push", "D. Pull (rebase)"],
    correctAnswer: 0,
    explanation: "The 'Show History' option displays commit history and lets you compare differences between file versions."
  },

  {
    id: 18,
    question: "Which of the following statements accurately describes the role of the For Each Excel Row activity?",
    options: [
      "A. It reads and stores the content of an entire worksheet in a DataTable variable.",
      "B. It writes specified data to a range of cells in an Excel file.",
      "C. It iterates through all the rows in a specified range, allowing to perform actions with each row.",
      "D. It filters an Excel table based on specific criteria and creates a new table with the filtered data."
    ],
    correctAnswer: 2,
    explanation: "'For Each Excel Row' processes each row individually from a specified range, enabling row-wise automation logic."
  },

  {
    id: 19,
    question: "While working on a project that utilizes Object Repository, you have one linked UI Element that is used across multiple activities. What needs to happen to edit a selector for only one activity without modifying it in Object Repository?",
    options: ["A. Edit target.", "B. Show in Object Repository.", "C. Indicate target on screen.", "D. Unlink from Object Repository."],
    correctAnswer: 0,
    explanation: "'Edit target' lets you override the selector locally for that activity while keeping the Object Repository version intact."
  },

  {
    id: 20,
    question: "What is the purpose of using project templates in UiPath Studio?",
    options: [
      "A. To quickly start a new project with pre-built components and structure based on best practices.",
      "B. To manage project dependencies and versioning.",
      "C. To create a webpage layout with pre-built UI elements.",
      "D. To group reusable custom components across different automation projects."
    ],
    correctAnswer: 0,
    explanation: "Project templates accelerate development by providing a predefined structure, reducing setup time and enforcing standards."
  }
];
