import React from "react";
import storyImage from "../assets/images/Story/story.jpg";

function WhyWeStarted() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row h-[500px]">
        {/* Image Side */}
        <div className="lg:w-1/2 w-full h-[500px]">
          <img
            src={storyImage}
            alt="Mother and child on sofa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* White Box with Centered Content */}
        <div className="lg:w-1/2 w-96 flex items-center justify-center bg-white px-6 lg:px-16 py-10 h-[500px]">
          <div className="max-w-xl">
            <p className="uppercase text-sm tracking-wider text-gray-500 mb-4">
              Why we started
            </p>
            <h2 className="text-[#1D1B25] text-3xl md:text-4xl font-extrabold leading-snug mb-6">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p className="text-[#757B8A] text-base leading-relaxed mb-8">
              Our mission began with a simple goal—helping IT enthusiasts and professionals stay informed, learn, and grow in the ever-evolving tech landscape. Join us in building a community of innovation and learning.
            </p>
            <button className="bg-[#136B41] hover:bg-[#0f5a37] transition text-white font-semibold py-3 px-6 rounded-md text-base shadow-md">
              Discover our story &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWeStarted;
