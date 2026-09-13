export const projects = [
  {
    slug:"finflow-transaction-api", number:"01", title:"FinFlow Transaction Processing API", category:"Backend Engineering · FinTech",
    summary:"A tested Python API for customer accounts and reliable money movement, designed around validation, transaction integrity, and production-style engineering practices.",
    image:"projects/finflow-architecture.svg", imageAlt:"FinFlow architecture connecting FastAPI routes, transaction services, SQLAlchemy, and PostgreSQL", status:"Application-ready MVP", type:"Independent personal project",
    tags:["Python","FastAPI","SQLAlchemy","PostgreSQL","pytest","Docker","GitHub Actions","OpenAPI"],
    problem:"Financial transaction systems must protect balances and maintain consistent records when deposits, withdrawals, transfers, or invalid requests occur.",
    solution:"FinFlow separates HTTP routes, validated schemas, business services, and persistence. It uses fixed-precision monetary values, database transactions, deterministic row locking, balance checks, currency validation, and automated tests to protect core workflows.",
    features:["Customer and account creation","Deposits and withdrawals","Atomic account transfers","Insufficient-funds protection","Currency and request validation","Paginated transaction history","Account-specific statements","Request IDs and structured logging","Swagger/OpenAPI documentation","Automated PostgreSQL CI testing"],
    contribution:"Designed and implemented the complete backend architecture, relational models, REST endpoints, transaction rules, validation, logging, automated tests, local SQLite workflow, PostgreSQL configuration, Docker setup, demonstration data, and continuous-integration pipeline.",
    outcome:"Delivered an application-ready MVP with eight passing automated tests, interactive API documentation, a repeatable demo workflow, and a GitHub Actions pipeline configured to validate the application against PostgreSQL.",
    github:"https://github.com/zandiledladla/finflow-transaction-api"
  },
  {
    slug:"misinformation-detection-system", number:"02", title:"Misinformation Detection System", category:"Machine Learning · NLP",
    summary:"A hybrid misinformation-detection prototype comparing a traditional machine-learning classifier with interpretable linguistic rules.",
    image:"projects/misinformation-detection.png", imageAlt:"Misinformation detection interface displaying machine-learning and rule-based results", status:"Working prototype", type:"Individual honours project",
    tags:["Python","NLP","TF-IDF","Logistic Regression","Gradio","Unit Testing"],
    problem:"Online misinformation spreads faster than manual fact-checking can respond. The project investigates whether lightweight, understandable methods can help identify potentially misleading textual statements.",
    solution:"The modular application separates preprocessing, model training, linguistic rules, evaluation, and the Gradio interface. It applies Logistic Regression to TF-IDF features from the LIAR dataset and compares that prediction with interpretable linguistic indicators.",
    features:["Truthful or misleading classification","ML confidence and misleading probability","Rule-based risk score","Detected linguistic indicators","Reproducible accuracy, precision, recall and F1 evaluation","Five automated tests","Interactive Gradio interface"],
    contribution:"Designed and implemented the end-to-end prototype, including dataset preparation, NLP preprocessing, feature extraction, model experimentation, rule design, evaluation, interface development, and technical documentation.",
    outcome:"The baseline Logistic Regression model achieved 68.15% validation accuracy on 1,284 validation statements. The repository now provides reproducible evaluation, five passing tests, explicit limitations and responsible-use guidance rather than presenting the prototype as a fact-checking authority.",
    github:"https://github.com/zandiledladla/Online-Misinformation-Detection-System"
  },
  {
    slug:"shiftwyse", number:"03", title:"ShiftWyse", category:"AI · Cloud Web Application",
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
    slug:"relational-database-crud", number:"04", title:"Relational Database CRUD App", category:"Backend · Database",
    summary:"A tested command-line student-record manager demonstrating relational persistence, validation, transactions and complete CRUD operations.",
    image:"projects/relational-database-crud.png", imageAlt:"Terminal output from the student record manager showing records being added", status:"Completed", type:"Individual project",
    tags:["Python","SQLite","SQL","Transactions","Unit Testing"],
    problem:"Managing structured student records requires reliable creation, retrieval, updating, and deletion while ensuring that information persists between sessions.",
    solution:"The application separates its command-line interface from a reusable repository layer. Parameterised SQL, database constraints, input validation and context-managed transactions protect the integrity of locally stored records.",
    features:["Repository-based architecture","Add and retrieve student records","Validated updates","Clear missing-record errors","Parameterized SQL","SQLite constraints and transactions","Three isolated in-memory tests"],
    contribution:"Designed and implemented the application, database schema, repository layer, command-line workflow, validation, CRUD operations and automated tests.",
    outcome:"Produced a dependency-free student-record manager with three passing tests and database logic that can be exercised independently of the interactive interface.",
    github:"https://github.com/zandiledladla/relational-database-crud-app",
    gallery:[{src:"projects/relational-database-view-records.png",alt:"Student record manager displaying all saved student records from SQLite"}]
  },
  {
    slug:"distributed-task-processing", number:"05", title:"Distributed Task Processing Simulation", category:"Concurrency · Distributed Systems",
    summary:"A tested Python producer-consumer simulation with configurable workers, bounded retries, structured logging and graceful shutdown.",
    image:"projects/distributed-system-simulation.png", imageAlt:"Terminal output showing distributed tasks being processed, retried, and completed", status:"Completed", type:"Independent personal project",
    tags:["Python","Threading","Queues","Retries","Unit Testing"],
    problem:"Distributed systems must coordinate multiple tasks while remaining resilient when individual processing attempts fail.",
    solution:"Generated work enters a thread-safe queue and configurable worker threads process tasks concurrently. Failures trigger bounded retries, while structured logs and coordinated shutdown make every state transition observable.",
    features:["Configurable producer-consumer architecture","Concurrent worker threads","Queue-based distribution","Bounded retry policy","Structured lifecycle logging","Graceful shutdown","Five deterministic automated tests"],
    contribution:"Designed and implemented the simulation, including task generation, queue coordination, threaded processing, failure simulation, retry logic, terminal reporting, and shutdown behaviour.",
    outcome:"Created a reproducible demonstration of concurrency, task coordination and fault handling with five passing tests and clearly documented differences between the simulation and a production distributed system.",
    github:"https://github.com/zandiledladla/distributed-system-simulation"
  },
  {
    slug:"sound-level-monitoring", number:"06", title:"Sound-Event Monitoring System", category:"IoT · Networking",
    summary:"A Raspberry Pi prototype that detects digital sound-threshold events and sends structured UDP alerts to a monitoring client.",
    image:"projects/sound-monitoring-main.webp", imageAlt:"Raspberry Pi connected to a microphone sensor and breadboard for sound monitoring", status:"Completed", type:"University team project",
    tags:["Python","Raspberry Pi","IoT","GPIO","UDP","JSON","Unit Testing"],
    problem:"A remote monitoring device needs to recognise when a digital sound sensor crosses its configured physical threshold and notify another device without coupling event logic to Raspberry Pi hardware.",
    solution:"The Raspberry Pi reads the sensor's digital GPIO output, applies independent debounce and status intervals, and sends timestamped JSON events over UDP. Hardware access is isolated from decision logic, allowing the system to run in deterministic simulation mode and be tested on any computer.",
    features:["Digital threshold-event detection","Raspberry Pi GPIO integration","Structured JSON over UDP","Configurable host, port, GPIO pin and timing","Debounced alerts","Hardware-free simulation mode","Five automated tests"],
    contribution:"Contributed to setting up and integrating the Raspberry Pi and microphone-sensor hardware, testing real-time monitoring and UDP communication, and troubleshooting hardware, network, and software-integration issues.",
    outcome:"The team produced a working hardware-software prototype. The portfolio version now has five passing hardware-independent tests and accurately states that the digital sensor detects threshold crossings rather than calibrated decibel values.",
    github:"https://github.com/zandiledladla/sound-level-monitoring-system",
    gallery:[{src:"projects/sound-monitoring-full-setup.webp",alt:"Full Raspberry Pi sound-monitoring hardware setup"},{src:"projects/sound-monitoring-hardware.webp",alt:"Close view of Raspberry Pi, breadboard, wiring, and microphone sensor"}]
  }
];

export const coverCode={
  "01":{label:"Transaction API",code:"await transfer_funds(request)",signal:"FASTAPI  →  SQLALCHEMY  →  POSTGRESQL"},
  "02":{label:"NLP pipeline",code:"prediction = model.predict(text)",signal:"TF-IDF  →  LOGISTIC REGRESSION"},
  "03":{label:"Cloud application",code:"await leadershipCoach.respond()",signal:"FIREBASE  ×  GEMINI"},
  "04":{label:"Data layer",code:"SELECT * FROM students;",signal:"CREATE  •  READ  •  UPDATE  •  DELETE"},
  "05":{label:"Worker system",code:"task_queue.put(next_task)",signal:"PRODUCER  →  QUEUE  →  WORKER"},
  "06":{label:"IoT network",code:"socket.sendto(event.to_bytes())",signal:"GPIO  →  JSON/UDP  →  CLIENT"}
};
