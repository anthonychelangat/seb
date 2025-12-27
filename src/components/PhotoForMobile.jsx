"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PhotoForMobile = ({ photosOne, id }) => {
  const pics = photosOne.map(p => p.url);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? pics.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === pics.length - 1 ? 0 : prev + 1));
  };

  if (pics.length === 0) {
    return (
      <div className="h-72 bg-gray-200 flex items-center justify-center text-gray-500">
        No photos available
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* Main Image with Link */}
      <Link href={`/photos/${id}`} className="block">
        <img
          src={pics[currentIndex] || "80.jpg"}
          alt={`Tour photo ${currentIndex + 1}`}
          className="w-full h-96 object-cover transition-transform duration-500 ease-in-out"
        />
      </Link>

      {/* Photo Counter */}
      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full shadow-lg">
        {currentIndex + 1} / {pics.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-xl transition-all duration-300 hover:scale-110">
        <FaAngleLeft className="text-3xl text-gray-800" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-xl transition-all duration-300 hover:scale-110">
        <FaAngleRight className="text-3xl text-gray-800" />
      </button>

      {/* Optional: Dots Indicator */}
      {pics.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {pics.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoForMobile;
