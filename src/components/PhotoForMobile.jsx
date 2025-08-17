"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PhotoForMobile = ({ photosOne, id }) => {
  const photo1s1 = photosOne.map(p => p.url);

  const pics = photo1s1;

  console.log(photo1s1, "p1");

  console.log(pics, "pics");

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? pics.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === pics.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-[100%]">
      <div className="relative w-[100%] ">
        <FaAngleLeft
          onClick={prevImage}
          className="absolute cursor text-black text-2xl top-[50%] left-0 ml-4"
        />
        <Link href={`/photos/${id}`}>
          <img
            className="h-[18rem] w-full"
            src={`${pics ? pics[currentIndex] : "80.jpg"}`}
          />
        </Link>
        <p className="absolute bottom-[1rem] px-2 text-sm py-1 bg-black opacity-60 rounded-[2px] right-[1.5rem] text-white ">
          {currentIndex + 1}/{pics.length}
        </p>

        <FaAngleRight
          onClick={nextImage}
          className="absolute  cursor text-black text-2xl  mr-4 top-[50%] right-0 z-10"
        />
      </div>
    </div>
  );
};

export default PhotoForMobile;
