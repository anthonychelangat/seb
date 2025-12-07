import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getUserByEmail, logOut } from "../lib/actions";
import Link from "next/link";

const MobileProfile = ({ session, users }) => {
  const [id] = users.map(u => u.id);

  return (
    <div className="flex flex-col gap-2">
      {session?.user?.name && session?.user?.image ? (
        <>
          <Image
            className="w-[2rem] aspect-square rounded-[50%]"
            src={session?.user.image}
            alt={session?.user.name}
            width={50}
            height={50}
          />
          <p className="text-lg/6 font-semibold py-4 text-nowrap">
            {session?.user.name}
          </p>
        </>
      ) : (
        <p>{session?.user.email}</p>
      )}

      <div className="flex flex-col gap-2 ">
        <div>
          {session?.user && (
            <Link
              className={`text-base font-semibold py-4 relative`}
              href={`/admin/${id}`}>
              Admin
            </Link>
          )}
        </div>
        <form className="" action={logOut}>
          <button
            className="text-lg/6 font-semibold py-4 text-nowrap text-red-900 hover:underline"
            type="submit">
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileProfile;
