import React from "react";

const FooterSkeleton = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-b from-indigo-900 to-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="h-10 md:h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-700 rounded w-1/2 mx-auto mb-8 animate-pulse" />

          {/* Subscribe Component Skeleton */}
          <div className="max-w-md mx-auto">
            <div className="h-12 bg-gray-700 rounded-lg mb-4 animate-pulse" />
            <div className="h-12 bg-indigo-600/50 rounded-lg w-40 mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="h-8 bg-indigo-400/30 rounded-lg w-48 mb-6 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-700 rounded w-11/12 animate-pulse" />
              <div className="h-4 bg-gray-700 rounded w-10/12 animate-pulse" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="h-5 bg-indigo-400/30 rounded w-28 mb-6 animate-pulse" />
            <ul className="space-y-4">
              {[1, 2, 3].map(i => (
                <li key={i}>
                  <div className="h-5 bg-gray-700 rounded w-24 animate-pulse" />
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="h-5 bg-indigo-400/30 rounded w-20 mb-6 animate-pulse" />
            <ul className="space-y-4">
              {[1, 2, 3].map(i => (
                <li key={i}>
                  <div className="h-5 bg-gray-700 rounded w-32 animate-pulse" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="h-5 bg-indigo-400/30 rounded w-28 mb-6 animate-pulse" />
            <div className="space-y-5">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-indigo-400/30 rounded animate-pulse" />
                  <div className="h-5 bg-gray-700 rounded w-40 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="h-5 bg-gray-700 rounded w-64 animate-pulse" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
