function calculate_benefit(habit, duration) {
  let benefit = '';
  if (habit === 'Abstain from FAP') {
    benefit = duration >= 7 ? 'Testosterone +145% (peak at day 7) [PubMed: 12659241]' : 'Minimal change';
  } else if (habit === 'Daily Exercise') {
    benefit = duration >= 7 ? 'Endorphin boost + neurogenesis [PMC: 8392752]' : 'Initial mood elevation';
  }
  // Placeholder visualization data
  const chartData = {
    labels: Array.from({ length: duration }, (_, i) => `Day ${i+1}`),
    datasets: [{ label: 'Progress', data: Array(duration).fill(1) }]
  };
  return { description: benefit, chart: chartData };
}

module.exports = calculate_benefit; 