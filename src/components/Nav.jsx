"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Nav = () => {
  const searchParam = useSearchParams();

  const role = searchParam.get("role");

  return role;
};

export default Nav;
