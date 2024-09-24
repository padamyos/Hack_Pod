// models/Device.js
const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },  // deviceId ที่เชื่อมโยงกับอุปกรณ์
  position: { type: String },  // ตำแหน่งที่ติดตั้งอุปกรณ์ เช่น "Living Room"
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },  // สถานะของอุปกรณ์
  data: { 
    temperature: { type: Number },  // ตัวอย่างข้อมูลจาก sensor
    humidity: { type: Number },
    lastUpdated: { type: Date, default: Date.now }  // เวลาที่อัพเดทล่าสุด
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // เชื่อมโยงกับ User ผ่าน owner
},{ timestamps: true });

module.exports = mongoose.model("Device", DeviceSchema);