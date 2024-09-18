// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: { type: String, required: true },
//     password: { type: String, required: true },
// }, {
//     timestamps: true,
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
// models/User.js
const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  status: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  devices: DeviceSchema,
});

module.exports = mongoose.model("User", UserSchema);