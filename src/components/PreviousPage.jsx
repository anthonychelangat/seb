"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PreviousPage = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBack = () => {
    if (isMounted) {
      router.back();
    }
  };

  if (!isMounted) return null;

  return (
    <button
      className="p-1.5 aspect-square rounded-[50%] bg-gray-200 "
      onClick={handleBack}>
      <MdKeyboardArrowLeft className="text-2xl lg:hover:text-blue-600" />
    </button>
  );
};

export default PreviousPage;
