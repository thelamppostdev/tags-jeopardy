import { useState, useEffect } from 'react';

function FeedbackPanel({ question }) {
  const [rating, setRating] = useState(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [correctedAnswer, setCorrectedAnswer] = useState('');
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setRating(null);
    setShowCorrection(false);
    setCorrectedAnswer('');
    setNotes('');
    setSaved(false);
  }, [question]);

  async function handleSubmit() {
    if (!rating && !correctedAnswer.trim() && !notes.trim()) return;
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
          rating: rating,
          correctedClue: null,
          correctedAnswer: correctedAnswer.trim() || null,
          notes: notes.trim() || null,
        }),
      });
      setSaved(true);
      setShowCorrection(false);
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
      <div className="feedback-rating-btns">
        <button
          className={`feedback-rate-btn${rating === 'good' ? ' active-good' : ''}`}
          onClick={() => setRating(rating === 'good' ? null : 'good')}
        >
          👍 Good question
        </button>
        <button
          className={`feedback-rate-btn${rating === 'needs-work' ? ' active-needs-work' : ''}`}
          onClick={() => setRating(rating === 'needs-work' ? null : 'needs-work')}
        >
          👎 Needs work
        </button>
      </div>

      {!showCorrection && (
        <button className="feedback-correction-toggle" onClick={() => setShowCorrection(true)}>
          ✏️ Suggest correction
        </button>
      )}

      {showCorrection && (
        <div className="feedback-correction-form">
          <textarea
            className="feedback-textarea"
            value={correctedAnswer}
            onChange={(e) => setCorrectedAnswer(e.target.value)}
            placeholder={`Corrected answer (original: ${question.answer})`}
            rows={2}
          />
          <textarea
            className="feedback-textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Why is this wrong? (optional)"
            rows={2}
          />
        </div>
      )}

      {(rating || showCorrection) && (
        <button
          className="feedback-submit-btn"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? 'Saving…' : 'Submit feedback'}
        </button>
      )}
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
          <button className="btn-reveal" onClick={() => setShowAnswer(true)}>
            Reveal Answer
          </button>
        )}
      </div>
    </div>
  );
}
