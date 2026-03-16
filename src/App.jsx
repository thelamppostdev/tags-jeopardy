import { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import QuestionModal from './components/QuestionModal';
import ScoreDisplay from './components/ScoreDisplay';
import NewGameButton from './components/NewGameButton';
import { buildBoard, pickCategories, VALUES } from './data/questions';
import './styles/App.css';

const TOTAL_QUESTIONS = 6 * VALUES.length;

export default function App() {
  const [boardQuestions, setBoardQuestions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [answered, setAnswered] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [celebration, setCelebration] = useState(false);

  const startNewGame = useCallback(() => {
    const cats = pickCategories(6);
    setSelectedCategories(cats);
    setBoardQuestions(buildBoard(cats));
    setAnswered(new Set());
    setActiveQuestion(null);
    setScore(0);
    setCelebration(false);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleSelectQuestion = (question) => {
    setActiveQuestion(question);
  };

  const closeModal = (isCorrect) => {
    if (!activeQuestion) return;

    if (isCorrect) {
      setScore((prev) => prev + activeQuestion.value);
    }

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

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <span className="star-icon">⭐</span>
          <h1 className="app-title">Mayberry Jeopardy!</h1>
          <span className="star-icon">⭐</span>
        </div>
        <div className="header-right">
          <ScoreDisplay score={score} />
          <NewGameButton onNewGame={startNewGame} />
        </div>
      </header>

      {boardQuestions.length > 0 && (
        <Board
          boardQuestions={boardQuestions}
          answered={answered}
          onSelectQuestion={handleSelectQuestion}
          categories={selectedCategories}
        />
      )}

      {celebration && (
        <div className="celebration-banner">
          🎉 All questions answered! Final score: ${score.toLocaleString()} 🎉
          <button className="btn-play-again" onClick={startNewGame}>
            Play Again
          </button>
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
