import { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import QuestionModal from './components/QuestionModal';
import Scoreboard from './components/Scoreboard';
import NewGameButton from './components/NewGameButton';
import SheriffBadge from './components/SheriffBadge';
import PlayerSetup from './components/PlayerSetup';
import { buildBoard, pickCategories, VALUES } from './data/questions';
import './styles/App.css';

const TOTAL_QUESTIONS = 6 * VALUES.length;

export default function App() {
  const [boardQuestions, setBoardQuestions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [answered, setAnswered] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [celebration, setCelebration] = useState(false);

  const initBoard = useCallback(() => {
    const cats = pickCategories(6);
    setSelectedCategories(cats);
    setBoardQuestions(buildBoard(cats));
    setAnswered(new Set());
    setActiveQuestion(null);
    setCelebration(false);
  }, []);

  const startGame = useCallback((playerList) => {
    setPlayers(playerList);
    setCurrentPlayerIndex(0);
    setGameStarted(true);
    initBoard();
  }, [initBoard]);

  const startNewGame = useCallback(() => {
    setGameStarted(false);
    setCelebration(false);
  }, []);

  const handleBadgeClick = () => {
    if (!gameStarted || celebration) return;
    setPlayers(prev =>
      prev.map(p => ({ ...p, score: Math.floor(Math.random() * 3200) - 200 }))
    );
    setCelebration(true);
  };

  // Initialize board data on mount so it's ready when game starts
  useEffect(() => {
    initBoard();
  }, [initBoard]);

  const handleSelectQuestion = (question) => {
    setActiveQuestion(question);
  };

  const closeModal = (isCorrect) => {
    if (!activeQuestion) return;

    setPlayers((prev) => {
      const next = [...prev];
      const updated = { ...next[currentPlayerIndex] };
      if (isCorrect) {
        updated.score += activeQuestion.value;
      } else {
        updated.score -= activeQuestion.value;
      }
      next[currentPlayerIndex] = updated;
      return next;
    });

    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);

    setAnswered((prev) => {
      const next = new Set(prev);
      next.add(activeQuestion.id);
      if (next.size === TOTAL_QUESTIONS) {
        setCelebration(true);
      }
      return next;
    });

    setActiveQuestion(null);
  };

  const winnerIndex = celebration
    ? players.reduce((best, p, i) => (p.score > players[best].score ? i : best), 0)
    : undefined;

  const rankedPlayers = celebration
    ? [...players].sort((a, b) => b.score - a.score)
    : [];

  if (!gameStarted) {
    return <PlayerSetup onStart={startGame} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <SheriffBadge size={64} onClick={handleBadgeClick} />
          <h1 className="app-title">Mayberry Jeopardy!</h1>
        </div>
        <div className="header-right">
          <NewGameButton onNewGame={startNewGame} />
        </div>
      </header>

      <Scoreboard
        players={players}
        currentPlayerIndex={currentPlayerIndex}
        winnerIndex={winnerIndex}
      />

      {players.length > 1 && !celebration && (
        <div className="current-player-banner">
          {players[currentPlayerIndex].name}'s Turn
        </div>
      )}

      {boardQuestions.length > 0 && (
        <Board
          boardQuestions={boardQuestions}
          answered={answered}
          onSelectQuestion={handleSelectQuestion}
          categories={selectedCategories}
        />
      )}

      {celebration && (
        <div className="celebration-overlay">
          <div className="celebration-card">
            {players.length > 1 ? (
              <>
                <div className="winner-crown">🏆</div>
                <div className="winner-label-text">Winner!</div>
                <div className="winner-name">{rankedPlayers[0].name}</div>
                <div className="winner-score">${rankedPlayers[0].score.toLocaleString()}</div>
                {rankedPlayers.length > 1 && (
                  <>
                    <div className="celebration-divider" />
                    <div className="celebration-rankings">
                      {rankedPlayers.slice(1).map((p, i) => (
                        <div key={p.name} className="celebration-rank">
                          <span className="rank-position">#{i + 2}</span>
                          <span className="rank-name">{p.name}</span>
                          <span className="rank-score">${p.score.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="winner-crown">🎬</div>
                <div className="winner-label-text">Game Over!</div>
                <div className="winner-name">{rankedPlayers[0]?.name}</div>
                <div className="winner-score">${rankedPlayers[0]?.score.toLocaleString()}</div>
              </>
            )}
            <button className="btn-play-again" onClick={startNewGame}>Play Again</button>
          </div>
        </div>
      )}

      <QuestionModal
        question={activeQuestion}
        onCorrect={() => closeModal(true)}
        onWrong={() => closeModal(false)}
      />
    </div>
  );
}
