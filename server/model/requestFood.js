const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  addinfo: {
    type: String,
    required: true,
  },
});

const Request = mongoose.model("REQUEST", requestSchema);

module.exports = Request;
