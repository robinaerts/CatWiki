const Score = (props) => {
  let score = props.score || 0;
  return (
    <div id="score-pieces-container">
      {Array(score).fill(
        <div className="score-piece score-piece-filled"></div>
      )}
      {Array(5 - score).fill(
        <div className="score-piece score-piece-empty"></div>
      )}
    </div>
  );
};

export default Score;
