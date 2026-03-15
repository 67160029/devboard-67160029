function PostCard({ title, body, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
      </button>
    </div>
  );
}

export default PostCard;
