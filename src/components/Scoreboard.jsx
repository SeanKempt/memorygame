import PropTypes from 'prop-types';

const ScoreBoard = (props) => {
  const { score } = props;
  const { currentScore, bestScore } = score;
  return (
    <div>
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.object,
};

export default ScoreBoard;
