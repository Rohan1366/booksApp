const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  created_at: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Book', bookSchema);
