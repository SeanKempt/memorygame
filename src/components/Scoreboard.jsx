import React, { useState } from 'react';

const ScoreBoard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div>
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default ScoreBoard;
