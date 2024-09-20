// config/db.js
const mongoose = require("mongoose");
// เชื่อมต่อฐานข้อมูล MongoDB
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // ปิดโปรเซสหากไม่สามารถเชื่อมต่อได้
  }
};

module.exports = connectDB;