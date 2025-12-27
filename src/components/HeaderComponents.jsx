import Link from "next/link";
import React from "react";
import {
  FaHiking,
  FaUser,
  FaLink,
  FaInfoCircle,
  FaUsersCog,
} from "react-icons/fa";
import { MdContactMail, MdGridView } from "react-icons/md";

const HeaderComponents = ({ id }) => {
  const links = [
    { href: `/admin/${id}`, label: "Dashboard", icon: MdGridView },
    { href: `/admin/${id}/addTour`, label: "Add Tour", icon: FaHiking },
    { href: `/admin/${id}/addUser`, label: "Add User", icon: FaUser },
    { href: `/admin/${id}/addSocials`, label: "Add Socials", icon: FaLink },
    {
      href: `/admin/${id}/addContacts`,
      label: "Add Contacts",
      icon: MdContactMail,
    },
    { href: `/admin/${id}/addAboutUs`, label: "Add About", icon: FaInfoCircle },
    {
      href: `/admin/${id}/assignGuides`,
      label: "Assign Guides",
      icon: FaUsersCog,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-8 lg:gap-12 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800 pb-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-3 min-w-fit px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:scale-105">
              <Icon className="text-3xl text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              <span className="text-sm font-semibold text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                {label}
              </span>
              {/* Active Indicator (optional - add active state logic if needed) */}
              <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full transition-all duration-300 group-hover:w-12 group-hover:left-[calc(50%-1.5rem)]" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponents;
