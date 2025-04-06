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
    <section className="authors-section">
      <h2 className="title">List of Authors</h2>
      <div className="author-list">
        {authors.map((author, index) => (
          <div key={index} className={`author-card ${index === 1 ? "highlight" : ""}`}>
            <img src={author.img} alt={author.name} className="author-img" />
            <h3 className="author-name">{author.name}</h3>
            <p className="author-role">{author.role}</p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
