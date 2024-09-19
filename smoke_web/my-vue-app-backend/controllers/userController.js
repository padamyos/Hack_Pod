// controllers/userController.js
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ฟังก์ชันสำหรับล็อกอินผู้ใช้
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = "yourGeneratedToken"; // สร้าง token ของจริงตามที่คุณต้องการ
    res.json({ token, username: user.email, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "email password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ฟังก์ชันสำหรับลบผู้ใช้
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.email;
    await User.findByIdAndDelete(userId);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ฟังก์ชันสำหรับอัพเดทผู้ใช้
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params._id;
    const { email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { email, password },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
