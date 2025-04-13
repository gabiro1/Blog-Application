import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleRightClick = (index, e) => {
    e.preventDefault(); // Prevent default context menu
    setEditingIndex(index);
    setEditingText(comments[index]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = [...comments];
    updated[editingIndex] = editingText;
    setComments(updated);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      

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
            key={index}
            onContextMenu={(e) => handleRightClick(index, e)}
            className=" px-4 py-2 rounded cursor-context-menu hover:bg-gray-200"
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
              <p>{comment}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
