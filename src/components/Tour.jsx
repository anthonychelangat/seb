import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Photos from "./Photos";
import Link from "next/link";

const Tour = ({ id, title, description }) => {
  return (
    <div className="group flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Photos Section */}
      <div className="md:w-1/2 lg:w-3/5">
        <div className="h-[300px] md:h-full">
          <Photos id={id} />
        </div>
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-between p-8 md:p-10 lg:p-12">
        <div>
          {/* Title */}
          <h5 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 capitalize group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h5>

          {/* Description */}
          <p className="mb-8 text-base md:text-lg text-gray-600 line-clamp-5 md:line-clamp-6 leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link
            href={`/tour/${id}`}
            className="inline-flex items-center px-6 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 shadow-md hover:shadow-lg group">
            Explore Tour
            <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
