import React from "react";
import Header from "./Header";
import { auth } from "../lib/auth";
import { getUserByEmail } from "@/lib/actions";

const SessionHeader = async () => {
  const session = await auth();
  const email = session?.user.email;

  const users = await getUserByEmail(email);

  return (
    <div className="w-[100%] z-100 sticky top-0 h-[7rem] max-h-[6rem]">
      <Header session={session} users={users} />
    </div>
  );
};

export default SessionHeader;
