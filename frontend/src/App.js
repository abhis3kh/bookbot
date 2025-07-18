import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard user_id="sample_user" /> {/* Replace with auth */}
    </div>
  );
}

export default App; 