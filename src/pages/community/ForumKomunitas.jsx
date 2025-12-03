import { useState } from "react";

/* ================== POST ITEM ================== */
function PostItem({ post, handleComment }) {
  const [commentText, setCommentText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    handleComment(e, post.id, commentText, setCommentText);
  };

  return (
    <div className="bg-[#EDFFCD] border border-green-200 rounded-2xl p-5 shadow-lg">
      {/* Header User */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></span>
        <p className="font-semibold text-sm text-gray-800">
          {post.user?.name || "Anonim"}
        </p>
      </div>

      {/* Isi Post */}
      <p className="text-gray-700 text-sm mb-4 leading-snug">{post.content}</p>

      {/* Form Komentar */}
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Balas
      </label>

      <form onSubmit={submit}>
        <textarea
          placeholder="Tulis balasan..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full h-20 resize-none border border-green-200 rounded-lg bg-white focus:ring-1 focus:ring-green-400 p-2 text-sm outline-none"
        />
        <button
          type="submit"
          className="mt-2 px-3 py-1.5 bg-green-500 text-white text-sm rounded-md"
        >
          Balas
        </button>
      </form>

      {/* List Komentar */}
      <div className="mt-3 space-y-1.5">
        {post.comments.length > 0 ? (
          post.comments.map((c) => (
            <div
              key={c.id}
              className="p-2 rounded-lg bg-white text-gray-700 text-sm shadow"
            >
              <strong>{c.user?.name || "Anonim"}:</strong> {c.content}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic text-xs">Belum ada komentar</p>
        )}
      </div>
    </div>
  );
}

/* ================== MAIN FORUM ================== */
export default function ForumKomunitas() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
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

    const updated = posts.map((p) =>
      p.id === postId
        ? {
            ...p,
            comments: [
              ...p.comments,
              {
                id: Date.now(),
                user: { name: "User" },
                content: text,
              },
            ],
          }
        : p
    );

    setPosts(updated);
    setText("");
  };

  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section
      id="forum-komunitas"
      className="min-h-screen flex flex-col items-center w-full px-4 pt-10 bg-[#FCFFEC] relative pb-40"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3B3B0E] mb-6">
        Forum Komunitas
      </h2>

      <div className="max-w-3xl w-full space-y-4 z-10">
        {/* Form Posting */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#EDFFCD] border border-green-200 rounded-2xl p-5 shadow-lg"
        >
          <textarea
            placeholder="Tulis sesuatu..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full h-20 resize-none border border-green-200 rounded-lg bg-white focus:ring-1 focus:ring-green-400 p-3 text-sm outline-none"
          />

          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#A6E272] text-[#224C14] text-sm hover:bg-[#94D45E]"
            >
              Kirim
            </button>
          </div>
        </form>

        {/* List Posting */}
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-1">
          {posts.slice(0, visibleCount).map((post) => (
            <PostItem
              key={post.id}
              post={post}
              handleComment={handleComment}
            />
          ))}

          {visibleCount < posts.length && (
            <div className="flex justify-center mt-3">
              <button
                onClick={loadMore}
                className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600"
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
