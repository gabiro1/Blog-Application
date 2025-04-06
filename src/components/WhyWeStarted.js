import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import storyImage from "../assets/images/Story/story.jpg";

function WhyWeStarted() {
  return (
    <section className="why-we-started container-fluid py-5 bg-white">
      <div className="row align-items-center position-relative ml-2">
        {/* Left side: Image with overlay effect */}
        <div className="col-5  ">
          <img
            src={storyImage}
            alt="Mother and child on sofa"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }} // Adjusting the max height
          />
        </div>

        {/* Right side: Content */}
        <div className="Overlay-card col-lg-6 p-5">
          {/* Title and Heading */}
          <h3 className="text-uppercase text-muted small fw-semibold">
            Why We Started
          </h3>
          <h2 className="fw-bold text-dark mt-2">
            It started out as a simple idea and evolved into our passion
          </h2>

          {/* Description text */}
          <p className="text-secondary mt-5">
            Our mission began with a simple goal—helping IT enthusiasts and
            professionals stay informed, learn, and grow in the ever-evolving
            tech landscape. Join us in building a community of innovation and
            learning.
          </p>

          {/* Action Button */}
          <button className="btn btn-success mt-4 px-5 py-3 fw-semibold shadow-lg">
            Discover our story &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyWeStarted;
