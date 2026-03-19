import { useState, useEffect } from 'react';
import { playReveal } from '../sounds';

function FeedbackPanel({ question }) {
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setNotes('');
    setSaved(false);
  }, [question]);

  async function submit(rating) {
    setSubmitting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question.id,
          category: question.category,
          value: question.value,
          originalClue: question.clue,
          originalAnswer: question.answer,
          rating,
          correctedClue: null,
          correctedAnswer: null,
          notes: notes.trim() || null,
        }),
      });
      setSaved(true);
    } catch (err) {
      console.error('Failed to save feedback', err);
    } finally {
      setSubmitting(false);
    }
  }

  if (saved) {
    return (
      <div className="feedback-panel">
        <span className="feedback-saved">Saved ✓</span>
      </div>
    );
  }

  return (
    <div className="feedback-panel">
      <textarea
        className="feedback-textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add a comment (optional)"
        rows={2}
      />
      <div className="feedback-rating-btns">
        <button
          className="feedback-rate-btn"
          onClick={() => submit('good')}
          disabled={submitting}
        >
          👍 Good question
        </button>
        <button
          className="feedback-rate-btn"
          onClick={() => submit('needs-work')}
          disabled={submitting}
        >
          👎 Needs work
        </button>
      </div>
    </div>
  );
}

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
            <FeedbackPanel question={question} />
          </>
        ) : (
          <button className="btn-reveal" onClick={() => { playReveal(); setShowAnswer(true); }}>
            Reveal Answer
          </button>
        )}
      </div>
    </div>
  );
}
