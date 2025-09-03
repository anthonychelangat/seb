import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import MobileHeader from "./MobileHeader";

const SessionMobileHeader = async () => {
  const session = await auth();
  const email = session?.user.email;

  const users = await getUserByEmail(email);
  console.log(users, "uuuuu");

  return <MobileHeader session={session} users={users} />;
};

export default SessionMobileHeader;
