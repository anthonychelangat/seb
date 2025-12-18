import React from "react";
import SideBar from "./SideBar";
import { getUserByEmail } from "@/lib/actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

const SessionAdmin = async () => {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email ?? "tony@gmail.com";

  const user = await getUserByEmail(email);

  const [id] = user.map(u => u.id);

  return (
    <div>
      <SideBar id={id} />
    </div>
  );
};

export default SessionAdmin;
