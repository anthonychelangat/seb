"use client"; // 👈 this file is client-only

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
