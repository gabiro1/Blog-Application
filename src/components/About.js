import React from "react";

function About() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-lg p-10 rounded-lg relative">
        {/* Top Border Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-800 via-green-500 to-black" />

        {/* About Us Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">About Us</h3>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            We are a community of tech enthusiasts sharing insights and innovations
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We are dedicated to providing the latest trends, tutorials, and insights
            on software development, cybersecurity, artificial intelligence, and
            more. Our goal is to bridge the knowledge gap in IT and empower
            developers, tech learners, and professionals with high-quality content.
          </p>
          <a href="#" className="text-purple-600 font-semibold mt-4 inline-block">
            Read More &gt;
          </a>
        </div>

        {/* Our Mission Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Our Mission</h3>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            Empowering the tech community with valuable and insightful content
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Our mission is to create and share high-quality IT-related content,
            including coding tutorials, tech news, software development guides, and
            industry insights. Whether you are a beginner or an experienced
            professional, we provide the knowledge and resources to help you stay
            ahead in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
