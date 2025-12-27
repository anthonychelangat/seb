// components/HomeSkeleton.jsx
import React from "react";

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen mt-[5rem] md:mt-[5rem] lg:mt-[5rem] font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section Skeleton */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-600 animate-pulse" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text Skeleton */}
        <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">
          <div className="h-12 md:h-16 lg:h-20 bg-gray-300/60 rounded-xl w-4/5 mx-auto animate-pulse" />
          <div className="h-8 md:h-10 lg:h-12 bg-gray-300/50 rounded-lg w-3/5 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-0 py-12 lg:py-20">
        {/* About Section Skeleton */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          {/* Text Column */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="h-10 md:h-12 bg-gray-300 rounded-lg w-2/3 animate-pulse" />

            {/* Paragraphs */}
            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className="h-5 bg-gray-200 rounded-lg animate-pulse"
                  style={{ width: `${100 - i * 10}%` }}
                />
              ))}
            </div>

            {/* Read More Link */}
            <div className="flex items-center gap-3">
              <div className="h-6 bg-indigo-300 rounded w-28 animate-pulse" />
              <div className="w-5 h-5 bg-indigo-300 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Image Column (Desktop only) */}
          <div className="order-1 md:order-2 hidden md:block">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-300 animate-pulse" />
          </div>
        </section>

        {/* Best Offers Section Skeleton */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="h-10 md:h-12 bg-gray-300 rounded-lg w-64 animate-pulse" />

            {/* More Offers Button (Desktop only) */}
            <div className="hidden lg:flex items-center gap-3 px-6 py-3 bg-indigo-300 rounded-lg animate-pulse">
              <div className="h-6 bg-white/40 rounded w-32" />
              <div className="w-6 h-6 bg-white/40 rounded-full" />
            </div>
          </div>

          {/* HomeTours Skeleton - 3 Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
                {/* Tour Image */}
                <div className="aspect-[4/3] bg-gray-200" />

                {/* Tour Content */}
                <div className="p-8 space-y-6">
                  <div className="h-9 bg-gray-300 rounded-lg w-4/5" />
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-11/12" />
                    <div className="h-4 bg-gray-200 rounded w-10/12" />
                  </div>
                  <div className="h-12 bg-indigo-300 rounded-lg w-40" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeSkeleton;
