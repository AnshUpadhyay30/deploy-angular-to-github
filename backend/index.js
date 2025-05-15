// backend/index.js
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact.routes');
const cors = require('cors');

// ✅ Load environment variables from correct path
dotenv.config({ path: path.resolve(__dirname, '.env') });

// ✅ Confirm env variables are loaded
console.log('🔍 MONGO_URI:', process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});