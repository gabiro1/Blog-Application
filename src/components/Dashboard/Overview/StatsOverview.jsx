// src/components/StatsOverview.jsx
import Card from "./Card";
import { postsData } from "../../Data/postsData";
import { useNavigate } from "react-router-dom";
import { subscribersData } from "../../Data/subscribersData"; 
import commentsData from '../../Data/commentsData';

const StatsOverview = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Total Posts",
      value: postsData.length.toString(),
      onClick: () => navigate("/post"),
    },
    { 
      label: "Subscribers", 
      value: subscribersData.length.toString(),
      onClick: () => navigate("/subscriber"),
     },
    { label: "Total Views", value: "1.5k" },
    { label: "Comments", value: commentsData.length.toString(), onClick: () => navigate("/comments") },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          onClick={stat.onClick}
          className={stat.onClick ? "cursor-pointer hover:opacity-90 transition" : ""}
        >
          <Card label={stat.label} value={stat.value} />
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
