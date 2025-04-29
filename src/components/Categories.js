import React from "react";

function Categories() {
  const categories = [
    {
      title: "UI & UX Design",
      description: "Master user experience, design principles, and tools like Figma & Adobe XD",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-265 388.9 64 64"
          className="w-6 h-6 fill-current text-white"
        >
          <path d="M-214.3,421.3l-6.6-11.8c-0.3-0.6-0.9-0.9-1.6-0.9h-6.9c-0.9,0-1.6,0.5-2.1,1.3l-7.1,18.9l-3.8-6.6l6.4-11.1c0.3-0.5,0.3-1.1,0-1.6s-0.9-0.9-1.6-0.9h-3.9c-0.7,0-1.3,0.3-1.6,0.9l-6.6,11.8c-0.3,0.6-0.3,1.3,0,1.9l6.6,11.8c0.3,0.6,0.9,0.9,1.6,0.9h6.9c0.9,0,1.6-0.5,2.1-1.3l7.1-18.9l3.8,6.6l-6.4,11.1c-0.3,0.5-0.3,1.1,0,1.6s0.9,0.9,1.6,0.9h3.9c0.7,0,1.3-0.3,1.6-0.9l6.6-11.8C-213.9,422.6-213.9,421.9-214.3,421.3z"/>
        </svg>
      ),
    },
    {
      title: "Coding",
      description: "Learn programming languages, frameworks, and best practices",
      icon: (
        <svg
          className="w-6 h-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8 17l-5-5 5-5v10zm8-10v10l5-5-5-5zm-6.59.41L7 6.83 12.17 12 7 17.17l1.41 1.41L15 12 9.41 7.41z" />
        </svg>
      ),
    },
    {
      title: "Networking & Cloud",
      description: "Master networking fundamentals and cloud technologies",
      icon: (
        <svg
          className="w-6 h-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M19.35 10.04A7.49 7.49 0 005.3 8.25 5.5 5.5 0 006 19h13a4.5 4.5 0 00.35-8.96z" />
        </svg>
      ),
    },
    {
      title: "Cyber security",
      description: "Learn how to secure your applications and network",
      icon: (
        <svg
          className="w-6 h-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM11 14h2v2h-2zm0-6h2v5h-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto text-center p-15">
      <h2 className="text-2xl font-bold mb-6">Choose A Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="mb-4 flex justify-center">
              <span className="w-8 h-8 bg-[#0C0F13] rounded-md flex items-center justify-center">
                {category.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
