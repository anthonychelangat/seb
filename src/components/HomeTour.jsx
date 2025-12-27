import React from "react";
import Photos from "./Photos";
import Link from "next/link";

const HomeTour = ({ id, title, description }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Photo Gallery */}
      <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] overflow-hidden bg-gray-100">
        <Photos id={id} />

        {/* Optional subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h5 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 capitalize line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {title}
        </h5>

        <p className="mb-6 text-base sm:text-lg font-normal text-gray-600 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Read More Link */}
        <div className="mt-auto">
          <Link
            href={`/tour/${id}`}
            className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group">
            Read More
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTour;
