"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import MobileSideLinks from "./MobileSideLinks";

const MobileHeader = ({ session, users }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Fixed Top Header */}
      <header className="fixed inset-x-0 top-0 z-[9998] bg-indigo-900 text-white">
        <div className="flex h-20 md:h-24 items-center justify-between px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-white">Seb</span>
          </Link>

          {/* Hamburger / Close Button */}
          <button
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            className="z-70 p-4 rounded-2xl transition-all duration-300 hover:bg-white/10 active:scale-90">
            {open ? (
              <MdCancel className="text-4xl text-white" />
            ) : (
              <FaBars className="text-3xl text-white drop-shadow-md" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Only when open */}
      {open && (
        <>
          {/* Sliding Sidebar - Visible width + higher z-index */}
          <div className="fixed top-20 md:top-24 left-0 bottom-0 w-90 bg-indigo-900 z-[9999] transition-transform duration-500 ease-out translate-x-0 overflow-y-auto">
            <MobileSideLinks
              session={session}
              users={users}
              onLinkClick={closeMenu} // Closes menu when a link is clicked
            />
          </div>
        </>
      )}
    </>
  );
};

export default MobileHeader;
