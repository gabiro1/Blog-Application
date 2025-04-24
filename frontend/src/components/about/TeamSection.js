import BackgroundSVG from '../Main SVG/BackgroundSVG'; 
export default function TeamSection() {
  return (
    <section className="relative p-16 grid grid-cols-1 md:grid-cols-2 gap-10 w-6/7 mx-auto items-center overflow-hidden">
      {/* SVG Background */}
      <div className="absolute right-0 top-0 w-full h-full z-0 pointer-events-none">
        <BackgroundSVG />
      </div>

      {/* Text and Image */}
      <div className="z-10">
        <h3 className="font-bold text-xl mb-2">Our Team of Innovators</h3>
        <p className="text-gray-700">
          We are a group of developers, designers, and IT professionals dedicated to sharing knowledge and helping others grow.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
        alt="Team of tech professionals collaborating"
        className="rounded-md w-full h-auto object-cover z-10"
      />
    </section>
  );
}
