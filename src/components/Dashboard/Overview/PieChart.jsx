// src/components/PieChart.jsx
const PieChart = () => (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-gray-800 to-gray-500 relative">
        <div className="absolute top-0 left-0 w-20 h-40 bg-black rounded-l-full"></div>
      </div>
      <div className="mt-4 text-sm space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-700 inline-block"></span>
          Total number of Active subscriber
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-black inline-block"></span>
          Total number of Unsubscribed
        </div>
      </div>
    </div>
  );
  
  export default PieChart;
  