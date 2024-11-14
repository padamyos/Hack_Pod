const DeviceData = require("../models/DeviceData");



// ฟังก์ชันเพิ่มข้อมูลใหม่จากเซนเซอร์
exports.addDeviceData = async (req, res) => {
  const { deviceId, pm1, pm2_5, pm10, temperature, humidity, co2, ammonia, gas } = req.body;

  try {
    // สร้าง object ข้อมูลใหม่
    const newDeviceData = new DeviceData({
      deviceId,
      pm1,
      pm2_5,
      pm10,
      temperature,
      humidity,
      co2,
      ammonia,
      gas
    });

    // บันทึกข้อมูลในฐานข้อมูล
    await newDeviceData.save();
    res.status(201).json({ message: "Data added successfully", newDeviceData });
  } catch (error) {
    res.status(500).json({ message: "Error adding device data", error });
  }
};

// ฟังก์ชันดึงข้อมูล DeviceData ตาม deviceId
exports.getDeviceDataByDeviceId = async (req, res) => {
  const { deviceId } = req.params;

  try {
    const data = await DeviceData.find({ deviceId });
    if (!data) {
      return res.status(404).json({ message: "Device data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching device data", error });
  }

  
};


// ฟังก์ชันสำหรับสรุปข้อมูล DeviceData ทุกๆ 1 ชั่วโมง
exports.getHourlySummary = async (req, res) => {
    const { deviceId } = req.params;
    try {
      const results = await DeviceData.aggregate([
        { 
          $match: { deviceId } // กรองข้อมูลตาม deviceId ที่ได้รับจากพารามิเตอร์
        },
        { 
          $group: {
            _id: { 
              year: { $year: "$timestamp" },
              month: { $month: "$timestamp" },
              day: { $dayOfMonth: "$timestamp" },
              hour: { $hour: "$timestamp" }
            },
            avgTemperature: { $avg: "$temperature" },
            avgHumidity: { $avg: "$humidity" }
          }
        },
        { 
          $sort: { "_id": -1 } // เรียงลำดับตามเวลา จากใหม่ไปเก่า
        },
        {
          $limit: 100 // จำกัดข้อมูลให้ไม่เกิน 100 รายการ
        }
      ]);
  
      res.status(200).json(results); // ส่งผลลัพธ์กลับไปให้ frontend
    } catch (error) {
      res.status(500).json({ message: "Error fetching summary data", error });
    }
  };