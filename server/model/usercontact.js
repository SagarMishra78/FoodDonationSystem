const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("CONTACT", contactSchema);

module.exports = Contact;
