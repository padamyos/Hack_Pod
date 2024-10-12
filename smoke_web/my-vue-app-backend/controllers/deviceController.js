// controllers/deviceController.js
const Device = require("../models/Device");
const User = require("../models/User");

// ดึงข้อมูลอุปกรณ์ทั้งหมดของผู้ใช้
exports.getDevicesByOwner = async (req, res) => {
  const ownerId = req.params.ownerId;

  try {
    const devices = await Device.find({ owner: ownerId });
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching devices", error });
  }
};

// เพิ่มอุปกรณ์ใหม่และเชื่อมโยงกับผู้ใช้
exports.addDevice = async (req, res) => {
  const { deviceId, position, status, ownerId } = req.body;

  try {
    // ตรวจสอบว่ามีผู้ใช้นี้อยู่ในระบบหรือไม่
    const user = await User.findById(ownerId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // สร้างอุปกรณ์ใหม่
    const device = new Device({
      deviceId,
      position,
      status,
      owner: user._id, // เชื่อมโยงกับ user ผ่าน owner
    });

    // บันทึกอุปกรณ์ในฐานข้อมูล
    await device.save();

    // เพิ่ม deviceId ลงใน devices array ของผู้ใช้
    user.devices.push(device._id);
    await user.save();

    res.status(201).json({ message: "Device added successfully", device });
  } catch (error) {
    res.status(500).json({ message: "Error adding device", error });
  }
};
// ฟังก์ชันสำหรับลบผู้ใช้
exports.deleteDevice = async (req, res) => {
  const { deviceId } = req.params;

  try {
    // ตรวจสอบว่าอุปกรณ์นี้มีอยู่ในระบบหรือไม่
    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }

    // ลบอุปกรณ์ใน Device collection
    await Device.deleteOne({ deviceId });

    // ลบอุปกรณ์ใน User collection ที่เชื่อมโยงกับ owner
    await User.findByIdAndUpdate(device.owner, {
      $pull: { devices: device._id },
    });

    res.status(200).json({ message: "Device deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// อัปเดตข้อมูลในฟิลด์ data ของอุปกรณ์โดยอ้างอิงจาก deviceId real time จาก sensor
exports.updateDeviceData = async (req, res) => {
  const { deviceId } = req.params;  // รับ deviceId จาก URL
  const {pm1, pm2_5, pm10, temperature, humidity } = req.body;  // ข้อมูลที่จะอัปเดต

  try {
    // หาอุปกรณ์ตาม deviceId
    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    // อัปเดตข้อมูล data
    device.data.pm1 = pm1;
    device.data.pm2_5 = pm2_5;
    device.data.pm10 = pm10;
    device.data.temperature = temperature;
    device.data.humidity = humidity;
    device.data.lastUpdated = Date.now();  // อัปเดตเวลาที่มีการเปลี่ยนแปลงล่าสุด

    // บันทึกข้อมูลอุปกรณ์ที่อัปเดตแล้ว
    await device.save();

    res.status(200).json({ message: 'Device data updated successfully', device });
  } catch (error) {
    res.status(500).json({ message: 'Error updating device data', error });
  }
};


// เพิ่มข้อมูลใหม่ใน array data ของอุปกรณ์
exports.addDeviceData = async (req, res) => {
  const { deviceId } = req.params;
  const { pm1, pm2_5, pm10, temperature, humidity, co2 } = req.body;

  try {
    // ค้นหาอุปกรณ์ที่ต้องการเพิ่มข้อมูล
    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }

    // สร้าง object ข้อมูลใหม่
    const newData = {
      pm1,
      pm2_5,
      pm10,
      temperature,
      humidity,
      co2,
      timestamp: new Date()
    };

    // เพิ่มข้อมูลใหม่เข้าไปใน array data
    device.data.push(newData);

    // บันทึกข้อมูลในฐานข้อมูล
    await device.save();

    res.status(200).json({ message: "Data added successfully", device });
  } catch (error) {
    res.status(500).json({ message: "Error adding data to device", error });
  }
};




// ดึงรายการอุปกรณ์ทั้งหมด
exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find({}, 'deviceId position'); // ดึงเฉพาะ deviceId และตำแหน่ง
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching devices list", error });
  }
};


// ดึงข้อมูลทั้งหมดจากอุปกรณ์ที่กำหนด
exports.getDeviceData = async (req, res) => {
  const { deviceId } = req.params;

  try {
    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }

    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: "Error fetching device data", error });
  }
};