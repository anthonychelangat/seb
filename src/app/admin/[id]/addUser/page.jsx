import AddUser from "@/components/AddUser";
import { getRoles } from "@/lib/actions";
import React from "react";

const page = async () => {
  const roles = await getRoles();

  return <AddUser roles={roles} />;
};

export default page;
