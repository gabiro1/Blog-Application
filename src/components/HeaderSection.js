const HeaderSection = () => {
    return (
      <div className="text-center max-w-2xl mx-auto py-12">
        <span className="text-sm text-purple-700 uppercase font-semibold tracking-wider">Our blog</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">Resources and insights</h1>
        <p className="text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="🔍 Search"
            className="w-full sm:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    );
  };
  
  export default HeaderSection;
  