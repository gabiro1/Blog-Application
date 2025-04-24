export default function HeroSection() {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div
       className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-white"
       style={{
         backgroundImage:
           "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80')",
       }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">About Us</h2>
          <p className="text-sm md:text-lg mb-4">
          We are a community of tech enthusiasts sharing knowledge and innovations
          </p>
          <button className="bg-[#0E552D] text-[#fff] font-bold py-2 px-5 rounded">
            Call (+250) 789 028 283
          </button>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="custom-shape-divider-bottom-171328">
        <svg
          className="w-full h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
