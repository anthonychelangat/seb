import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import MobileHeader from "./MobileHeader";

const SessionMobileHeader = async () => {
  const session = await auth();
  const email = session?.user.email;

  const users = await getUserByEmail(email);

  return (
    <div className="md:hidden lg:hidden fixed top-0 left-0 right-0  mb-[6rem] md:mb-[7rem] lg:mb-[7rem]  ">
      <MobileHeader session={session} users={users} />
    </div>
  );
};

export default SessionMobileHeader;
