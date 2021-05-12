import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const StatusDisplay = ({ status, displayText }) => {
  const currentStatus = useSelector((state) => state[status]);
  const statusRef = useRef(null);

  useEffect(() => {
    statusRef.current.classList.add('highlight');
    const timeout = setTimeout(() => {
      statusRef.current.classList.remove('highlight');
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentStatus]);

  return (
    <div className="status-container">
      <p>{`${displayText} :`}</p>
      <p className="status" ref={statusRef}>
        {currentStatus}
      </p>
    </div>
  );
};

export default StatusDisplay;
