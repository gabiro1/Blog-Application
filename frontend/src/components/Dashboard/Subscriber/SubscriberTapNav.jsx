import React from 'react';

const tabs = ['Published', 'Draft', 'Trash'];

const PostTabNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-6 mb-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 relative font-medium text-sm ${
            activeTab === tab ? 'text-black border-b-2 border-yellow-500' : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PostTabNav;
