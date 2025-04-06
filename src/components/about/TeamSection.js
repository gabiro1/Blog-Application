export default function TeamSection() {
    return (
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <div>
          <h3 className="font-bold text-xl mb-2">Our Team of Innovators</h3>
          <p className="text-gray-700">
            We are a group of developers, designers, and IT professionals dedicated to sharing knowledge and helping others grow.
          </p>
        </div>
        <img src="/team-photo.jpg" alt="Team working" className="rounded-md" />
      </section>
    );
  }
  