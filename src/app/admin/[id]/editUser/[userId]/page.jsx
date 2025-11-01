import EditUserForm from "@/components/EditUser";
import { getRoles, getUserById, getUserPicsById } from "@/lib/actions";
import React from "react";

const editUser = async ({ params }) => {
  const { id, userId } = await params;

  const user = await getUserById(userId);
  const roles = await getRoles();
  const pics = await getUserPicsById(userId);

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
          roles={roles}
          pics={pics}
        />
      ))}
    </div>
  );
};

export default editUser;
