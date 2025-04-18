Genius Artificial Intelligence
Genius Artificial Intelligence is a web application designed to empower creative and analytical thinking through advanced AI capabilities. Featuring a clean, modern UI with a mathematical and logical theme, this project showcases a responsive frontend built with HTML, Tailwind CSS, and JavaScript, paired with a simple Node.js/Express backend for handling contact form submissions.
Table of Contents

Features
Project Structure
Prerequisites
Installation
Running the Application
Usage
Contributing
License

Features

Responsive Frontend: A clean, mathematically-inspired UI with smooth scrolling and interactive elements.
Key Functionalities:
Intelligent analysis for data-driven insights.
Creative ideation for innovative project ideas.
Instant responses for rapid problem-solving.
Team collaboration tools for real-time idea-sharing.
Adaptive learning for personalized recommendations.
Multi-platform integration with popular tools.
Real-time analytics with interactive dashboards.
AI personalization for tailored user experiences.


Contact Form: Submit messages via a form, with data stored in a JSON file through a backend API.
Backend API: A Node.js/Express server handling form submissions with CORS support.

Project Structure
genius-ai/
├── public/
│   └── index.html        # Frontend: Main HTML file with UI
├── contact-messages.json # Backend: Stores contact form submissions
├── server.js             # Backend: Node.js/Express server
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation

Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
A modern web browser (e.g., Chrome, Firefox)
A code editor (e.g., VS Code)
Optional: A static file server (e.g., VS Code Live Server) for testing the frontend locally

Installation

Clone the Repository:
git clone https://github.com/your-username/genius-ai.git
cd genius-ai


Set Up the Frontend:

Place index.html in the public/ folder.
Ensure the folder structure matches the one described above.


Set Up the Backend:

Initialize the Node.js project:npm init -y


Install dependencies:npm install express cors


Create an empty contact-messages.json file in the root directory with [] as its content:[]





Running the Application

Start the Backend:

Run the Node.js server:node server.js


The server will run on http://localhost:3000.


Serve the Frontend:

Option 1: Use a static file server (e.g., VS Code Live Server) to serve public/index.html.
Option 2: Add static file serving to the backend by updating server.js:app.use(express.static(path.join(__dirname, 'public')));

Then access the frontend at http://localhost:3000.


Verify Setup:

Open the application in a browser.
Navigate through the sections (Home, Features, About, Contact).
Test the contact form to ensure messages are saved in contact-messages.json.



Usage

Explore Features: Scroll through the "Key Features" section to learn about the AI capabilities.
Contact Form: Fill out the form in the "Contact Us" section. Submitted messages are stored in contact-messages.json.
Development:
Modify index.html for frontend changes.
Update server.js to extend backend functionality (e.g., add new API endpoints).
Customize the mathematical theme by editing the SVG background or hover effects in the <style> section.



Contributing
We welcome contributions to enhance Genius Artificial Intelligence! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request with a clear description of your changes.

Please ensure your code follows the project's coding style and includes relevant tests.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact: For questions or feedback, submit a message via the contact form or open an issue on GitHub.
© 2025 Genius Artificial Intelligence. All rights reserved.
