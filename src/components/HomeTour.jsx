import React from "react";
import Photos from "./Photos";
import Link from "next/link";

const HomeTour = ({ id, title, description }) => {
  return (
    <div>
      <Photos id={id} />
      <h5 className="mb-2 capitalize text-lg font-bold tracking-tight text-black ">
        {title}
      </h5>
      <p className="mb-3 text-base font-normal line-clamp-3 text-black">
        {description}
      </p>
      <Link
        className="underline text-center md:text-left lg:text-left text-base hover:text-gray-950"
        href={`/tour/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default HomeTour;
