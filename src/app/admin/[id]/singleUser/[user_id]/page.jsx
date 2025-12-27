import PreviousPage from "@/components/PreviousPage";
import UserOptions from "@/components/UserOptions";
import { deleteUser, getuserWithPics } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = async ({ params }) => {
  const { user_id } = await params;
  const user = await getuserWithPics(user_id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {user.map(u => (
          <div
            key={u.id}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <PreviousPage />

              <div className="flex items-center gap-5">
                <Link
                  href={`/admin/${user_id}/editUser/${u.id}`}
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm">
                  <FaPen className="text-2xl" />
                  <span className="font-semibold text-lg">Edit User</span>
                </Link>

                <form action={deleteUser} className="inline">
                  <input hidden name="user_id" value={u.id} readOnly />
                  <button
                    type="submit"
                    className="flex items-center gap-3 bg-red-600/90 hover:bg-red-600 px-6 py-4 rounded-xl transition-all duration-200">
                    <FaTrash className="text-2xl" />
                    <span className="font-semibold text-lg">Delete</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Main Profile Section */}
            <div className="p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative group max-w-lg w-full">
                    <Image
                      src={u.url || "/fallback-avatar.jpg"}
                      alt={u.username}
                      width={500}
                      height={500}
                      className="w-full aspect-square object-cover rounded-3xl shadow-2xl border-8 border-white"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-2xl font-bold">
                        Profile Picture
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-12">
                  <div className="space-y-3">
                    <p className="text-xl font-semibold text-gray-600">
                      Full Name
                    </p>
                    <p className="text-4xl font-bold text-gray-900 capitalize">
                      {u.username}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xl font-semibold text-gray-600">
                      Email Address
                    </p>
                    <p className="text-3xl font-medium text-gray-800 break-all">
                      {u.email}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xl font-semibold text-gray-600">Role</p>
                    <div className="text-3xl font-bold text-indigo-600 capitalize">
                      <UserOptions id={u.role} />
                    </div>
                  </div>

                  {/* Security: Hide actual password */}
                  <div className="space-y-3">
                    <p className="text-xl font-semibold text-gray-600">
                      Password
                    </p>
                    <p className="text-3xl font-medium text-gray-800">
                      ••••••••••••••••
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Hidden for security reasons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
