"use client";

import { updateUser } from "@/lib/data";
import React, { useState } from "react";
import SelectOptions from "./SelectOptions";

const EditUserForm = ({ id, username, email, role, password, roles }) => {
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newRole, setNewRole] = useState(role);
  const [newPassword, setNewPassword] = useState(password);

  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Update User</p>
        <form action={updateUser} className="space-y-4">
          <input type="number" hidden name="user_id" value={id} />

          <div>
            <p>Full Name</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Full Name"
              name="username"
              value={newUsername}
              onChange={e => setNewUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="email"
              placeholder="Email"
              name="email"
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Role</p>
            <SelectOptions roles={roles} />
          </div>
          <div>
            <p>Password</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Password"
              name="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;
