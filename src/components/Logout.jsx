"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Logout = () => {
  return (
    <button
      className="text-lg tracking-tight font-bold py-4 text-nowrap text-red-900 hover:underline"
      onClick={() => signOut({ callbackUrl: "/login" })}>
      Sign out
    </button>
  );
};

export default Logout;
