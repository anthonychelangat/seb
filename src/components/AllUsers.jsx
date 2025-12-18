import { deleteUser, getusersWithPics } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import UserOptions from "./UserOptions";
import Image from "next/image";

const AllUsers = async ({ id }) => {
  const users = await getusersWithPics();

  return (
    <table className="border-collapse p-[1rem] rounded-bg shadow-black mx-auto overflow-auto w-[100%] bg-gray-100">
      <thead>
        <tr>
          <th className="p-[1rem] sticky bg-blue-400 border-collapse ">Id</th>
          <th className="p-[1rem] sticky bg-blue-400 border-collapse ">
            User Name
          </th>
          <th className="p-[1rem] hidden lg:block sticky bg-blue-400 border-collapse ">
            Email
          </th>
          <th className="p-[1rem] sticky bg-blue-400 border-collapse ">Role</th>
          <th className="p-[1rem] sticky bg-blue-400 border-collapse ">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (
            <tr className=" even:bg-blue-200 hover:bg-gray-50" key={user.id}>
              <td className="p-[1rem]">{user.id}</td>
              <td className="p-[1rem] capitalize flex items-center gap-1">
                {user.url && (
                  <Image
                    className="w-8 aspect-square rounded-[50%]"
                    src={`${user.url}`}
                    width={24}
                    height={24}
                    alt=""
                  />
                )}
                {user.username}
              </td>
              <td className="p-[1rem] hidden lg:block">{user.email}</td>
              <td className="p-[1rem]">
                <UserOptions id={user.role} />
              </td>
              <td className="p-[1rem] flex items-center gap-3">
                <Link
                  className="flex items-center"
                  href={`/admin/${id}/singleUser/${user.id}`}>
                  <FaEye className="text-xl flex items-center text-blue-500 hover:text-blue-900" />
                </Link>
                <Link href={`/admin/${id}/editUser/${user.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>
                <div>
                  <form action={deleteUser}>
                    <input hidden name="user_id" value={user.id} readOnly />
                    <button type="submit">
                      <FaTrash className="text-red-700" />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllUsers;
