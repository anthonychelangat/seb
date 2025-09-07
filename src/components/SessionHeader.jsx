import React from "react";
import { auth } from "../lib/auth";
import { getUserByEmail } from "@/lib/actions";
import IntermediateHeader from "./IntermediateHeader";

const SessionHeader = async () => {
  const session = await auth();
  const email = session?.user.email;

  const users = await getUserByEmail(email);

  return (
    <div className="hidden md:block xl:block fixed left-0 right-0 w-[100%] z-100 top-0 h-[7rem]">
      <IntermediateHeader session={session} users={users} />
    </div>
  );
};

export default SessionHeader;
