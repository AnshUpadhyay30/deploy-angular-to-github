const Contact = require('../models/contact.model');

// Controller to handle contact form submission
exports.submitContact = async (req, res) => {
  try {
    console.log('📥 Contact form data received:', req.body); // Debug log

    const contact = new Contact(req.body); // Create new document from incoming data
    await contact.save(); // Save to MongoDB

    res.status(201).json({ message: '✅ Contact submitted successfully!' }); // Success response
  } catch (error) {
    console.error('❌ Error while saving contact to database:', error); // Log error details
    res.status(500).json({ message: '❌ Failed to submit contact. Please try again later.' }); // Error response
  }
};