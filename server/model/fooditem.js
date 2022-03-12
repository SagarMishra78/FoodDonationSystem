const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
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
  items: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("ITEM", itemSchema);

module.exports = Item;
