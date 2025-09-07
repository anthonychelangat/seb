import React from "react";
import Photos from "./Photos";

const HomeTour = ({ id, title, description }) => {
  return (
    <div>
      <Photos id={id} />
      <h5 className="mb-2 capitalize text-2xl text-center md:text-left lg:text-left font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a className="underline hover:text-gray-950" href={`/tour/${id}`}>
        Read More
      </a>
    </div>
  );
};

export default HomeTour;
