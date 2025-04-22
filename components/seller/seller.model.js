const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  cellphone: {
    type: Number,
    required: [true, "Cellphone is required"],
  },
  personalComission: {
    type: Number,
    default: 0,
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stores",
  },
  note: {
    type: String,
    default: "No notes",
  },
});

const model = mongoose.model("Sellers", sellerSchema);
module.exports = model;
