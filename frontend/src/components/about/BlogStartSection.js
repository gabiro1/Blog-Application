import TeamBackgroundSVG from '../Main SVG/BackgroundSVG'; 

export default function BlogStartSection() {
  return (
    <section className="relative p-16 grid grid-cols-1 md:grid-cols-2 gap-10 w-6/7 mx-auto items-center overflow-hidden">
      {/* SVG Background */}
      {/* <div className="absolute right-0 top-0 w-full h-full z-0 pointer-events-none">
        <TeamBackgroundSVG />
      </div> */}

      {/* Image and Content */}
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
        alt="Team working together on tech project"
        className="rounded-md w-full h-auto object-cover z-10"
      />
      <div className="z-10">
        <h3 className="font-bold text-xl mb-2">Why we started this Blog</h3>
        <p className="text-gray-700">
          Our journey started with a vision to simplify learning in the IT space. We wanted to build a central hub for devs and designers to learn and grow.
        </p>
      </div>
    </section>
  );
}
