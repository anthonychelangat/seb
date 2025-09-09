import React from "react";
import Photos from "./Photos";
import Link from "next/link";

const HomeTour = ({ id, title, description }) => {
  return (
    <div>
      <Photos id={id} />
      <h5 className="mb-2 capitalize text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 text-sm font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link
        className="underline text-center md:text-left lg:text-left text-sm hover:text-gray-950"
        href={`/tour/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default HomeTour;
