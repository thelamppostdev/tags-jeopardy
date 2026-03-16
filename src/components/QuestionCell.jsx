export default function QuestionCell({ question, isAnswered, onClick }) {
  return (
    <button
      className={`question-cell ${isAnswered ? 'answered' : ''}`}
      onClick={() => !isAnswered && onClick(question)}
      disabled={isAnswered}
    >
      {isAnswered ? '' : `$${question.value}`}
    </button>
  );
}
