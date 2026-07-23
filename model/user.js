const mongoose = require("mongoose");

const options = {
  discriminatorKey: "role",
  Collection: "users",
};
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  options,
);
const User = mongoose.model('User', userSchema);
module.exports = User;
