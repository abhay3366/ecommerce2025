import React from 'react';

const ShimmerCard = () => (
  <div className=" rounded p-4 shadow animate-pulse bg-white">
    <div className="bg-gray-300 h-40 w-full mb-4"></div>
    <div className="h-4 bg-gray-300 mb-2 w-3/4"></div>
    <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
    <div className="h-10 bg-gray-300 w-1/2 rounded"></div>
  </div>
);

const ShimmerSidebarItem = () => (
  <div className="h-4 bg-gray-300 rounded mb-3 w-3/4 animate-pulse"></div>
);

const ShimmerSlider = () => (
  <div className="h-2 bg-gray-300 rounded w-full animate-pulse"></div>
);

const ShimmerPage = () => {
  return (
    <div className="flex p-6 space-x-6">
      
      {/* Sidebar */}
      <div className="w-1/4 space-y-6">
        <ShimmerSidebarItem />
        <ShimmerSidebarItem />
        <ShimmerSidebarItem />
        <ShimmerSlider />
        <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6 w-3/4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ShimmerCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerPage;
