import PreviousPage from "@/components/PreviousPage";
import UserOptions from "@/components/UserOptions";
import { deleteUser, getRoles, getuserWithPics } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const page = async ({ params }) => {
  const { user_id } = await params;

  const user = await getuserWithPics(user_id);

  return (
    <div>
      {user.map(u => (
        <div className="my-8 space-y-4">
          <div className="flex items-center justify-between ">
            <PreviousPage />
            <div className="flex items-center gap-4">
              <Link href={`/admin/${user_id}/editUser/${u.id}`}>
                <FaPen className="text-blue-700" />
              </Link>
              <form action={deleteUser}>
                <input hidden name="user_id" value={u.id} />
                <button type="submit">
                  <FaTrash className="text-red-700" />
                </button>
              </form>
            </div>
          </div>
          <div key={u.id} className="grid grid-cols-8 gap-2">
            <div className="col-span-4">
              <Image
                className="w-full aspect-1/1"
                width={500}
                height={50}
                src={u.url}
              />
            </div>
            <div className="col-span-4 space-y-6">
              <div className="space-y-2">
                <p>User Name</p>
                <p className="capitalize bold">{u.username}</p>
              </div>
              <div className="space-y-2">
                <p>Email</p>
                <p className="bold">{u.email}</p>
              </div>
              <div className="space-y-2">
                <p>Role</p>
                <div className="capitalize bold">
                  <UserOptions id={u.role} />
                </div>
              </div>
              <div className="space-y-2">
                <p>Password</p>
                <p className="capitalize bold">{u.password}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
