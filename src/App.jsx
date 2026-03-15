import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import UserCard from "./components/UserCard";

const INITIAL_POSTS = [
  { id: 1, title: "React คืออะไร?", body: "React เป็น library UI" },
  { id: 2, title: "JSX คืออะไร?", body: "เขียน HTML ใน JS" },
  { id: 3, title: "Props คืออะไร?", body: "ส่งข้อมูลระหว่าง component" },
];

const USERS = [
  { id: 1, name: "สมชาย", email: "somchai@dev.com" },
  { id: 2, name: "สมหญิง", email: "somying@dev.com" },
];

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [favorites, setFavorites] = useState([]);

  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  }

  function handleAddPost({ title, body }) {
    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div>
      <Navbar favoriteCount={favorites.length} />

      <AddPostForm onAddPost={handleAddPost} />

      <PostList
        posts={posts}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />

      <h2>สมาชิก</h2>

      {USERS.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
