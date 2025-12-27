"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Photo = ({ photos, id }) => {
  const pics = photos.map(p => p.url);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? pics.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === pics.length - 1 ? 0 : prev + 1));
  };

  // Fallback if no photos
  if (!pics || pics.length === 0) {
    return (
      <div className="relative aspect-[4/3] rounded-2xl bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No images available</p>
      </div>
    );
  }

  const currentImage = pics[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
        {/* Main Image */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9]">
          <Image
            src={currentImage}
            alt={`Tour image ${currentIndex + 1} of ${pics.length}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            quality={90}
            priority // Loads faster on initial view
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-400 sm:opacity-0 sm:group-hover:opacity-100">
          <FaAngleLeft className="text-2xl text-gray-900" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-400 sm:opacity-0 sm:group-hover:opacity-100">
          <FaAngleRight className="text-2xl text-gray-900" />
        </button>

        {/* Image Counter */}
        {pics.length > 1 && (
          <div className="absolute top-4 right-4 z-20 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            {currentIndex + 1} / {pics.length}
          </div>
        )}

        {/* Dot Indicators */}
        {pics.length > 1 && (
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {pics.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-white shadow-md"
                    : "w-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Optional: Thumbnail strip (visible on tablet & up) */}
      {pics.length > 4 && (
        <div className="mt-6 hidden sm:flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400">
          {pics.map((pic, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-28 aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-4 ring-indigo-600 ring-offset-4"
                  : "opacity-70 hover:opacity-100"
              }`}>
              <Image
                src={pic}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photo;
