import { deleteUser, getusersWithPics } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import UserOptions from "./UserOptions";
import Image from "next/image";

const AllUsers = async ({ id }) => {
  const users = await getusersWithPics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                  <th className="px-8 py-6 text-left text-lg font-semibold">
                    Id
                  </th>
                  <th className="px-8 py-6 text-left text-lg font-semibold">
                    User Name
                  </th>
                  <th className="px-8 py-6 text-left text-lg font-semibold hidden lg:table-cell">
                    Email
                  </th>
                  <th className="px-8 py-6 text-left text-lg font-semibold">
                    Role
                  </th>
                  <th className="px-8 py-6 text-center text-lg font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 hover:bg-indigo-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 font-medium text-gray-700">
                      {user.id}
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        {user.path && (
                          <Image
                            className="w-12 h-12 rounded-full object-cover ring-4 ring-white shadow-md"
                            src={user.path}
                            width={48}
                            height={48}
                            alt={user.username}
                          />
                        )}
                        <span className="font-semibold text-gray-900 capitalize">
                          {user.username}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-6 text-gray-600 hidden lg:table-cell">
                      {user.email}
                    </td>

                    <td className="px-8 py-6">
                      <div className="text-lg font-semibold text-indigo-600">
                        <UserOptions id={user.role} />
                      </div>
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-center justify-center gap-5">
                        <Link
                          href={`/admin/${id}/singleUser/${user.id}`}
                          className="group p-3 rounded-xl bg-blue-100 hover:bg-blue-200 transition-all duration-200"
                          title="View">
                          <FaEye className="text-xl text-blue-600 group-hover:text-blue-800" />
                        </Link>

                        <Link
                          href={`/admin/${id}/editUser/${user.id}`}
                          className="group p-3 rounded-xl bg-green-100 hover:bg-green-200 transition-all duration-200"
                          title="Edit">
                          <FaPen className="text-xl text-green-600 group-hover:text-green-800" />
                        </Link>

                        <form action={deleteUser} className="inline">
                          <input
                            hidden
                            name="user_id"
                            value={user.id}
                            readOnly
                          />
                          <button
                            type="submit"
                            className="group p-3 rounded-xl bg-red-100 hover:bg-red-200 transition-all duration-200"
                            title="Delete">
                            <FaTrash className="text-xl text-red-600 group-hover:text-red-800" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500">
                  No users found for this role.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
