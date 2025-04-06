import React from "react";

function AllPosts() {
  const posts = [
    { title: "How To Build Confidence In Your UX Work", date: "Aug 23, 2021" },
    { title: "How to Build a Secure and Scalable API with Django and FastAPI", date: "Aug 23, 2021" },
    { title: "Exploring the Best Cloud Platforms for DevOps in 2025", date: "Aug 23, 2021" },
    { title: "Mastering Git: Best Practices for Effective Version Control", date: "March 15, 2025" }
  ];

  return (
    <section className="all-posts">
      <h2>All Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AllPosts;
