import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Author1 from "../assets/images/Author/Author1.jpg";
import Author2 from "../assets/images/Author/Author2.jpg";
import Author3 from "../assets/images/Author/Author3.jpg";
import Author4 from "../assets/images/Author/Author4.jpg";

function Authors() {
  const authors = [
    { name: "Floyd Miles", role: "Content Writer @DCP", img: Author1 },
    { name: "Dianne Russell", role: "Content Writer @Joxf", img: Author2 },
    { name: "Jenny Wilson", role: "Content Writer @TheoCamp", img: Author3 },
    { name: "Leslie Alexander", role: "Content Writer @UGV", img: Author4 },
  ];

  return (
    <section className="authors-section p-16 bg-gray-50">
      <h2 className="title text-3xl font-semibold text-center mb-8">List of Authors</h2>
      <div className="author-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {authors.map((author, index) => (
          <div
            key={index}
            className={`author-card text-center p-6 border border-gray-300 rounded-lg shadow-lg transition-all hover:shadow-xl ${index === 1 ? "bg-gray-100" : "bg-white"}`}
          >
            {/* Author Image */}
            <img
              src={author.img}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            {/* Author Name */}
            <h3 className="author-name text-xl font-semibold text-gray-800">{author.name}</h3>
            {/* Author Role */}
            <p className="author-role text-sm text-gray-500">{author.role}</p>
            {/* Social Media Icons */}
            <div className="social-icons flex justify-center gap-4 mt-4">
              <FaFacebook className="text-xl  cursor-pointer" />
              <FaTwitter className="text-xl  cursor-pointer" />
              <FaInstagram className="text-xl cursor-pointer" />
              <FaLinkedin className="text-xl  cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
