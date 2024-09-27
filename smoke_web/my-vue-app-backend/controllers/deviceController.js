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
