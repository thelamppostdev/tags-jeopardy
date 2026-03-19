import { useState } from 'react';

export default function PlayerSetup({ onStart }) {
  const [count, setCount] = useState(2);
  const [names, setNames] = useState(['Player 1', 'Player 2', 'Player 3', 'Player 4']);

  const handleNameChange = (i, val) => {
    setNames((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleStart = () => {
    const players = names.slice(0, count).map((name) => ({
      name: name.trim() || `Player ${names.indexOf(name) + 1}`,
      score: 0,
    }));
    onStart(players);
  };

  return (
    <div className="player-setup">
      <div className="setup-card">
        <h2 className="setup-title">Who's Playing?</h2>

        <div className="setup-count-row">
          <span className="setup-label">Number of Players</span>
          <div className="setup-count-btns">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`setup-count-btn${count === n ? ' active' : ''}`}
                onClick={() => setCount(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="setup-names">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="setup-name-row">
              <label className="setup-player-label">Player {i + 1}</label>
              <input
                className="setup-name-input"
                type="text"
                value={names[i]}
                onChange={(e) => handleNameChange(i, e.target.value)}
                maxLength={20}
                placeholder={`Player ${i + 1}`}
              />
            </div>
          ))}
        </div>

        <button className="setup-start-btn" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}
