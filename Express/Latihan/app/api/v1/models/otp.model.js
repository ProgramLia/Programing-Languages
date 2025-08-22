// models/Otp.js

const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref:'User',
    required: [true , 'Wajib mengisis user_id'],
  },
  secret: {
    type: String,
    required: [true, 'Wajib memasukkan secret OTP'],
  },
  expiresAt: {
    type: Date,
    required: [true , 'Wajib memasukkan tanggal expire'],
  },
  verified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Otp', otpSchema);
