export default function MissionVisionSection() {
    return (
      <section className="p-16  bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 w-6/7 mx-auto">
        <div>
          <h3 className="font-semibold text-lg mb-2">OUR MISSION</h3>
          <h4 className="font-semibold text-lg mb-2">Delivering valuable IT content to empower learners and professionals</h4>
          <p className="text-gray-700">
          Our goal is to create high-quality resources for developers, designers, and tech enthusiasts to enhance their skills and stay ahead in the industry.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">OUR VISION</h3>
          <h4 className="font-semibold text-lg mb-2">Building a platform that connects and educates the tech community</h4>
          <p className="text-gray-700">
          We aim to bridge the gap between beginners and experts by offering valuable insights, tutorials, and discussions on trending technologies
          </p>
        </div>
      </section>
    );
  }
  