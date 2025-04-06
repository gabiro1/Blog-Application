export default function BlogStartSection() {
    return (
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <img src="/group-discussion.jpg" alt="Blog story" className="rounded-md" />
        <div>
          <h3 className="font-bold text-xl mb-2">Why we started this Blog</h3>
          <p className="text-gray-700">
            Our journey started with a vision to simplify learning in the IT space. We wanted to build a central hub for devs and designers to learn and grow.
          </p>
        </div>
      </section>
    );
  }
  