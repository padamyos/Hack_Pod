// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// เส้นทางสำหรับเพิ่มอุปกรณ์ใหม่
router.get('/:ownerId', deviceController.getDevicesByOwner);
router.post('/add', deviceController.addDevice);
router.delete('/:deviceId', deviceController.deleteDevice);


module.exports = router;