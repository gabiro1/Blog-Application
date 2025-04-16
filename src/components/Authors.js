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
    <section
      className="p-10 min-h-screen flex flex-col items-center justify-center text-white mt-10"
      style={{
        backgroundColor: "#111927",
        backgroundImage: `
          radial-gradient(at 47% 33%, hsl(162, 77%, 40%) 0, transparent 59%),
          radial-gradient(at 82% 65%, hsl(218, 39%, 11%) 0, transparent 70%)
        `,
      }}
    >
      <h2 className="text-3xl font-semibold text-center mb-12">List of Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl px-4">
        {authors.map((author, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-[rgba(12,15,19,0.5)] border border-[rgba(255,255,255,0.125)] rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={author.img}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white/20"
            />
            <h3 className="text-xl font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-300">{author.role}</p>
            <div className="flex justify-center gap-4 mt-4 text-gray-400">
              <FaFacebook className="hover:text-cyan-400 cursor-pointer" />
              <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
              <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
