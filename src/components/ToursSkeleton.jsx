// components/MainTourSkeleton.jsx
import React from "react";

const ToursSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Back & Share (Desktop) */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          <div className="h-10 w-32 bg-gray-300 rounded-lg animate-pulse" />
          <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse" />
        </div>

        {/* Mobile Header Placeholder */}
        <div className="lg:hidden relative mb-8">
          <div className="absolute top-4 left-4 z-10">
            <div className="h-10 w-10 bg-white/80 rounded-full animate-pulse" />
          </div>
          <div className="absolute top-4 right-4 z-10">
            <div className="p-3 bg-white/80 backdrop-blur rounded-full shadow-lg">
              <div className="h-6 w-6 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>

          {/* Mobile Photo Carousel Placeholder */}
          <div className="h-80 rounded-3xl bg-gray-300 animate-pulse" />
        </div>

        {/* Desktop Photo Gallery Skeleton */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-16 lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
          {/* Main Large Image */}
          <div className="bg-gray-300 animate-pulse rounded-3xl" />

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-300 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Tour Info & Guides */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-4">
                <div className="h-12 bg-gray-300 rounded-lg w-4/5 animate-pulse" />
                <div className="h-8 bg-gray-300 rounded w-3/5 animate-pulse hidden sm:block" />
              </div>
              <div className="h-12 bg-indigo-300 rounded-lg w-40 animate-pulse" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-11/12 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-10/12 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
            </div>

            {/* Tour Guides Section Skeleton */}
            <div className="pt-8 border-t border-gray-200">
              <div className="h-10 bg-gray-300 rounded-lg w-48 mb-8 animate-pulse" />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[1, 2].map(i => (
                  <li key={i} className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse" />
                    <div className="space-y-3 flex-1">
                      <div className="h-6 bg-gray-300 rounded w-32 animate-pulse" />
                      <div className="h-5 bg-indigo-300 rounded w-24 animate-pulse" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Desktop Booking Form Skeleton */}
          <div className="hidden lg:block">
            <div className="sticky top-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-200 space-y-6">
              <div className="h-8 bg-gray-300 rounded w-40 animate-pulse" />
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-14 bg-indigo-300 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Booking Form Skeleton (Fixed Bottom) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="h-8 bg-gray-300 rounded w-48 animate-pulse" />
                <div className="h-6 bg-indigo-300 rounded w-32 animate-pulse" />
              </div>
              <div className="h-14 bg-indigo-300 rounded-xl w-40 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSkeleton;
