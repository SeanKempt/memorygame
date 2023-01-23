import ScoreBoard from './components/Scoreboard';
import CardContainer from './components/CardContainer';

const App = () => (
  <div className="wrapper">
    <header className="header">
      <h1>Memory Game</h1>
      <div className="scoreboard">
        <ScoreBoard />
      </div>
    </header>
    <main className="main-content">
      <CardContainer />
    </main>
    <footer className="footer">
      <p>Made by Sean Kempt</p>
    </footer>
  </div>
);

export default App;
