import React from 'react';
import './styles/timer.css';

const Timer = ({ time }) => {
  return (
    <div className="timer-container">
      <div className="timer">{time}</div>
    </div>
  );
};

export default Timer;
