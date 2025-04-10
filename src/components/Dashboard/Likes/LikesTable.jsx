// src/components/LikeTable.jsx
import ActionButtons from './ActionButtons';

const LikeTable = ({ likes, renderActions }) => (
  <div className="overflow-x-auto rounded-md border">
    <table className="min-w-full">
      <thead className="bg-black text-white">
        <tr>
          <th className="text-left px-4 py-2">ID</th>
          <th className="text-left px-4 py-2">User</th>
          <th className="text-left px-4 py-2">Liked Post Title</th>
          <th className="text-left px-4 py-2">Date & Time</th>
          <th className="text-left px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {likes.map((like) => (
          <tr key={like.id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{like.id}</td>
            <td className="px-4 py-2">{like.user}</td>
            <td className="px-4 py-2">{like.likedPostTitle}</td>
            <td className="px-4 py-2">{like.date}</td>
            <td className="px-4 py-2">
              {renderActions(like.id)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LikeTable;
