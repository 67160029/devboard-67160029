import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostCount from "./PostCount";
import LoadingSpinner from "./LoadingSpinner";
import { useFavorites } from "../context/FavoritesContext";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const { favorites, toggleFavorite } = useFavorites();

  async function fetchPosts() {
    // Task3 Challenge 1  ระดับ 1 — ปุ่มโหลดใหม่
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");
      const data = await res.json();
      setPosts(data.slice(0, 20)); // เอาแค่ 20 รายการแรก
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  // Task3 Challenge 1  ระดับ 1 — ปุ่มโหลดใหม่
  useEffect(() => {
    fetchPosts();
  }, []); // [] = ทำครั้งเดียวตอน component mount

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div
        style={{
          padding: "1.5rem",
          background: "#fff5f5",
          border: "1px solid #fc8181",
          borderRadius: "8px",
          color: "#c53030",
        }}
      >
        เกิดข้อผิดพลาด: {error}
      </div>
    );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        <h2 style={{ margin: 0, color: "#e2e8f0" }}>โพสต์ล่าสุด</h2>

        <button
          onClick={fetchPosts}
          style={{
            border: "1px solid #2f46a6",
            background: "#2f46a6",
            color: "white",
            cursor: "pointer",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            fontSize: "0.9rem",
          }}
        >
          🔄 โหลดใหม่
        </button>
      </div>

      <PostCount count={filtered.length} />

      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "1rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      />

      {filtered.length === 0 && (
        <p style={{ color: "#718096", textAlign: "center", padding: "2rem" }}>
          ไม่พบโพสต์ที่ค้นหา
        </p>
      )}

      {filtered.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => ToggleFavorite(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
