const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');
const User = require('../models/User');
const calculate_benefit = require('../utils/calculate_benefit');

// POST /api/habits/track
router.post('/track', async (req, res) => {
  try {
    const { user_id, habit_id, date } = req.body;
    const habit = await Habit.findById(habit_id);
    if (!habit || habit.user_id.toString() !== user_id) {
      return res.status(400).json({ error: 'Invalid habit' });
    }
    habit.progress.push(new Date(date));
    await habit.save();

    // Update streak (simple consecutive check)
    const sortedProgress = habit.progress.sort((a, b) => a - b);
    let streak = 1;
    for (let i = sortedProgress.length - 1; i > 0; i--) {
      if ((sortedProgress[i] - sortedProgress[i-1]) / (1000 * 3600 * 24) === 1) streak++;
      else break;
    }
    const benefits = calculate_benefit(habit.name, streak);
    // TODO: notification_send

    res.json({ streak, benefits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/habits?user_id=...
router.get('/', async (req, res) => {
  try {
    const { user_id } = req.query;
    const habits = await Habit.find({ user_id });
    res.json(habits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 