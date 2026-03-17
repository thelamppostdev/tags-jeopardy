import { useState, useEffect, useRef } from 'react';

export default function ScoreDisplay({ score }) {
  const [displayedScore, setDisplayedScore] = useState(score);
  const [delta, setDelta] = useState(null);
  const rafRef = useRef(null);
  const currentRef = useRef(score);
  const deltaTimerRef = useRef(null);

  useEffect(() => {
    // Snap instantly on new game (reset to 0)
    if (score === 0 && currentRef.current !== 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
      currentRef.current = 0;
      setDisplayedScore(0);
      setDelta(null);
      return;
    }

    const diff = score - currentRef.current;
    if (diff === 0) return;

    // Show delta badge
    if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
    setDelta(diff);
    deltaTimerRef.current = setTimeout(() => setDelta(null), 1200);

    // Cancel any in-flight animation
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const animate = () => {
      const target = score;
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

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [score]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (deltaTimerRef.current) clearTimeout(deltaTimerRef.current);
    };
  }, []);

  return (
    <div className="score-display">
      <span className="score-label">Score</span>
      <div className="score-value-wrap">
        {delta !== null && (
          <span className={`score-delta ${delta > 0 ? 'positive' : 'negative'}`}>
            {delta > 0 ? '+' : ''}{delta.toLocaleString()}
          </span>
        )}
        <span className={`score-value ${displayedScore < 0 ? 'negative' : ''}`}>${displayedScore.toLocaleString()}</span>
      </div>
    </div>
  );
}
