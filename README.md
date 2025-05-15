# 🚀 Zilaxy Website

Zilaxy is a full-stack professional business web application designed to showcase clean UI, seamless backend integration, and responsive user experience. Built using Angular for the frontend, Node.js + Express for the backend, and MySQL as the database.

---

## 🌐 Live Demo

> Coming Soon...

---

## 🛠️ Tech Stack

| Layer       | Technology                |
|-------------|----------------------------|
| Frontend    | Angular 16, Angular Material, SCSS, AOS |
| Backend     | Node.js, Express.js        |
| Database    | MySQL                      |
| Styling     | Angular Material (Azure Theme), FontAwesome |
| Dev Tools   | Concurrently, dotenv, proxy.conf.json |

---

## 📁 Project Structure

zilaxy-website/
├── backend/               # Express backend
│   ├── config/            # DB configuration
│   ├── routes/            # API routes
│   ├── controllers/       # Route logic
│   └── .env               # Environment variables (not committed)
│
├── src/                   # Angular frontend
│   ├── app/contact/       # Contact form component
│   ├── assets/            # Images, icons, etc.
│   └── styles.css         # Global styles
│
├── proxy.conf.json        # API proxy to backend
├── package.json           # Project scripts and dependencies
├── .gitignore             # Excludes node_modules, .env, dist/

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AnshUpadhyay30/zilaxy-angular.git
cd zilaxy-angular

npm install
cd backend && npm install && cd ..

Setup MySQL Database

CREATE DATABASE zilaxy;

USE zilaxy;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255),
  jobTitle VARCHAR(255),
  company VARCHAR(255),
  country VARCHAR(255),
  message TEXT,
  agreePolicy BOOLEAN,
  subscribe BOOLEAN,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
 Create .env in backend/
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=zilaxy

. Run the Project


npm run start:all

👨‍💻 Author

Ansh Upadhyay
GitHub: @AnshUpadhyay30

📄 License

This project is licensed under the MIT License.