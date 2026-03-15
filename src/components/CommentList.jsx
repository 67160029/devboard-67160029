import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );

      const data = await res.json();

      setComments(data);
      setLoading(false);
    }

    fetchComments();
  }, [postId]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <strong>ความคิดเห็น</strong>

      {comments.map((c) => (
        <div key={c.id}>
          <b>{c.name}</b>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
