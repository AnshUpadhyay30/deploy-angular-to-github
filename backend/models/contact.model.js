const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  jobTitle: String,
  company: String,
  country: String,
  message: String,
  agreePolicy: Boolean,
  subscribe: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);