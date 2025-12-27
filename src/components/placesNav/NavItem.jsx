"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import UserOptions from "../UserOptions";

const NavItem = ({ items, id }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentRole = searchParams.get("role");

  // Helper to check if a link is active
  const isActive = hrefRole => {
    if (hrefRole === null) {
      return pathname === `/admin/${id}/allUsers` && !currentRole;
    }
    return currentRole === hrefRole;
  };

  return (
    <div className="flex items-center gap-1 bg-white rounded-xl shadow-md p-2 border border-gray-200">
      {/* All Users Tab */}
      <Link
        href={`/admin/${id}/allUsers`}
        className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-200 capitalize
          ${
            isActive(null)
              ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}>
        All
      </Link>

      {/* Role Tabs */}
      {items.map(item => (
        <Link
          key={item.role}
          href={`/admin/${id}/allUsers/?role=${item.role}`}
          className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-200 capitalize
            ${
              isActive(item.role)
                ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}>
          <UserOptions id={item.role} />
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
