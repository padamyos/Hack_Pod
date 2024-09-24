// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// เส้นทางสำหรับเพิ่มอุปกรณ์ใหม่
router.post('/add', deviceController.addDevice);

module.exports = router;