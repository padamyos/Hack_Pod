const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // ใช้สำหรับการเข้ารหัสรหัสผ่าน

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const uri =
  "mongodb+srv://padamyos:bT64LZE2DOmsxSHr@cluster0.225dn.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);


// API route สำหรับการล็อกอิน
app.post("/users/login", async (req, res) => {
  const { email, password } = req.body; // ตรวจสอบว่าข้อมูลถูกส่งมาใน req.body
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = "yourGeneratedToken";
    res.json({ token, username: user.email });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// API route สำหรับการลงทะเบียนผู้ใช้ใหม่
app.post("/users/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    // ตรวจสอบว่าผู้ใช้งานมีอยู่แล้วหรือไม่
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // เข้ารหัสรหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // สร้างผู้ใช้ใหม่
    user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
