import CategoryHeader from './CategoryHeader';
import QuestionCell from './QuestionCell';
import { VALUES } from '../data/questions';

export default function Board({ boardQuestions, answered, onSelectQuestion, categories }) {
  return (
    <div className="board">
      {/* Header row */}
      {categories.map((cat) => (
        <CategoryHeader key={cat} name={cat} />
      ))}

      {/* Question rows: one row per value */}
      {VALUES.map((value) =>
        categories.map((cat) => {
          const q = boardQuestions.find(
            (q) => q.category === cat && q.value === value
          );
          if (!q) return <div key={`${cat}-${value}`} className="question-cell empty" />;
          return (
            <QuestionCell
              key={q.id}
              question={q}
              isAnswered={answered.has(q.id)}
              onClick={onSelectQuestion}
            />
          );
        })
      )}
    </div>
  );
}
