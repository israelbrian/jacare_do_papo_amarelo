import React from 'react';

const Timer = ({ timeLeft }) => (
  <div className="text-2xl font-bold text-white">
    <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}:</span>
    <span>{String(timeLeft % 60).padStart(2, "0")}</span>
  </div>
);

export default Timer;