const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // ใช้สำหรับการเข้ารหัสรหัสผ่าน

// const { isAdmin } = require("./models/authMiddleware");

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
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
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
    res.json({ token, username: user.email , role: user.role });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// API route สำหรับการลงทะเบียนผู้ใช้ใหม่
app.post("/users/register", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // สร้าง salt และ hash รหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password : hashedPassword,
      role
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
  // const createUser = async (email, password, role) => {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = new User({
  //     email,
  //     password: hashedPassword,
  //     role
  //   });
  //   await user.save();
  //   console.log("User created");
    // createUser('asd@gmail.com', '123', 'admin');
    // createUser('normal@gmail.com', '123', 'user');
 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
