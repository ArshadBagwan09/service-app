const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  phone: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Worker", workerSchema);