import Link from "next/link";
import React from "react";
import { MdGridView, MdContactMail } from "react-icons/md";
import { FaUser, FaLink, FaUsers } from "react-icons/fa6";
import { FaHiking, FaInfoCircle } from "react-icons/fa";

const SideBarComponent = async ({ id }) => {
  const navItems = [
    {
      href: `/admin/${id}`,
      label: "Dashboard",
      icon: <MdGridView className="text-xl" />,
    },
    {
      href: `/admin/${id}/addTour`,
      label: "Add Tour",
      icon: <FaHiking className="text-xl" />,
    },
    {
      href: `/admin/${id}/addUser`,
      label: "Add User",
      icon: <FaUser className="text-xl" />,
    },
    {
      href: `/admin/${id}/addSocials`,
      label: "Add Social Links",
      icon: <FaLink className="text-xl" />,
    },
    {
      href: `/admin/${id}/addContacts`,
      label: "Add Contacts",
      icon: <MdContactMail className="text-xl" />,
    },
    {
      href: `/admin/${id}/addAboutUs`,
      label: "Add About Us",
      icon: <FaInfoCircle className="text-xl" />,
    },
    {
      href: `/admin/${id}/assignGuides`,
      label: "Assign Guides",
      icon: <FaUsers className="text-xl" />,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-gray-900 to-indigo-950 text-white shadow-2xl transform transition-transform duration-300 lg:translate-x-0">
      <div className="flex h-full flex-col">
        {/* Logo / Brand */}
        <div className="px-8 py-10 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Seb Expeditions
              </h1>
              <p className="text-sm text-gray-400">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 group">
              <span className="text-indigo-400 group-hover:text-pink-400 transition-colors">
                {item.icon}
              </span>
              <span className="font-medium text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Accent */}
        <div className="px-8 py-6 border-t border-white/10">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Seb Expeditions
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideBarComponent;
