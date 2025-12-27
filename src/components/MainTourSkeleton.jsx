import React from "react";

const MainTourSkeleton = () => {
  return (
    <div className="lg:max-w-5xl py-6 mt-[6rem] lg:mt-[7rem] md:mt-[7rem] mx-4 md:mx-0 lg:mx-auto">
      {/* Page Title */}
      <div className="mb-6 h-12 w-96 bg-gray-200 rounded-lg animate-pulse" />

      {/* Tour Cards Grid */}
      <div className="flex flex-col gap-12 mb-6">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/3 lg:w-1/4 aspect-video md:aspect-[4/3] bg-gray-300 rounded-lg" />

            {/* Content Placeholder */}
            <div className="flex-1 space-y-5">
              {/* Title */}
              <div className="h-8 w-3/4 bg-gray-200 rounded-lg" />

              {/* Description Lines */}
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-11/12 bg-gray-100 rounded" />
                <div className="h-4 w-10/12 bg-gray-100 rounded" />
              </div>

              {/* Button / CTA Placeholder */}
              <div className="pt-4">
                <div className="h-12 w-40 bg-indigo-200 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTourSkeleton;
