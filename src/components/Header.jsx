"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import Profile from "./Profile";

const Header = ({ session, users }) => {
  const pathname = usePathname();

  return (
    <div className="bg-[gray] text-[white] h-[6rem] z-50">
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <h1 className="text-2xl/6 font-semibold">SEB EXPEDITIONS</h1>
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-4">
            <Link
              className={` text-lg/6 font-semibold py-4 relative ${
                pathname === "/"
                  ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-black"
                  : ""
              }`}
              href="/">
              Home
            </Link>

            <Link
              className={`text-lg/6 font-semibold py-4 relative ${
                pathname === "/about"
                  ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-black"
                  : ""
              }`}
              href="/about">
              About Us
            </Link>
            <Link
              className={`text-lg/6 font-semibold py-4 relative ${
                pathname === "/tours"
                  ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-blue-500 "
                  : ""
              }`}
              href="/tours">
              Tour Packages
            </Link>
            <Link
              className={`text-lg/6 font-semibold py-4 relative ${
                pathname === "/contact"
                  ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-blue-500 "
                  : ""
              }`}
              href="/contact">
              Contact
            </Link>
          </div>

          <div>
            {session?.user ? (
              <Suspense fallback={<div>Loading...</div>}>
                <Profile session={session} users={users} />
              </Suspense>
            ) : (
              <Link
                className={`text-lg/6 font-semibold py-4 relative ${
                  pathname === "/login"
                    ? "text-blue-500 before:absolute before:content-[''] before:w-full before:h-2 before:bottom-0 before:bg-blue-500 "
                    : ""
                }`}
                href="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
