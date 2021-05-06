import React, { useState, useEffect } from 'react';
import Timer from './Timer';

export default function OnGame() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <div className="ongame-container">
      <Timer time={time} />
      <span>Jugando...</span>
    </div>
  );
}
