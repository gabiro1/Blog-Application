import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import commentsData from '../../Data/commentsData';
import axios from "axios";

const StatsOverview = () => {
  const navigate = useNavigate();
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/')
      .then(res => setTotalPosts(res.data.length))
      .catch(() => setTotalPosts(0));
  }, []);

  const stats = [
    {
      label: "Total Posts",
      value: totalPosts.toString(),
      onClick: () => navigate("/post"),
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