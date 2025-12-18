import { getUserByEmail } from "@/lib/actions";
import React from "react";
import IntermediateMobileHeader from "./IntermediateMobileHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

const SessionMobileHeader = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ? session?.user?.email : "tony@gmail.com";

  const users = await getUserByEmail(email);

  return (
    <div className="md:hidden lg:hidden fixed top-0 left-0 right-0  mb-[6rem] md:mb-[7rem] lg:mb-[7rem]  ">
      <IntermediateMobileHeader session={session} users={users} />
    </div>
  );
};

export default SessionMobileHeader;
