export default function NewGameButton({ onNewGame }) {
  return (
    <button className="new-game-btn" onClick={onNewGame}>
      New Game
    </button>
  );
}
