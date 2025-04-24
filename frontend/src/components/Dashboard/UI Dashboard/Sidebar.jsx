  // src/components/Sidebar.jsx
  import { NavLink } from "react-router-dom";

  const Sidebar = () => {
    const navItems = [
      { name: "Overview", path: "/dashboard" },
      { name: "Post", path: "/post" },
      { name: "Comments", path: "/comments" },
      { name: "Likes", path: "/likes" },
      { name: "Subscriber", path: "/subscriber" },
      { name: "Writer", path: "/writer" },
    ];

    return (
      <aside className="bg-[#0C0F13] text-white w-60 h-[calc(100vh-4rem)] p-6 flex flex-col justify-between fixed top-16 left-0">
        <div>
          <nav className="space-y-4 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block hover:text-gray-300 cursor-pointer ${
                    isActive ? "font-semibold text-white" : "text-gray-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <button className="text-left hover:text-gray-300 mt-2">Log Out</button>
      </aside>
    );
  };

  export default Sidebar;
