import { useState, useEffect, useRef } from 'react';

function PlayerCard({ player, isCurrent, isWinner }) {
  const [displayedScore, setDisplayedScore] = useState(player.score);
  const [delta, setDelta] = useState(null);
  const rafRef = useRef(null);
  const currentRef = useRef(player.score);
  const deltaTimerRef = useRef(null);

  useEffect(() => {
    if (player.score === 0 && currentRef.current !== 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
      currentRef.current = 0;
      setDisplayedScore(0);
      setDelta(null);
      return;
    }

    const diff = player.score - currentRef.current;
    if (diff === 0) return;

    if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
    setDelta(diff);
    deltaTimerRef.current = setTimeout(() => setDelta(null), 1200);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const animate = () => {
      const target = player.score;
      const remaining = target - currentRef.current;
      if (Math.abs(remaining) < 1) {
        currentRef.current = target;
        setDisplayedScore(target);
        return;
      }
      currentRef.current = currentRef.current + remaining * 0.12;
      setDisplayedScore(Math.round(currentRef.current));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [player.score]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
    };
  }, []);

  return (
    <div className={`player-card${isCurrent ? ' current-player' : ''}${isWinner ? ' winner-player' : ''}`}>
      {isCurrent && <div className="player-turn-indicator">YOUR TURN</div>}
      {isWinner && <div className="player-turn-indicator winner-label">WINNER!</div>}
      <span className="player-name">{player.name}</span>
      <div className="score-value-wrap">
        {delta !== null && (
          <span className={`score-delta ${delta > 0 ? 'positive' : 'negative'}`}>
            {delta > 0 ? '+' : ''}{delta.toLocaleString()}
          </span>
        )}
        <span className={`score-value ${displayedScore < 0 ? 'negative' : ''}`}>
          ${displayedScore.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default function Scoreboard({ players, currentPlayerIndex, winnerIndex }) {
  return (
    <div className="scoreboard">
      {players.map((player, i) => (
        <PlayerCard
          key={i}
          player={player}
          isCurrent={winnerIndex === undefined && i === currentPlayerIndex}
          isWinner={winnerIndex !== undefined && i === winnerIndex}
        />
      ))}
    </div>
  );
}
