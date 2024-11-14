const mongoose = require("mongoose");

// Schema สำหรับข้อมูลเรียลไทม์จากเซนเซอร์ของอุปกรณ์
const DeviceDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },  // reference ไปยัง device
  pm1: { type: Number },
  pm2_5: { type: Number },
  pm10: { type: Number },
  temperature: { type: Number },
  humidity: { type: Number },
  co2: { type: Number },
  ammonia: { type: Number },
  gas: { type: Number },
  timestamp: { 
    type: Date, 
    default: () => new Date(Date.now() + 7 * 60 * 60 * 1000) // บวก 7 ชั่วโมง
  }
});

module.exports = mongoose.model("DeviceData", DeviceDataSchema);
