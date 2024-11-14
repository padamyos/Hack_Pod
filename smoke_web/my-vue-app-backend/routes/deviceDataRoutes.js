const express = require("express");
const router = express.Router();
const deviceDataController = require("../controllers/deviceDataController");

// เส้นทางสำหรับเพิ่มข้อมูลจากเซนเซอร์ลงใน DeviceData
router.post("/", deviceDataController.addDeviceData);

// เส้นทางสำหรับดึงข้อมูล DeviceData ทั้งหมดของอุปกรณ์ตาม deviceId
router.get("/:deviceId", deviceDataController.getDeviceDataByDeviceId);

// เส้นทางสำหรับดึงข้อมูลสรุปรายชั่วโมงของ DeviceData
router.get("/summary/hourly/:deviceId", deviceDataController.getHourlySummary);

module.exports = router;
