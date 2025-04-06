export default function HeroSection() {
    return (
      <section className="py-16 px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        <div>
          <h4 className="text-sm text-gray-500 tracking-widest mb-2">ABOUT US</h4>
          <h2 className="text-3xl font-bold mb-4">
            We are a community of tech enthusiasts sharing knowledge and innovations
          </h2>
          <p className="text-gray-600">
            We provide insights, tutorials, and the latest trends in software development, cybersecurity, UI/UX design, and more.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/about-hero.jpg" alt="Tech group" className="rounded-lg shadow-md" />
        </div>
      </section>
    );
  }
  