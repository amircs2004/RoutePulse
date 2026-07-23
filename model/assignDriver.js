const mongoose = require("mongoose");

const adminAssignmentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  assignedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AdminAssignment", adminAssignmentSchema);
