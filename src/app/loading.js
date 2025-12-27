import React from "react";

const loading = () => {
  return (
    <div className="fixed mx-auto inset-0 z-50 flex items-center justify-center bg-gray-50">
      {/* Optional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gray-300" />

      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo Placeholder (optional - replace with your actual logo if desired) */}
        <div className="h-12 w-48 bg-gray-300 rounded-lg animate-pulse" />
        {/* Or use text logo */}
        {/* <h1 className="text-3xl font-bold tracking-wider text-gray-800">SEB EXPEDITIONS</h1> */}

        {/* Spinner */}
        <div className="relative">
          <div className="size-20 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 size-20 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading Seb Adventures
        </p>
      </div>
    </div>
  );
};

export default loading;
