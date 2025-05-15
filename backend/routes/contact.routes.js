// routes/contact.routes.js
const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contact.controller');

// ✅ This will now respond to POST /api/contact
router.post('/', submitContact);

module.exports = router;