import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [error, setError] = useState("");

  // Fetch comments from backend
 useEffect(() => {
  axios
    .get(`http://localhost:5000/api/posts/${postId}/comments`)
    .then((res) => setComments(res.data))
    .catch(() => setError("Failed to load comments"));
}, [postId]);

const handleAddComment = async () => {
  if (newComment.trim() === "") return;
  try {
    const token = localStorage.getItem("authToken");
    const res = await axios.post(
      `http://localhost:5000/api/posts/${postId}/comments`,
      { content: newComment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setComments([...comments, { content: newComment, id: res.data.commentId }]);
    setNewComment("");
  } catch {
    setError("Failed to add comment");
  }
};

  // Edit a comment
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const commentId = comments[editingIndex].id;
      await axios.put(
        `http://localhost:5000/api/comment/${commentId}`,
        { content: editingText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updated = [...comments];
      updated[editingIndex].content = editingText;
      setComments(updated);
      setEditingIndex(null);
      setEditingText("");
    } catch {
      setError("Failed to edit comment");
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-grow px-4 py-2 rounded border"
        />
        <button
          onClick={handleAddComment}
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Post
        </button>
      </div>
      <div className="space-y-4 mt-5">
        {comments.map((comment, index) => (
          <div
            key={comment.id || index}
            onContextMenu={(e) => {
              e.preventDefault();
              setEditingIndex(index);
              setEditingText(comment.content);
            }}
            className="px-4 py-2 rounded cursor-context-menu hover:bg-gray-200"
          >
            {editingIndex === index ? (
              <form onSubmit={handleEditSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-grow px-2 py-1 rounded border"
                  autoFocus
                />
                <button type="submit" className="text-blue-600 font-semibold">
                  Save
                </button>
              </form>
            ) : (
              <p>{comment.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;