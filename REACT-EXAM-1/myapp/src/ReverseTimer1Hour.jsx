import React, { useState, useEffect } from 'react';

const ReverseTimer1Hour = () => {
  const [time, setTime] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return <h1 className="timer">{formatTime(time)}</h1>;
};

export default ReverseTimer1Hour;
