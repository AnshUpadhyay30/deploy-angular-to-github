const db = require('../config/db');

exports.submitContact = (req, res) => {
  const {
    firstName, lastName, email, jobTitle,
    company, country, message, agreePolicy, subscribe
  } = req.body;

  const query = `
    INSERT INTO contacts (
      firstName, lastName, email, jobTitle,
      company, country, message, agreePolicy, subscribe
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    firstName, lastName, email, jobTitle,
    company, country, message, agreePolicy, subscribe
  ], (err, results) => {
    if (err) {
      console.error('❌ Insert error:', err);
      return res.status(500).json({ message: 'Database insert failed' });
    }
    res.status(201).json({ message: '✅ Contact saved successfully' });
  });
};