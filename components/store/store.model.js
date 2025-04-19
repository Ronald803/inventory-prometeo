const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    schedule: {
      type: String,
      required: [true, "Schedule is required"],
    },
    comission: {
      type: Number,
      required: [true, "Comission is required"],
    },
    note: {
      type: String,
      default: "No notes",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Stores", storeSchema);
module.exports = model;
