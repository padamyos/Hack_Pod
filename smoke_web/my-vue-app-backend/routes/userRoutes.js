// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// กำหนดเส้นทาง API
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.get("/", userController.getUsers);
router.delete("/:email", userController.deleteUser);
router.put("/:_id", userController.updateUser);
// router.put("/:_id/devices", userController.addDevice);
// เส้นทางสำหรับดึงข้อมูลอุปกรณ์ของผู้ใช้
router.get('/:id/devices', userController.getUserDevices);

module.exports = router;