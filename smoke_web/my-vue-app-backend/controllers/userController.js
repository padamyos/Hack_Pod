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
    res.json({ token, username: user.email, role: user.role , _id: user._id});
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  console.log("Registering user: ", email, role);  // ตรวจสอบข้อมูลที่ส่งมา

  try {
    // สร้าง salt และ hash รหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: hashedPassword,
      role
    });
    
    console.log("Saving user to database");
    await user.save();  // ตรวจสอบการบันทึกในฐานข้อมูล
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user: ", error);  // log ข้อผิดพลาด
    
    // ตรวจสอบถ้าอีเมลซ้ำ
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    
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

// // ฟังก์ชันสำหรับเพิ่มอุปกรณ์ให้กับผู้ใช้
// exports.addDevice = async (req, res) => {
//   const userId = req.params._id; 
//   const { position, status } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // เพิ่มอุปกรณ์ใหม่เข้าไปในอาร์เรย์ devices
//     user.devices.push({ position, status });
//     await user.save();

//     res.status(201).json({ message: "Device added successfully", devices: user.devices });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
// ดึงข้อมูลอุปกรณ์ทั้งหมดของผู้ใช้
exports.getUserDevices = async (req, res) => {
  const userId = req.params.id;

  try {
    // หา user และ populate อุปกรณ์ของ user
    const user = await User.findById(userId).populate('devices');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.devices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user devices', error });
  }
};