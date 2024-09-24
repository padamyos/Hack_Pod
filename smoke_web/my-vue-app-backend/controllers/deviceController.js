// controllers/deviceController.js
const Device = require('../models/Device');
const User = require('../models/User');

// เพิ่มอุปกรณ์ใหม่และเชื่อมโยงกับผู้ใช้
exports.addDevice = async (req, res) => {
  const { deviceId, position, status, ownerId } = req.body;

  try {
    // ตรวจสอบว่ามีผู้ใช้นี้อยู่ในระบบหรือไม่
    const user = await User.findById(ownerId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // สร้างอุปกรณ์ใหม่
    const device = new Device({
      deviceId,
      position,
      status,
      owner: user._id,  // เชื่อมโยงกับ user ผ่าน owner
    });

    // บันทึกอุปกรณ์ในฐานข้อมูล
    await device.save();

    // เพิ่ม deviceId ลงใน devices array ของผู้ใช้
    user.devices.push(device._id);
    await user.save();

    res.status(201).json({ message: 'Device added successfully', device });
  } catch (error) {
    res.status(500).json({ message: 'Error adding device', error });
  }
};
