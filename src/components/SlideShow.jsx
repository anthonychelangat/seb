"use client";

import Image from "next/image";
import { ImageResponse } from "next/server";
import React, { useEffect, useState } from "react";

const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/1753792679946_4.jpg",
    "/1753623537665_9.jpg",
    "/1753616307883_10.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === ImageResponse.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Image
        src={images[currentImageIndex]}
        alt="them"
        width={500}
        height={50}
      />
    </div>
  );
};

export default SlideShow;
