"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileSideLinks from "./MobileSideLinks";
import { MdCancel } from "react-icons/md";

const MobileHeader = ({ session, users }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-400">
      <div className="relative h-[6rem] flex items-center justify-between">
        <p className="ml-4 text-3xl font-bold">Seb</p>
        <div>
          <button className=" mr-4" onClick={() => setOpen(prev => !prev)}>
            {open ? (
              <MdCancel className="text-3xl text-red-900" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
        {open && (
          <div className="absolute bg-blue-300 h-[100vh-6rem] top-[6rem] left-0 right-0 bottom-0 h-[100vh] z-100">
            <MobileSideLinks session={session} users={users} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
