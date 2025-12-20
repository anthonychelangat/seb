import React from "react";

import { getUserByEmail } from "@/lib/actions";
import IntermediateHeader from "./IntermediateHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import executeQuery from "@/lib/utils";

const SessionHeader = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? "tony@gmail.com";
  const users = await getUserByEmail(email);

  //if (users.length === 0) {
  //  const role = 3;

  //  await executeQuery("insert into users(username,email,role) values(?,?,?)", [
  //    session.user.name,
  //   session.user.email,
  //    role,
  //  ]);
  // }

  return (
    <div className="hidden md:block xl:block fixed left-0 right-0 w-[100%] z-100 top-0 h-[7rem]">
      <IntermediateHeader session={session} users={users} />
    </div>
  );
};

export default SessionHeader;
