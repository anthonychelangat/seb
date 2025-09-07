"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const IntermediateFooter = ({ links, contacts }) => {
  const linkss = ["/", "/login", "/register", "/about", "/contact", "/tours"];
  const pathname = usePathname();
  const activeLink = linkss.some(link => pathname === link);

  return (
    <div>{activeLink && <Footer links={links} contacts={contacts} />}</div>
  );
};

export default IntermediateFooter;
