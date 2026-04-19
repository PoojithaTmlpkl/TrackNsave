const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  eligibility: String
});

module.exports = mongoose.model('Scheme', SchemeSchema);