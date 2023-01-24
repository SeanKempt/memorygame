import { useState, useEffect } from 'react';
import ScoreBoard from './components/Scoreboard';
import CardContainer from './components/CardContainer';

const App = () => {
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  const increaseScore = () => {
    setScore({
      ...score,
      currentScore: score.currentScore + 1,
    });
    return score;
  };

  const resetScore = () => {
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  useEffect(() => {
    if (score.currentScore > score.bestScore) {
      setScore({
        ...score,
        bestScore: score.currentScore,
      });
    }
  }, [score]);

  // leverage useEffect to bring the bestScore up to date with the currentScore

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Memory Game</h1>
        <div className="scoreboard">
          <ScoreBoard score={score} />
        </div>
      </header>
      <main className="main-content">
        <CardContainer increaseScore={increaseScore} resetScore={resetScore} />
      </main>
      <footer className="footer">
        <p>Made by Sean Kempt</p>
      </footer>
    </div>
  );
};

export default App;
