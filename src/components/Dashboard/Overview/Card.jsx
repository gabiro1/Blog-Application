// src/components/Card.jsx
const Card = ({ label, value }) => (
    <div className="bg-card p-6 rounded-lg shadow-md text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
  
  export default Card;
  