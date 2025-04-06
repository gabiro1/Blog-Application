import React from "react";

function Categories() {
  const categories = [
    {
      title: "UI & UX Design",
      description: "Master user experience, design principles, and tools like Figma & Adobe XD",
    },
    {
      title: "Coding",
      description: "Learn programming languages, frameworks, and best practices",
    },
    {
      title: "Networking & Cloud",
      description: "Master networking fundamentals and cloud technologies",
    },
    {
      title: "Cyber security",
      description: "Learn how to secure your applications and network",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Choose A Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="mb-4 flex justify-center">
              {/* Placeholder for icon */}
              <span className="w-8 h-8 bg-gray-300 rounded-md"></span>
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
