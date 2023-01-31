import { useState, useEffect } from 'react';
import ScoreBoard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import GameOverModal from './components/GameOver';

const App = () => {
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });
  const [gameover, setGameOver] = useState(false);

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
    return score;
  };

  const changeGameStatus = () => {
    if (gameover === false) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  };

  useEffect(() => {
    if (score.currentScore > score.bestScore) {
      setScore({
        ...score,
        bestScore: score.currentScore,
      });
    }

    if (score.currentScore > 7) {
      setGameOver(true);
    }
  }, [score]);

  // leverage useEffect to bring the bestScore up to date with the currentScore
  return (
    <div>
      <GameOverModal
        show={gameover}
        onHide={() => {
          setGameOver(false);
        }}
      />
      <header className="header text-bg-dark">
        <h1 className="mx-5">Memory Game</h1>
        <div className="scoreboard mx-5">
          <ScoreBoard score={score} />
        </div>
      </header>
      <main className="main-content d-flex align-items-center">
        <CardContainer
          increaseScore={increaseScore}
          resetScore={resetScore}
          changeGameStatus={changeGameStatus}
        />
      </main>
      <footer className="footer d-flex justify-content-center align-items-center text-bg-dark">
        <p>Made by Sean Kempt</p>
      </footer>
    </div>
  );
};

export default App;
