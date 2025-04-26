const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: [true, "Product Id is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sellers",
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clients",
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Sales", saleSchema);
module.exports = model;
