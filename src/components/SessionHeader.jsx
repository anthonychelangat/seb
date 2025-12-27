import React, { Suspense } from "react";
import { getUserByEmail } from "@/lib/actions";
import IntermediateHeader from "./IntermediateHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import executeQuery from "@/lib/utils";

const SessionHeader = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const users = await getUserByEmail(email);
  const name = session?.user?.name;

  if (session) {
    if (users.length === 0) {
      const role = 3;

      await executeQuery(
        "insert into users(username,email,role) values(?,?,?)",
        [name, email, role]
      );
    }
  }

  return (
    <div className="">
      <IntermediateHeader session={session} users={users} />
    </div>
  );
};

export default SessionHeader;
