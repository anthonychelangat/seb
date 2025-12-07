"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import { MdLogin } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FaHiking, FaHome, FaInfo, FaPhone } from "react-icons/fa";
import MobileProfile from "./MobileProfile";
import { SiHomepage } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdTour } from "react-icons/md";

const MobileSideLinks = ({ session, users }) => {
  const pathname = usePathname();

  return (
    <div className="bg-[#020224] text-[white] ">
      <div className="mx-4 flex flex-col justify-between gap-[10rem] ">
        <div className="flex flex-col gap-4">
          <Link
            className={`flex items-center gap-6 text-base font-semibold py-4 relative ${
              pathname === "/"
                ? "text-blue-500 before:absolute before:content-[''] before:h-[40%] before:w-2 before:right-0 before:bg-blue-500 "
                : ""
            }`}
            href="/">
            <SiHomepage />
            Home
          </Link>

          <Link
            className={`flex items-center gap-6 text-base font-semibold py-4 relative ${
              pathname === "/about"
                ? "text-blue-500 before:absolute before:content-[''] before:h-[40%] before:w-2 before:right-0 before:bg-blue-500 "
                : ""
            }`}
            href="/about">
            <BsFillInfoSquareFill />
            About Us
          </Link>
          <Link
            className={`flex items-center gap-6 text-base font-semibold py-4 relative ${
              pathname === "/tours"
                ? "text-blue-500 before:absolute before:content-[''] before:h-[40%] before:w-2 before:right-0 before:bg-blue-500 "
                : ""
            }`}
            href="/tours">
            <MdTour />
            Tour Packages
          </Link>
          <Link
            className={`flex items-center gap-6 text-base font-semibold py-4 relative ${
              pathname === "/contact"
                ? "text-blue-500 before:absolute before:content-[''] before:h-[40%] before:w-2 before:right-0 before:bg-blue-500 "
                : ""
            }`}
            href="/contact">
            <RiContactsBook3Fill />
            Contact
          </Link>
        </div>

        <div>
          {session?.user ? (
            <Suspense fallback={<div>Loading...</div>}>
              <MobileProfile session={session} users={users} />
            </Suspense>
          ) : (
            <Link
              className={`flex items-center gap-6 text-base font-semibold py-4 relative ${
                pathname === "/login"
                  ? "text-blue-500 before:absolute before:content-[''] before:h-[40%] before:w-2 before:right-0 before:bg-blue-500 "
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
