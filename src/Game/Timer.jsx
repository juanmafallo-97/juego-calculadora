import React from 'react';

const Timer = ({ time }) => {
  return (
    <div className="timer-container">
      <div className="timer">{time}</div>
    </div>
  );
};

export default Timer;
