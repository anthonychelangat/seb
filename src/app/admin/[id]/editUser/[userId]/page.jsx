import EditUserForm from "@/components/EditUser";
import { getUserById, getusersWithPics } from "@/lib/actions";
import React from "react";

const editUser = async ({ params }) => {
  const { id } = params;
  console.log(id, "id");
  const user = await getUserById(id);
  return (
    <div>
      {user.map(u => (
        <EditUserForm
          key={u.id}
          id={u.id}
          username={u.username}
          email={u.email}
          role={u.role}
          password={u.password}
        />
      ))}
    </div>
  );
};

export default editUser;
