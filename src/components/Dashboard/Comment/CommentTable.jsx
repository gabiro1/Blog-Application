import StatusBadge from './StatusBadge';
import ActionButtons from './ActionButtons';

const CommentTable = ({ comments, renderActions }) => (
  <div className="overflow-x-auto rounded-md border">
    <table className="min-w-full table-auto">
      <thead className="bg-black text-white">
        <tr>
          <th className="px-4 py-2">User</th>
          <th className="px-4 py-2">Comment</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <tr key={comment.id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{comment.user}</td>
            <td className="px-4 py-2">{comment.comment}</td>
            <td className="px-4 py-2">{comment.title}</td>
            <td className="px-4 py-2">
              <StatusBadge status={comment.status} />
            </td>
            <td className="px-4 py-2">
              {renderActions(comment.id)} {/* Render the actions passed as a prop */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CommentTable;
