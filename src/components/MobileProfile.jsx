import React from "react";
import Link from "next/link";
import Logout from "./Logout";

const MobileProfile = ({ session, users }) => {
  const [id] = users.map(u => u.id);
  const [role] = users.map(u => u.role);

  return (
    <div className="flex flex-col gap-2">
      {session?.user?.name && session?.user?.image ? (
        <div className="space-y-4">
          <img
            className="w-[2rem] border border-white aspect-square rounded-[50%]"
            src={session?.user.image}
            alt={session?.user.name}
            width={50}
            height={50}
          />
          <p className="text-lg/6 font-semibold  text-nowrap">
            {session?.user.name}
          </p>
          <p className="text-lg/6 text-sm font-semibold  text-nowrap">
            {session?.user.email}
          </p>
        </div>
      ) : (
        <p>{session?.user.email}</p>
      )}

      <div className="flex flex-col py-4">
        <div>
          {session?.user && role === 1 && (
            <Link
              className={`text-base uppercase font-semibold py-4 relative`}
              href={`/admin/${id}`}>
              Admin
            </Link>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Logout />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
