
const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  position: String,
  status: String
});

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  devices: [DeviceSchema] // ฟิลด์ devices ที่เป็นอาร์เรย์ของ DeviceSchema
});

module.exports = mongoose.model("User", UserSchema);