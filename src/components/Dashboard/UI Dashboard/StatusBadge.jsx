const statusColors = {
    Approved: 'bg-teal-600',
    Pending: 'bg-green-500',
    Report: 'bg-blue-600'
  };
  
  const StatusBadge = ({ status }) => (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
      <span>{status}</span>
    </div>
  );
  
  export default StatusBadge;
  