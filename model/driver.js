const mongoose = require('mongoose');
const User = require('./user');

const driverSchema = new mongoose.Schema({
    licenseNumber: { type: String, required: true },
  currentVehicle: { type: String },
  isAvailable: { type: Boolean, default: true }
})

const driver = User.discriminator('Driver' , driverSchema)
module.exports = Driver;