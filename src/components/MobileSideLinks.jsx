"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import { MdLogin } from "react-icons/md";
import { usePathname } from "next/navigation";
import MobileProfile from "./MobileProfile";
import { SiHomepage } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdTour } from "react-icons/md";

const MobileSideLinks = ({ session, users }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <SiHomepage className="text-3xl" /> },
    {
      href: "/about",
      label: "About Us",
      icon: <BsFillInfoSquareFill className="text-3xl" />,
    },
    {
      href: "/tours",
      label: "Tour Packages",
      icon: <MdTour className="text-3xl" />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <RiContactsBook3Fill className="text-3xl" />,
    },
  ];

  return (
    <div className="fixed left-0 w-80 bg-indigo-950 text-white z-[9999] overflow-y-auto">
      <div className="flex flex-col justify-between h-full py-12 px-8">
        {/* Main Navigation */}
        <nav className="space-y-3">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`group z-[9999] flex items-center gap-6 px-8 py-6 rounded-3xl text-xl font-semibold transition-all duration-400 overflow-hidden relative
                ${
                  pathname === item.href
                    ? "text-white shadow-2xl"
                    : "text-gray-300 hover:text-white"
                }`}>
              <span
                className={`transition-all duration-400 ${
                  pathname === item.href
                    ? "text-indigo-300"
                    : "text-gray-400 group-hover:text-indigo-300"
                }`}>
                {item.icon}
              </span>
              <span className="relative z-10">{item.label}</span>

              {/* Active Gradient Background */}
              {pathname === item.href && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-pink-600/90 rounded-3xl" />
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
            </Link>
          ))}

          {/* Login / Profile Section */}
          <div className="mt-12 pt-10 border-t border-white/10">
            {session?.user ? (
              <Suspense
                fallback={
                  <div className="text-gray-400 px-8 py-6">
                    Loading profile...
                  </div>
                }>
                <MobileProfile session={session} users={users} />
              </Suspense>
            ) : (
              <Link
                href="/login"
                className={`group flex items-center gap-6 px-8 py-6 rounded-3xl text-xl font-semibold transition-all duration-400 overflow-hidden relative
                  ${
                    pathname === "/login"
                      ? "text-white shadow-2xl"
                      : "text-gray-300 hover:text-white"
                  }`}>
                <MdLogin
                  className={`text-3xl transition-all duration-400 ${
                    pathname === "/login"
                      ? "text-indigo-300"
                      : "text-gray-400 group-hover:text-indigo-300"
                  }`}
                />
                <span className="relative z-10">Login</span>

                {pathname === "/login" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-pink-600/90 rounded-3xl" />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileSideLinks;
