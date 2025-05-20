import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentTable = ({ renderActions }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/comment/")
      .then(res => setComments(res.data))
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="min-w-full table-auto">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Comment</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{comment.author_id}</td>
              <td className="px-4 py-2">{comment.content}</td>
              <td className="px-4 py-2">{comment.post_id}</td>
              <td className="px-4 py-2">
                {renderActions && renderActions(comment.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentTable;