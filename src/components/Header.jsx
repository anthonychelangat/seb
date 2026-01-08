"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import Profile from "./Profile";

const Header = ({ session, users }) => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/tours", label: "Tour Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-indigo-900 backdrop-blur-md shadow-xl border-b border-gray-800">
      <div className="max-w-5xl mx-auto py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wider text-white hover:from-indigo-300 hover:to-teal-300 transition-all duration-500">
          SEB
        </Link>

        {/* Navigation + Auth */}
        <nav className="flex items-center gap-8">
          {/* Main Links */}
          <div className="flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-lg font-semibold tracking-wide transition-all duration-300
                  ${
                    pathname === link.href
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }
                `}>
                {link.label}
                {/* Active Indicator */}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full shadow-lg shadow-indigo-500/50" />
                )}
              </Link>
            ))}
          </div>

          {/* Login / Profile */}
          <div className="ml-8">
            {session?.user ? (
              <Suspense
                fallback={<div className="text-gray-400">Loading...</div>}>
                <Profile session={session} users={users} />
              </Suspense>
            ) : (
              <Link
                href="/login"
                className={`
                  px-7 py-3 text-lg font-semibold rounded-xl transition-all duration-300
                  ${
                    pathname === "/login"
                      ? "bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-lg shadow-indigo-600/50"
                      : "bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-gray-700"
                  }
                `}>
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
