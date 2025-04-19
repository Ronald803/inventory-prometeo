const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    material: {
      type: String,
      required: [true, "Material is required"],
    },
    size: {
      type: String,
      required: [true, "Size is required"],
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Products", productSchema);
module.exports = model;
