import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Photos from "./Photos";
import Link from "next/link";

const Tour = ({ id, title, description }) => {
  return (
    <div
      key={id}
      className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 flex-1">
      <Photos id={id} />
      <div className="flex-1/2 flex flex-col justify-between h-[50vh]">
        <div>
          <h5 class="mb-2 capitalize text-2xl md:3xl lg:4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 line-clamp-9 text-lg lg:text-lg capitalize font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div></div>

          <Link
            href={`/tour/${id}`}
            class="inline-flex text-lg items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <FaArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
