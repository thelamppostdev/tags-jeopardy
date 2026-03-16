export default function ScoreDisplay({ score }) {
  return (
    <div className="score-display">
      <span className="score-label">Score</span>
      <span className="score-value">${score.toLocaleString()}</span>
    </div>
  );
}
