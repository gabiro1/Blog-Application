export default function HeroSection() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row w-[90%] gap-12 p-10 mt-40">
          
          {/* Message */}
          <div className="relative ">
            <div className="absolute -top-[45%] left-1/5 transform translate-x-1/5 z-10">
              <div className="flex gap-8  text-black  w-[800px] ">
                <div className="flex flex-col bg-white  p-10 shadow-xl">
                  <p className="text-base fs-3">ABOUT US</p>
                  <h3 className="text-xl leading-9 font-semibold">
                    We are a community of tech enthusiasts sharing knowledge and innovations.
                  </h3>
                </div>
                <p className="text-sm mt-4 leading-6 text-dark text-opacity-90">
                  We provide insights, tutorials, and the latest trends in software development, cybersecurity, UI/UX design, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[300px] w-full shadow-md"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFib3V0JTIwY29udGVudHxlbnwwfHx8fDE2ODQ5NTY1MjM&ixlib=rb-4.0.3&q=80&w=1080')",
            }}
          >
            <div className="absolute bottom-0 left-[10%] flex flex-col gap-1">
              <div className="flex justify-between items-center gap-8 bg-[#0E552D] h-[50px] w-[400px] px-8 py-12 text-white z-10">
                <div className="flex flex-col items-center gap-1">
                  <p>Total Blogs</p>
                  <h3 className="text-lg font-bold">100+</h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p>Total Views</p>
                  <h3 className="text-lg font-bold">1M+</h3>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p>Active Users</p>
                  <h3 className="text-lg font-bold">500+</h3>
                </div>
              </div>
              <div className="flex">
                <div className="w-[250px] h-4 bg-[#0C0F13]"></div>
                <div className="w-[250px] h-4 bg-[#0E552D]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
