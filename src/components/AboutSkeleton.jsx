// components/AboutSkeleton.jsx
import React from "react";

const AboutSkeleton = () => {
  return (
    <div className="min-h-screen mt-[2rem] bg-gray-50">
      {/* Main container */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* About Section Skeleton */}
        <div className="text-center mb-24">
          <div className="h-12 md:h-14 bg-gray-300 rounded-lg w-96 mx-auto animate-pulse" />

          <div className="mt-12 max-w-3xl mx-auto space-y-7">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="h-6 bg-gray-200 rounded-lg animate-pulse"
                style={{ width: `${100 - i * 10}%`, maxWidth: "100%" }}
              />
            ))}
          </div>
        </div>

        {/* Team Section Skeleton */}
        <div className="bg-white rounded-3xl shadow-2xl py-16 px-8 lg:py-20 lg:px-16">
          <div className="text-center mb-16 space-y-6">
            <div className="h-12 md:h-14 bg-gray-300 rounded-lg w-80 mx-auto animate-pulse" />
            <div className="h-8 bg-gray-200 rounded-lg w-96 max-w-2xl mx-auto animate-pulse" />
            <div className="h-8 bg-gray-200 rounded-lg w-80 max-w-2xl mx-auto animate-pulse" />
          </div>

          {/* Team Grid */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <li key={i} className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-8">
                  <div className="h-48 w-48 rounded-full bg-gray-300 animate-pulse shadow-lg" />
                </div>

                {/* Name */}
                <div className="h-8 bg-gray-300 rounded-lg w-48 animate-pulse" />

                {/* Role */}
                <div className="mt-3 h-6 bg-indigo-200 rounded w-32 animate-pulse" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
