import React, { useEffect, useMemo } from 'react';
import './App.css';

import Countdown from './Countdown';

function App() {
  // Calculate the date 30 days from now
  const thirtyDaysFromNow = useMemo(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);
    return endDate;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle timer logic here, e.g., display a modal
    }, thirtyDaysFromNow - Date.now());

    return () => clearTimeout(timer);
  }, [thirtyDaysFromNow]);

  return (
    <div className="App">
      {/* Display the Countdown component */}
      <Countdown endDate={thirtyDaysFromNow} />
    </div>
  );
}

export default App;
