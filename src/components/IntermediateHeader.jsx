"use client";

import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

const IntermediateHeader = ({ session, users }) => {
  const links = ["/", "/login", "/register", "/about", "/contact", "/tours"];
  const pathname = usePathname();
  const activeLink = links.some(link => pathname === link);

  return <div>{activeLink && <Header session={session} users={users} />}</div>;
};

export default IntermediateHeader;
