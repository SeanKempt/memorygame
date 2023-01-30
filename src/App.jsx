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
    showModal(); // remove this after testing the modal further
    return score;
  };

  const resetScore = () => {
    setScore({
      ...score,
      currentScore: 0,
    });
    return score;
  };

  const showModal = () => {
    if (score.currentScore === 2) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (score.currentScore > score.bestScore) {
      setScore({
        ...score,
        bestScore: score.currentScore,
      });
    }
    console.log(gameover);
  }, [score, gameover]);

  // leverage useEffect to bring the bestScore up to date with the currentScore
  if (gameover === true) {
    return (
      <div>
        <GameOverModal
          show={gameover}
          onHide={() => {
            setGameOver(false);
          }}
        />
        <div>
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
            />
          </main>
          <footer className="footer d-flex justify-content-center align-items-center text-bg-dark">
            <p>Made by Sean Kempt</p>
          </footer>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header className="header text-bg-dark">
        <h1 className="mx-5">Memory Game</h1>
        <div className="scoreboard mx-5">
          <ScoreBoard score={score} />
        </div>
      </header>
      <main className="main-content d-flex align-items-center">
        <CardContainer increaseScore={increaseScore} resetScore={resetScore} />
      </main>
      <footer className="footer d-flex justify-content-center align-items-center text-bg-dark">
        <p>Made by Sean Kempt</p>
      </footer>
    </div>
  );
};

export default App;
