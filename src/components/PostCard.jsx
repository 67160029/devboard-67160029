import { useState } from "react";
import CommentList from "./CommentList";

function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{post.title}</h3>

      <p>{post.body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        style={{ marginLeft: "10px" }}
      >
        {showComments ? "ซ่อนความคิดเห็น" : "ดูความคิดเห็น"}
      </button>

      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;
