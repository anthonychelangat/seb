import AssignGuides from "@/components/AssignGuides";
import { getUserById } from "@/lib/actions";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const user = await getUserById(id);
  console.log(user, "user");
  return (
    <div>
      {user.map(u => (
        <AssignGuides key={u.id} id={u.id} />
      ))}
    </div>
  );
};

export default page;
