import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import MobileSideLinks from "./MobileSideLinks";

const mobileSideBar = async () => {
  const session = await auth();
  const email = session?.user.email;

  const users = await getUserByEmail(email);
  console.log(email, "email");
  console.log(users, "users");
  return <MobileSideLinks session={session} users={users} />;
};

export default mobileSideBar;
