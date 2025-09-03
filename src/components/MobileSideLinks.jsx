"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import { MdCancel, MdLogin } from "react-icons/md";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
import { FaHiking, FaHome, FaInfo, FaPhone } from "react-icons/fa";

const MobileSideLinks = ({ session, users }) => {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="mx-4 flex flex-col gap-[10rem] ">
        <div className="flex flex-col gap-4">
          <Link
            className={`flex items-center gap-4 text-lg/6 font-semibold py-4 relative ${
              pathname === "/" ? "text-blue-900 " : ""
            }`}
            href="/">
            <FaHome />
            Home
          </Link>

          <Link
            className={`flex items-center gap-6 text-lg/6 font-semibold py-4 relative ${
              pathname === "/about" ? "text-blue-900" : ""
            }`}
            href="/about">
            <FaInfo />
            About Us
          </Link>
          <Link
            className={`flex items-center gap-6 text-lg/6 font-semibold py-4 relative ${
              pathname === "/tours"
                ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-blue-500 "
                : ""
            }`}
            href="/tours">
            <FaHiking />
            Tour Packages
          </Link>
          <Link
            className={`flex items-center gap-6 text-lg/6 font-semibold py-4 relative ${
              pathname === "/contact"
                ? "text-blue-900 before:absolute before:content-[''] before:w-full before:h-1 before:mt-4 before:bottom-0 before:bg-blue-500 "
                : ""
            }`}
            href="/contact">
            <FaPhone />
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
              className={`flex items-center gap-6 text-lg/6 font-semibold py-4 relative ${
                pathname === "/login"
                  ? "text-blue-500 before:absolute before:content-[''] before:w-full before:h-2 before:bottom-0 before:bg-blue-500 "
                  : ""
              }`}
              href="/login">
              <MdLogin />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSideLinks;
