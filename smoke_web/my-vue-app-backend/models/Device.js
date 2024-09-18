// models/Device.js
const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Device", DeviceSchema);