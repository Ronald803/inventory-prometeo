const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    default: "No name",
  },
  cellphone: {
    type: Number,
    default: 00000000000,
  },
  city: {
    type: String,
    default: "No city",
  },
});

const model = mongoose.model("Clients", clientSchema);
module.exports = model;
