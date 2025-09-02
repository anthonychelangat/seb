"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaHeart } from "react-icons/fa";
//import { saveFavorites } from "../../lib/data";

const Photo = ({ photos, id }) => {
  const pics = photos.map(p => p.url);

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
        <Image
          className="rounded-md h-[50vh] z-0 object-cover"
          width={500}
          height={50}
          quality={80}
          alt=""
          src={`${pics ? pics[currentIndex] : "80.jpg"}`}
        />

        <FaAngleRight
          onClick={nextImage}
          className="absolute  cursor text-black text-2xl  mr-4 top-[50%] right-0"
        />
      </div>
    </div>
  );
};

export default Photo;
