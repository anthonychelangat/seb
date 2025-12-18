import { getUserByEmail } from "@/lib/actions";
import React from "react";
import HeaderComponents from "./HeaderComponents";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

const AdminHeader = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ? session?.user?.email : "tony@gmail.com";

  const user = await getUserByEmail(email);

  const [id] = user.map(u => u.id);

  return <HeaderComponents id={id} />;
};

export default AdminHeader;
