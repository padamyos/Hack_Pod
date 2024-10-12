// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');


// เส้นทางสำหรับดึงข้อมูลอุปกรณ์ทั้งหมด
router.get('/', deviceController.getAllDevices);

// เส้นทางสำหรับเพิ่มอุปกรณ์ใหม่
router.get('/:ownerId', deviceController.getDevicesByOwner);
router.post('/add', deviceController.addDevice);
router.delete('/:deviceId', deviceController.deleteDevice);

// เส้นทางสำหรับ update ข้อมูลใหม่ลงในอุปกรณ์
router.put('/data/:deviceId', deviceController.updateDeviceData);

// เส้นทางสำหรับเพิ่มข้อมูลใหม่ลงในอุปกรณ์
router.post('/data/:deviceId', deviceController.addDeviceData); 

// เส้นทางสำหรับดึงข้อมูลใหม่จากอุปกรณ์
router.get('/data/:deviceId', deviceController.getDeviceData);

module.exports = router;