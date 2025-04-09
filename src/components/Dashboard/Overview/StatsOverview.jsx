// src/components/StatsOverview.jsx
import Card from "./Card";

const StatsOverview = () => {
  const stats = [
    { label: "Total Posts", value: "120" },
    { label: "Total Views", value: "23.5k" },
    { label: "Subscribers", value: "13.5k" },
    { label: "Comments", value: "93.5k" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat) => (
        <Card key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsOverview;
