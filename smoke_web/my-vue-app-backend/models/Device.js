// models/Device.js
const mongoose = require("mongoose");


const DeviceDataSchema = new mongoose.Schema({
  pm1: { type: Number },  // ตัวอย่างข้อมูลจาก sensor
  pm2_5: { type: Number },  // ตัวอย่างข้อมูลจาก sensor
  pm10: { type: Number },  // ตัวอย่างข้อมูลจาก sensor
  temperature: { type: Number },  // ตัวอย่างข้อมูลจาก sensor
  humidity: { type: Number },
  co2: { type: Number },
  ammonia: { type: Number },
  gas: { type: Number },
  timestamp: { type: Date, default: Date.now } 
}, { _id: false });

// สร้าง Schema สำหรับ Device
const DeviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  position: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  data: [DeviceDataSchema],  // เปลี่ยนเป็น array ของ DeviceDataSchema
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });



module.exports = mongoose.model("Device", DeviceSchema);