export const projects = [
  {
    slug:"misinformation-detection-system", number:"01", title:"Misinformation Detection System", category:"Machine Learning · NLP",
    summary:"A hybrid misinformation-detection prototype comparing a traditional machine-learning classifier with interpretable linguistic rules.",
    image:"projects/misinformation-detection.png", imageAlt:"Misinformation detection interface displaying machine-learning and rule-based results", status:"Working prototype", type:"Individual honours project",
    tags:["Python","NLP","TF-IDF","Logistic Regression","Gradio","scikit-learn"],
    problem:"Online misinformation spreads faster than manual fact-checking can respond. The project investigates whether lightweight, understandable methods can help identify potentially misleading textual statements.",
    solution:"The system preprocesses text, represents it with TF-IDF features, and applies Logistic Regression trained on the LIAR dataset. A separate rule-based module detects linguistic indicators such as conspiracy language and absolute claims, allowing the two approaches to be compared in one interface.",
    features:["Truthful or misleading classification","ML confidence and misleading probability","Rule-based risk score","Detected linguistic indicators","Side-by-side method comparison","Interactive Gradio interface"],
    contribution:"Designed and implemented the end-to-end prototype, including dataset preparation, NLP preprocessing, feature extraction, model experimentation, rule design, evaluation, interface development, and technical documentation.",
    outcome:"The baseline Logistic Regression model achieved 68.15% validation accuracy on 1,284 validation statements. The evaluation also exposed class-imbalance and rule-coverage limitations that are guiding the next refinement phase.",
    github:"https://github.com/zandiledladla/Online-Misinformation-Detection-System"
  },
  {
    slug:"shiftwyse", number:"02", title:"ShiftWyse", category:"AI · Cloud Web Application",
    summary:"An AI-powered leadership companion designed to give South African nurses accessible, personalised professional-development support.",
    image:"projects/shiftwyse-dashboard.webp", imageAlt:"ShiftWyse dashboard with leadership assessment, AI chat, mentor matching, and progress actions", status:"Deployed", type:"University team project",
    tags:["JavaScript","Firebase","Firestore","Cloud Functions","Gemini","Web Speech API"],
    problem:"Nurses working in demanding and resource-constrained environments often have limited access to structured leadership development, mentorship, and multilingual support.",
    solution:"ShiftWyse brings AI coaching, competency assessments, adaptive challenges, mentor discovery, document analysis, and voice interaction into a cloud-hosted platform designed around accessibility, low data costs, and POPIA-aware data practices.",
    features:["Multilingual AI leadership coaching","Competency assessments","Adaptive daily challenges","Mentor discovery","Voice input and audio playback","POPIA-aligned consent and data deletion"],
    contribution:"Contributed to document and requirements analysis, project planning, selected implementation tasks, and application testing. Collaborated with the team to translate user needs into a functional, accessible solution and verify key features.",
    outcome:"The team delivered a working, cloud-hosted prototype with core leadership-support features, multilingual interaction, consent controls, user-managed data deletion, and a low-cost Firebase architecture.",
    live:"https://shiftwyse-473820.web.app/consent"
  },
  {
    slug:"relational-database-crud", number:"03", title:"Relational Database CRUD App", category:"Backend · Database",
    summary:"A command-line student-record manager demonstrating persistent storage, database integration, and complete CRUD operations.",
    image:"projects/relational-database-crud.png", imageAlt:"Terminal output from the student record manager showing records being added", status:"Completed", type:"Individual project",
    tags:["Python","SQLite","SQL","CLI","Data Validation"],
    problem:"Managing structured student records requires reliable creation, retrieval, updating, and deletion while ensuring that information persists between sessions.",
    solution:"A lightweight Python command-line application connects user actions to a local SQLite database and provides a clear menu-driven workflow for managing student records.",
    features:["Add student records","View all stored students","Update records dynamically","Delete records by identifier","Persistent SQLite storage","Menu-driven interaction"],
    contribution:"Designed and implemented the complete application, including the database schema, Python data-access logic, command-line workflow, input handling, CRUD operations, and testing.",
    outcome:"Produced a functional, reusable student-record manager that demonstrates foundational backend development and relational database concepts.",
    github:"https://github.com/zandiledladla/relational-database-crud-app",
    gallery:[{src:"projects/relational-database-view-records.png",alt:"Student record manager displaying all saved student records from SQLite"}]
  },
  {
    slug:"distributed-task-processing", number:"04", title:"Distributed Task Processing Simulation", category:"Concurrency · Distributed Systems",
    summary:"A Python simulation of concurrent task generation, worker processing, failure handling, and automatic retries.",
    image:"projects/distributed-system-simulation.png", imageAlt:"Terminal output showing distributed tasks being processed, retried, and completed", status:"Completed", type:"Independent personal project",
    tags:["Python","Threading","Queues","Concurrency","Fault Handling"],
    problem:"Distributed systems must coordinate multiple tasks while remaining resilient when individual processing attempts fail.",
    solution:"The simulation uses a producer-consumer structure: generated tasks enter a shared queue and worker threads process them concurrently. Random failures trigger controlled retries, making the task lifecycle visible in the terminal.",
    features:["Real-time task generation","Producer-consumer architecture","Concurrent worker threads","Queue-based distribution","Simulated failures","Up to three retry attempts","Graceful timed shutdown"],
    contribution:"Designed and implemented the simulation, including task generation, queue coordination, threaded processing, failure simulation, retry logic, terminal reporting, and shutdown behaviour.",
    outcome:"Created a clear demonstration of concurrency, task coordination, and fault-handling principles used in larger distributed-processing environments.",
    github:"https://github.com/zandiledladla/distributed-system-simulation"
  },
  {
    slug:"sound-level-monitoring", number:"05", title:"Sound Level Monitoring System", category:"IoT · Networking",
    summary:"A Raspberry Pi system that monitors ambient sound and sends threshold alerts to a client device using UDP communication.",
    image:"projects/sound-monitoring-main.webp", imageAlt:"Raspberry Pi connected to a microphone sensor and breadboard for sound monitoring", status:"Completed", type:"University team project",
    tags:["Python","Raspberry Pi","IoT","UDP","NumPy","sounddevice"],
    problem:"Monitoring excessive ambient noise requires continuous sensor input and a way to notify another device when measurements cross a defined threshold.",
    solution:"A microphone sensor captures sound through a Raspberry Pi server. The system processes sound-level data and uses UDP communication to alert a separate client device when the configured threshold is exceeded.",
    features:["Real-time sound monitoring","Microphone-sensor integration","Raspberry Pi server","UDP client-server communication","Configurable threshold","High-noise alerts"],
    contribution:"Contributed to setting up and integrating the Raspberry Pi and microphone-sensor hardware, testing real-time monitoring and UDP communication, and troubleshooting hardware, network, and software-integration issues.",
    outcome:"The team produced and tested a working hardware-software prototype demonstrating sensor integration, network communication, and threshold-based monitoring.",
    github:"https://github.com/zandiledladla/sound-level-monitoring-system",
    gallery:[{src:"projects/sound-monitoring-full-setup.webp",alt:"Full Raspberry Pi sound-monitoring hardware setup"},{src:"projects/sound-monitoring-hardware.webp",alt:"Close view of Raspberry Pi, breadboard, wiring, and microphone sensor"}]
  }
];

export const coverCode={
  "01":{label:"NLP pipeline",code:"prediction = model.predict(text)",signal:"TF-IDF  →  LOGISTIC REGRESSION"},
  "02":{label:"Cloud application",code:"await leadershipCoach.respond()",signal:"FIREBASE  ×  GEMINI"},
  "03":{label:"Data layer",code:"SELECT * FROM students;",signal:"CREATE  •  READ  •  UPDATE  •  DELETE"},
  "04":{label:"Worker system",code:"task_queue.put(next_task)",signal:"PRODUCER  →  QUEUE  →  WORKER"},
  "05":{label:"IoT network",code:"socket.sendto(sound_level)",signal:"SENSOR  →  RASPBERRY PI  →  CLIENT"}
};
