import React from "react";
import Header from "./Header";
import { auth } from "../lib/auth";
import SideBar from "./SideBar";
import { getUserByEmail } from "@/lib/actions";

const SessionAdmin = async () => {
  const session = await auth();

  const email = session?.user.email;

  const user = await getUserByEmail(email);
  const [id] = user.map(u => u.id);

  return (
    <div>
      <SideBar id={id} />
    </div>
  );
};

export default SessionAdmin;
