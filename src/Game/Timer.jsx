import React from 'react';

const Timer = ({ time }) => {
  return (
    <div className="timer-container">
      <p className="timer-text">Tiempo Restante</p>
      <div className="timer">{time}</div>
    </div>
  );
};

export default Timer;
