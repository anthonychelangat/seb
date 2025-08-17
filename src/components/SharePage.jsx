"use client";

import React from "react";
import { FaShare } from "react-icons/fa";

const SharePage = ({ url, title, text }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log("Page shared successfully");
      } catch (error) {
        console.log("Error sharing page");
      }
    } else {
      alert("Web share api is not compatible with your browser");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 hover:text-blue-600">
      <FaShare className="text-xl lg:text-base" />
      <p className="hidden lg:block">Share</p>
    </button>
  );
};

export default SharePage;
