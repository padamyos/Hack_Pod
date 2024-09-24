
const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }] // ฟิลด์ devices ที่เป็นอาร์เรย์ของ DeviceSchema
},{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);