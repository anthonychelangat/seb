// components/ContactSkeleton.jsx
import React from "react";

const ContactSkeleton = () => {
  return (
    <div>
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20 lg:py-28 overflow-hidden mt-[2rem]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white space-y-8">
          <div className="h-12 md:h-16 lg:h-20 bg-white/20 rounded-xl w-3/4 mx-auto animate-pulse" />
          <div className="h-8 md:h-10 bg-white/10 rounded-lg w-4/5 max-w-3xl mx-auto animate-pulse" />
          <div className="h-8 md:h-10 bg-white/10 rounded-lg w-3/5 max-w-2xl mx-auto animate-pulse" />
        </div>
      </section>

      {/* Main Contact Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info Card Skeleton */}
            <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl shadow-2xl p-10 lg:p-12">
              <div className="h-10 bg-white/20 rounded-lg w-64 mb-8 animate-pulse" />
              <div className="h-20 bg-white/10 rounded-lg w-full mb-10 animate-pulse" />

              <div className="space-y-10">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="p-4 bg-pink-600/20 rounded-xl">
                      <div className="w-6 h-6 bg-pink-400/50 rounded animate-pulse" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-6 bg-white/20 rounded w-32 animate-pulse" />
                      <div className="h-5 bg-white/10 rounded w-48 animate-pulse" />
                      {i === 1 && (
                        <div className="h-5 bg-white/10 rounded w-40 animate-pulse mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 space-y-8">
              <div className="h-10 bg-gray-300 rounded-lg w-72 mb-8 animate-pulse" />

              <div className="space-y-7">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-300 rounded w-32 animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-300 rounded w-32 animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <div className="h-5 bg-gray-300 rounded w-40 animate-pulse" />
                  <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <div className="h-5 bg-gray-300 rounded w-48 animate-pulse" />
                  <div className="h-32 bg-gray-200 rounded-xl animate-pulse" />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
                  <div className="h-5 bg-gray-300 rounded w-64 animate-pulse" />
                </div>

                {/* Submit Button */}
                <div className="h-14 bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSkeleton;
