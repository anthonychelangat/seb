"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileSideLinks from "./MobileSideLinks";
import { MdCancel } from "react-icons/md";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-400">
      <div className="relative h-[6rem] flex items-center justify-between">
        <p className="ml-4 text-3xl font-bold">Seb</p>
        <div>
          <button onClick={() => setOpen(prev => !prev)}>
            <FaBars className="text-3xl mr-4" />
          </button>
        </div>
        {open && (
          <div className="absolute bg-blue-300 h-[100vh] top-0 left-0 right-0 bottom-0 h-[100vh] z-100">
            <div className="flex items-center justify-between px-5 py-6">
              <p className="text-4xl">Seb</p>
              <button onClick={() => setOpen(prev => !prev)}>
                <MdCancel className="text-3xl text-red-900" />
              </button>
            </div>
            <MobileSideLinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
