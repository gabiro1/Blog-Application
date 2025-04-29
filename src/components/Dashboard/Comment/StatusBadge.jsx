const StatusBadge = ({ status }) => {
    const color = status === 'Published' ? 'bg-green-500' : status === 'Draft' ? 'bg-blue-500' : 'bg-gray-400';
  
    return (
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
        <span className="text-sm text-gray-700">{status}</span>
      </div>
    );
  };
  
  export default StatusBadge;
  