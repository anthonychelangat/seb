import React from "react";
import Link from "next/link";
import Logout from "./Logout";

const Profile = ({ session, users }) => {
  // Safely extract the first user's id and role (assuming users is an array with one item)
  const user = users[0];
  const id = user?.id;
  const role = user?.role;

  return (
    <div className="relative group">
      {/* Profile Trigger / Display */}
      <button className="flex items-center gap-3 text-white hover:text-indigo-200 transition-colors focus:outline-none">
        {/* Avatar */}
        {session?.user?.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="w-10 h-10 rounded-full ring-2 ring-white/30 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg ring-2 ring-white/30">
            {(session?.user?.name ||
              session?.user?.email ||
              "?")[0].toUpperCase()}
          </div>
        )}

        {/* Name / Email */}
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium">
            {session?.user?.name || session?.user?.email}
          </p>
          <p className="text-xs text-white/70">Account</p>
        </div>

        {/* Dropdown Arrow */}
        <svg
          className="w-4 h-4 text-white/70 group-hover:text-white transition-transform group-focus:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 z-50">
        <div className="py-3">
          {/* User Info Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500 mt-1 truncate">
              {session?.user?.email}
            </p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {/* Admin Link - Only for role === 1 */}
            {role === 1 && id && (
              <Link
                href={`/admin/${id}`}
                className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Admin Dashboard
              </Link>
            )}

            {/* Logout */}
            <div className="px-6 py-3">
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
