import React, { useEffect, useState, useCallback } from 'react';

function Countdown({ endDate, onCountdownEnd }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      onCountdownEnd(); // Call the callback function when the countdown ends
    }

    return timeLeft;
  }, [endDate, onCountdownEnd]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, calculateTimeLeft]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </div>
    </div>
  );
}

export default Countdown;
