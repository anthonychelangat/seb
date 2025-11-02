import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getUserByEmail, logOut } from "../lib/actions";
import Link from "next/link";

const Profile = ({ session, users }) => {
  const [id] = users.map(u => u.id);

  const [role] = users.map(u => u.role);

  return (
    <div className="flex items-center gap-2">
      {session?.user?.name && session?.user?.image ? (
        <>
          <Image
            className="w-[2rem] aspect-square rounded-[50%]"
            src={session?.user.image}
            alt={session?.user.name}
            width={50}
            height={50}
          />
          <p className=" py-4 text-nowrap">{session?.user.name}</p>
        </>
      ) : (
        <p className="block tracking-wide font-semibold">
          {session?.user.email}
        </p>
      )}
      <details className="relative">
        <summary></summary>

        <div className="absolute top-[70%] mt-2 bg-purple-400 p-4 z-50 ">
          <form className="" action={logOut}>
            <button
              className="text-lg tracking-tight font-bold py-4 text-nowrap text-red-900 hover:underline"
              type="submit">
              Log Out
            </button>
          </form>

          <div>
            {session?.user && role === 1 && (
              <Link
                className={`text-lg tracking-tight font-bold py-4 relative`}
                href={`/admin/${id}`}>
                Admin
              </Link>
            )}
          </div>
        </div>
      </details>
    </div>
  );
};

export default Profile;
