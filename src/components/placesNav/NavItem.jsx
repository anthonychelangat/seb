"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import UsersByRole from "../UsersByRole";
import UserOptions from "../UserOptions";

const NavItem = ({ items, id }) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const role = searchParam.get("role");

  return (
    <div className="flex items-center gap-4">
      <Link
        className={`py-2 pr-4 capitalize relative hover:bg-gray-200 ${
          pathname === `/admin/${id}/allUsers`
            ? "text-blue-700 before:content-[''] before:w-full before:h-1 before:bg-blue-700 before:absolute before:bottom-0 before:pt-1"
            : ""
        }`}
        href={`/admin/${id}/allUsers`}>
        All
      </Link>
      {items.map(item => (
        <Link
          className={`py-2 px-4 capitalize relative hover:bg-gray-200 ${
            pathname === `/admin/${id}/allUsers?role=${role}`
              ? "text-blue-700 before:content-[''] before:w-full before:h-1 before:bg-blue-700 before:absolute before:bottom-0 before:pt-1"
              : ""
          }`}
          href={`/admin/${id}/allUsers/?role=${item.role}`}
          key={item.role}>
          <UserOptions id={item.role} />
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
