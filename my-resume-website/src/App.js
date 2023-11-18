import React, { useState, useEffect } from 'react';
import './App.css';

import Countdown from './Countdown'; // Import the Countdown component

function App() {
  const [countdownEnded, setCountdownEnded] = useState(false);

  // Calculate the date 30 days from now
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  // Callback function to handle countdown end
  const handleCountdownEnd = () => {
    setCountdownEnded(true);
  };

  useEffect(() => {
    // Do something when the countdown ends
    if (countdownEnded) {
      // For example, you can display a message or load content dynamically
      console.log('Countdown has ended!');
    }
  }, [countdownEnded]);

  return (
    <div className="App">
      {countdownEnded ? (
        <div>
          {/* Display content when the countdown ends */}
          <h1>Countdown has ended!</h1>
          {/* You can add your dynamic content here */}
        </div>
      ) : (
        <Countdown endDate={thirtyDaysFromNow} onCountdownEnd={handleCountdownEnd} />
      )}
    </div>
  );
}

export default App;
