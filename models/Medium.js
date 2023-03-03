const mongoose = require('mongoose');

const mediumSchema = new mongoose.Schema({
  title: String,
  description: String,
  markdown: String
});


const Medium = mongoose.model("Medium", mediumSchema);

module.exports = Medium;