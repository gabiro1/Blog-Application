// src/components/Sidebar.jsx
const Sidebar = () => (
  <aside className="bg-[#0C0F13] text-white w-60 h-[calc(100vh-4rem)] p-6 flex flex-col justify-between fixed top-16 left-0">
    <div>
      <nav className="space-y-4 text-sm">
        {["Overview", "Post", "Comments", "Likes", "Subscriber", "Writer"].map((item) => (
          <div key={item} className="hover:text-gray-300 cursor-pointer">{item}</div>
        ))}
      </nav>
    </div>
    <button className="text-left hover:text-gray-300 mt-2">Log Out</button>
  </aside>
);

export default Sidebar;
