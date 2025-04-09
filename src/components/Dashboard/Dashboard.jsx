// src/pages/Dashboard.jsx
import Sidebar from "./UI Dashboard/Sidebar";
import StatsOverview from "./Overview/StatsOverview";
import PostsTable from "./Overview/PostsTable";
import PieChart from "./Overview/PieChart";

const Dashboard = () => (
  <>
    <Sidebar />
    <div className="ml-60 bg-white min-h-screen px-6">
      <h1 className="text-2xl font-bold mt-6">Welcome, John Smith</h1>
      <h2 className="text-lg font-semibold mt-2">Blog Overview</h2>
      <p className="text-sm text-gray-500 mb-6">
        Manage posts, track post performance and learn about new ways to improve your blog.
      </p>

      <StatsOverview />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PostsTable />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;
