import { useState, useEffect } from 'react';

export default function QuestionModal({ question, onCorrect, onWrong }) {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  if (!question) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onWrong()}>
      <div className="modal-card">
        <div className="modal-category">{question.category}</div>
        <div className="modal-value">${question.value}</div>
        <div className="modal-clue">{question.clue}</div>

        {showAnswer ? (
          <>
            <div className="modal-answer">{question.answer}</div>
            <div className="modal-buttons">
              <button className="btn-correct" onClick={onCorrect}>
                ✓ Correct
              </button>
              <button className="btn-wrong" onClick={onWrong}>
                ✗ Wrong / Pass
              </button>
            </div>
          </>
        ) : (
          <button className="btn-reveal" onClick={() => setShowAnswer(true)}>
            Reveal Answer
          </button>
        )}
      </div>
    </div>
  );
}
