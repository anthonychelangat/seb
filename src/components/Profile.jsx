import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getUserByEmail, logOut } from "../lib/actions";
import Link from "next/link";

const Profile = ({ session, users }) => {
  console.log(users);
  const [id] = users.map(u => u.id);
  console.log(id);
  return (
    <div className="flex items-center gap-2">
      {session?.user?.name && session?.user?.image ? (
        <>
          <Image
            className="w-[2rem] aspect-square rounded-[50%]"
            src={session?.user?.image ? session?.user?.image : "/noavater.jpeg"}
            alt={session?.user?.name ? session?.user?.name : "tony"}
            width={50}
            height={50}
          />
          <p className="text-lg/6 font-semibold py-4 text-nowrap">
            {session?.user?.name ? session?.user?.name : "Tony"}
          </p>
        </>
      ) : (
        <p>{session?.user?.email ? session?.user?.email : "tony@gmail.com"}</p>
      )}
      <details className="relative">
        <summary></summary>

        <div className="absolute top-[70%] mt-2 space-y-8 bg-purple-400 p-4 z-50 ">
          <form className="" action={logOut}>
            <button
              className="text-lg/6 font-semibold py-4 text-nowrap text-red-900 hover:underline"
              type="submit">
              Log Out
            </button>
          </form>
          <Link className="hover:underline text-nowrap mt-2 " href="/profile">
            <p className="text-lg/6 font-semibold py-4 ">Profile</p>
          </Link>
          <div>
            {session?.user && (
              <Link
                className={`text-lg/6 font-semibold py-4 relative`}
                href={`/admin/${id}`}>
                Admin
              </Link>
            )}
          </div>
          <Link
            className="text-lg/6 font-semibold py-4 hover:underline text-nowrap mt-2 "
            href="/saved">
            <p>Saved</p>
          </Link>
        </div>
      </details>
    </div>
  );
};

export default Profile;
