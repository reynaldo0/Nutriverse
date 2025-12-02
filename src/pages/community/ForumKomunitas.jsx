import { useState } from "react";

// Komponen PostItem berada DI DALAM file ini
function PostItem({ post, handleComment }) {
  const [commentText, setCommentText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    handleComment(e, post.id, commentText, setCommentText);
  };

  return (
    <div className="bg-[#EDFFCD] border border-green-200 rounded-3xl p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-5 h-5 rounded-full bg-green-600 animate-pulse"></span>
        <p className="font-semibold text-lg text-gray-800">
          {post.user?.name || "Anonim"}
        </p>
      </div>

      <p className="text-gray-700 text-lg mb-6">{post.content}</p>

      {/* Form Komentar */}
      <label className="block text-lg font-medium text-gray-600 mb-2">
        Balas
      </label>

      <form onSubmit={submit}>
        <textarea
          placeholder="Tulis balasan..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full h-28 resize-none border-none rounded-xl bg-white focus:ring-2 focus:ring-green-400 p-4 outline-none text-base"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Balas
        </button>
      </form>

      {/* List Komentar */}
      <div className="mt-4 space-y-2">
        {post.comments.length > 0 ? (
          post.comments.map((c) => (
            <div
              key={c.id}
              className="p-3 rounded-xl bg-white text-gray-700 shadow"
            >
              <strong>{c.user?.name || "Anonim"}:</strong> {c.content}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Belum ada komentar</p>
        )}
      </div>
    </div>
  );
}

export default function ForumKomunitas() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      user: { name: "User" },
      content: newPost,
      comments: [],
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleComment = (e, postId, text, setText) => {
    e.preventDefault();

    if (!text.trim()) return;

    const updated = posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now(),
              user: { name: "User" },
              content: text,
            },
          ],
        };
      }
      return p;
    });

    setPosts(updated);
    setText("");
  };

  const loadMore = () => setVisibleCount((prev) => prev + 2);

  return (
    <section
      id="forum-komunitas"
      className="min-h-screen flex flex-col items-center w-full px-6 pt-16 bg-[#FCFFEC] relative pb-60"
    >
      <h2 className="text-6xl md:text-7xl font-bold text-center text-[#3B3B0E] mb-12 tracking-wide">
        Forum Komunitas
      </h2>

      <div className="max-w-5xl w-full space-y-6 z-10">
        {/* Form Posting */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#EDFFCD] border border-green-200 rounded-3xl p-8 shadow-2xl"
        >
          <textarea
            placeholder="Tulis sesuatu..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full h-28 resize-none border-none rounded-xl bg-white focus:ring-2 focus:ring-green-400 p-4 outline-none text-base"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#A6E272] text-[#224C14] hover:bg-[#94D45E] transition"
            >
              Kirim
            </button>
          </div>
        </form>

        {/* List Posting */}
        <div className="max-h-[600px] overflow-y-auto space-y-6">
          {posts.slice(0, visibleCount).map((post) => (
            <PostItem key={post.id} post={post} handleComment={handleComment} />
          ))}

          {visibleCount < posts.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMore}
                className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600"
              >
                Lihat Post Lainnya
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
