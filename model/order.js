const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    trackingNumber: { type: String, required: true, unique: true },
   //i might add map api here 
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    //
    status: {
      type: String,
      enum: ["Pending", "Assigned", "In Transit", "Delivered"],
      default: "Pending",
    },
    totalCost: { type: Number, required: true },
    
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    assignedDriver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
