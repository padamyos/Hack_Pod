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

module.exports = router;