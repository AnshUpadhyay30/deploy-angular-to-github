const mysql = require('mysql2');
const dotenv = require('dotenv');

// ✅ Load .env from parent directory explicitly
dotenv.config({ path: __dirname + '/../.env' });

// 🔍 Debug log to verify .env values are loading
console.log('🔍 DB ENV CONFIG:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.stack);
    return;
  }
  console.log('✅ MySQL connected as id', db.threadId);
});

module.exports = db;