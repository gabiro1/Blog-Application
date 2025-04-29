import { postsData } from '../../Data/postsData';
import { useNavigate } from 'react-router-dom';

const PostsTable = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Latest posts</h2>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-black text-white text-left text-sm">
          <tr>
            <th className="p-3 whitespace-nowrap">Id</th>
            <th className="p-3 whitespace-nowrap">Title</th>
            <th className="p-3 whitespace-nowrap">Author</th>
            <th className="p-3 whitespace-nowrap">Category</th>
            <th className="p-3 whitespace-nowrap">Status</th>
          </tr>
        </thead>
        <tbody>
          {postsData.slice(0, 4).map((post) => (
            <tr key={post.id} className="border-b text-sm">
              <td className="p-3">{post.id}</td>
              <td
                className="p-3 text-blue-600 hover:underline cursor-pointer truncate max-w-[200px]"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {post.title}
              </td>
              <td className="p-3">{post.author}</td>
              <td className="p-3">{post.category}</td>
              <td className="p-3">
                <span
                  className={`inline-flex items-center gap-2 text-sm ${
                    post.status === 'Published' ? 'text-green-600' : 'text-blue-600'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />{' '}
                  {post.status || 'Draft'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
