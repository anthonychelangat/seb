import React from "react";

const MobileHeaderSkeleton = () => {
  return (
    <div className="bg-[#020224] text-white md:hidden lg:hidden">
      <div className="relative h-[6rem] flex items-center justify-between px-4 animate-pulse">
        {/* Logo / Brand Name */}
        <div className="h-10 w-24 bg-indigo-900 rounded-lg" />

        {/* Hamburger Menu Button */}
        <div className="h-10 w-10 bg-indigo-800 rounded-lg" />
      </div>

      {/* Open Mobile Menu Placeholder (simulating when menu is open) */}
      {/* Remove the outer conditional if you only want the closed state */}
      <div className="absolute top-[6rem] left-0 right-0 bg-[#020224] z-50 animate-pulse">
        <div className="py-8 px-6 space-y-8">
          {/* Navigation Links Placeholder */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-8 w-48 bg-indigo-900 rounded mx-auto" />
          ))}

          {/* Auth / Profile Placeholder */}
          <div className="h-12 w-64 bg-indigo-800 rounded-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderSkeleton;
