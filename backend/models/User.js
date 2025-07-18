const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, // Hashed
  habits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Habit' }],
  streaks: { type: Map, of: Number },
  notifications: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema); 