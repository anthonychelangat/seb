"use client";

import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";

const IntermediateMobileHeader = ({ session, users }) => {
  const links = ["/", "/about", "/contact", "/tours"];
  const pathname = usePathname();
  const activeLink = links.some(link => pathname === link);

  return (
    <div>{activeLink && <MobileHeader session={session} users={users} />}</div>
  );
};

export default IntermediateMobileHeader;
