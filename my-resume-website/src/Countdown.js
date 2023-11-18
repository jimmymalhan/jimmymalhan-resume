import React, { useEffect, useState, useCallback } from 'react';
import './Countdown.css';

function Countdown({ endDate }) {
  // Define a useCallback for calculateTimeLeft to prevent unnecessary re-renders
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown-container">
      <h2>Countdown Timer</h2>
      <div className="countdown">
        <div className="countdown-item">
          <span>{days}</span>
          <span>Days</span>
        </div>
        <div className="countdown-item">
          <span>{hours}</span>
          <span>Hours</span>
        </div>
        <div className="countdown-item">
          <span>{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="countdown-item">
          <span>{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
