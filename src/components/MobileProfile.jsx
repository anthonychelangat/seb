import React from "react";
import Link from "next/link";
import Logout from "./Logout";

const MobileProfile = ({ session, users }) => {
  const [id] = users.map(u => u.id);
  const [role] = users.map(u => u.role);

  return (
    <div className="flex flex-col gap-2">
      {session?.user?.name && session?.user?.image ? (
        <>
          <img
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
          {session?.user && role === 1 && (
            <Link
              className={`text-base font-semibold py-4 relative`}
              href={`/admin/${id}`}>
              Admin
            </Link>
          )}
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default MobileProfile;
