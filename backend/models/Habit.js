const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  start_date: { type: Date, required: true },
  duration: { type: Number, default: 0 },
  benefits: { type: String },
  progress: [{ type: Date }],
  reminders: { type: Boolean, default: false }
});

module.exports = mongoose.model('Habit', habitSchema); 