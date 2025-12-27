// components/HeaderSkeleton.jsx
import React from "react";

const HeaderSkeleton = () => {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo Skeleton */}
        <div className="h-10 w-24 bg-gradient-to-r from-indigo-400/50 to-teal-400/50 rounded-lg animate-pulse" />

        {/* Navigation + Auth Skeleton */}
        <nav className="flex items-center gap-8">
          {/* Main Links Skeleton */}
          <div className="flex items-center gap-10">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="relative">
                <div className="h-6 w-28 bg-gray-600 rounded animate-pulse" />
                {/* Simulate possible active underline */}
                {i === 1 && (
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 to-teal-500/50 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Login / Profile Skeleton */}
          <div className="ml-8">
            {/* Assuming logged out state for variety; adjust if needed */}
            <div className="px-7 py-3">
              <div className="h-10 w-24 bg-white/10 rounded-xl border border-gray-700 animate-pulse" />
            </div>

            {/* Optional: Logged-in profile skeleton (uncomment if preferred)
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full animate-pulse" />
              <div className="hidden sm:block space-y-2">
                <div className="h-4 w-32 bg-gray-600 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-500 rounded animate-pulse" />
              </div>
            </div>
            */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
