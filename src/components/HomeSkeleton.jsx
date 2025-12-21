import React from "react";

// src/components/HomeSkeleton.jsx
export default function HomeSkeleton() {
  return (
    <div className="min-h-screen mt-[6rem] lg:mt-[7rem] md:mt-[7rem] animate-pulse font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section Skeleton */}
      <div className="bg-gray-300 bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center">
        <div className="w-[70%] md:w-[50%] h-20 bg-gray-200 rounded-lg"></div>
      </div>

      <div className="flex max-w-5xl mx-auto gap-8 px-4 md:px-8 lg:px-0 xl:px-0 flex-col">
        {/* About Section Skeleton */}
        <div className="md:my-8 lg:my-8 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
              <div className="h-4 bg-gray-200 rounded w-10/12"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-9/12"></div>
            </div>
            <div className="flex justify-end">
              <div className="h-5 bg-gray-300 rounded w-24"></div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:block h-[50vh] bg-gray-300 rounded-lg"></div>
        </div>

        {/* Best Offers Section Skeleton */}
        <div className="max-w-6xl my-2 lg:my-6 mx-auto w-full">
          <div className="flex w-full items-center gap-8 justify-between mb-8">
            <div className="h-8 bg-gray-300 rounded w-64"></div>
            <div className="h-10 bg-gray-300 rounded-lg w-40"></div>
          </div>

          {/* HomeTours Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="space-y-4">
                <div className="h-64 bg-gray-300 rounded-lg"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-8 bg-gray-300 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
