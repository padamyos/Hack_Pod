// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

// เรียกใช้ฟังก์ชันเชื่อมต่อกับ MongoDB
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const userRoutes = require("./routes/userRoutes");
const deviceRoutes  = require("./routes/deviceRoutes");


app.use("/users", userRoutes);
app.use("/devices",deviceRoutes  );

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
