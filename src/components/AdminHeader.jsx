import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import HeaderComponents from "./HeaderComponents";

const AdminHeader = async () => {
  const session = await auth();

  const email = session?.user.email;

  const user = await getUserByEmail(email);

  const [id] = user.map(u => u.id);

  return <HeaderComponents id={id} />;
};

export default AdminHeader;
