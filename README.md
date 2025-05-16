# 🚀 Zilaxy Website

Welcome to the official repository of **Zilaxy** – a cutting-edge platform combining a professional Angular frontend with a robust Flask + MySQL backend. Built for performance, scalability, and seamless user engagement.

---

## 🌐 Live Preview

> Coming Soon on [zilaxy.io](https://zilaxy.io)  
> ✅ Currently runs on `localhost:4200` for frontend and `localhost:3000` for backend.

---

## 🧩 Tech Stack

| Layer        | Technology                    |
|-------------|-------------------------------|
| Frontend     | [Angular 17+](https://angular.io) + SCSS |
| Backend      | [Python Flask](https://flask.palletsprojects.com/) |
| Database     | [MySQL 8+](https://www.mysql.com/) |
| APIs         | RESTful JSON APIs             |
| Styling      | Responsive + Material UI + HD Design |
| Deployment   | GitHub + GCP Ready            |

---

## 📁 Project Structure
zilaxy-website/
├── backend/
│   ├── app.py               # Main Flask app
│   ├── contact_routes.py    # REST API routes
│   ├── db.py                # MySQL DB connection
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment variables
├── src/
│   └── app/
│       └── components/
│           └── contact/     # Angular Contact Form
├── public/
├── dist/                    # Angular build output
└── .gitignore


---

## ⚙️ Setup Instructions

### 1. 📦 Clone the Repo

```bash
git clone https://github.com/AnshUpadhyay30/zilaxy-angular.git
cd zilaxy-website


2. 🎨 Start Frontend (Angular)
npm install
npm run start:frontend

3. 🧠 Start Backend (Flask)
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

Runs on http://localhost:3000


4. 🛢️ MySQL DB Setup

CREATE DATABASE zilaxy;
USE zilaxy;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  job_title VARCHAR(100),
  company VARCHAR(100),
  country VARCHAR(100),
  message TEXT,
  agree_policy BOOLEAN NOT NULL DEFAULT FALSE,
  subscribe BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Update .env:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=zilaxy
PORT=3000


📬 Contact Form Features
	•	✅ First Name, Last Name, Email, Job Title, Company, Country
	•	✅ Message field with validation
	•	✅ Policy and Subscription checkboxes
	•	✅ Styled Angular form with Snackbar feedback
	•	✅ Stores submission into MySQL via Flask API



👨‍💻 Author

Ansh Upadhyay
GitHub • LinkedIn

🛡 License

This project is licensed under the MIT License.