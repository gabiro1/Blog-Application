// src/components/PostsTable.jsx
const posts = [
    { id: 1, title: "UX review presentations", author: "David Brown", category: "UI & UX Design", status: "Draft" },
    { id: 2, title: "What is Wireframing?", author: "Sophia Lee", category: "Coding", status: "Published" },
    { id: 3, title: "Keep Hackers Out", author: "James Carter", category: "Cybersecurity", status: "Draft" },
    { id: 4, title: "REST APIs Simplified", author: "Olivia Martin", category: "Coding", status: "Published" },
    { id: 5, title: "Subnetting Made Easy", author: "Emily Johnson", category: "Networking", status: "Published" },
  ];
  
  const PostsTable = () => (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Latest posts</h2>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-black text-white text-left text-sm">
          <tr>
            <th className="p-3">Id</th>
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Category</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b text-sm">
              <td className="p-3">{post.id}</td>
              <td className="p-3 text-blue-600 hover:underline cursor-pointer">{post.title}</td>
              <td className="p-3">{post.author}</td>
              <td className="p-3">{post.category}</td>
              <td className="p-3">
                <span className={`inline-flex items-center gap-2 text-sm ${post.status === 'Published' ? 'text-green-600' : 'text-blue-600'}`}>
                  <span className="w-2 h-2 rounded-full bg-current" /> {post.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default PostsTable;
  