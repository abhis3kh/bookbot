import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = ({ user_id }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/habits?user_id=${user_id}`)
      .then(res => res.json())
      .then(data => setHabits(data))
      .catch(err => console.error(err));
  }, [user_id]);

  return (
    <div>
      <h1>Habit Dashboard</h1>
      {habits.map(habit => (
        <div key={habit._id}>
          <h2>{habit.name} - Streak: {habit.progress.length}</h2>
          <Line data={habit.benefits.chart} />
          <p>Benefits: {habit.benefits}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard; 