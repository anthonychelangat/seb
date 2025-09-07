"use client";

import React, { useState } from "react";
import { addSingleUser } from "@/lib/data";
import { FaEdit } from "react-icons/fa";
import SelectOptions from "./SelectOptions";

const AddUser = ({ roles }) => {
  const id = 4;

  const [userId, setUserId] = useState(id);
  const handleUserId = e => {
    setUserId(e.target.value);
  };

  const [file, setFile] = useState([]);

  const fileChange = e => {
    setFile(e.target.files);
  };

  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Add User</p>
        <form action={addSingleUser} className="space-y-4">
          <input
            type="number"
            hidden
            name="user_id"
            id="user_id"
            onChange={handleUserId}
            value={id}
          />

          <div className="space-y-4">
            <div
              className="flex flex-col gap-2 items-center justify-center 
                    w-[100%] h-[6rem] border border-dotted border-black bg-purple-100 rounded-[6px]">
              <p className="font-semibold">
                <FaEdit />
              </p>
              <label className="cursor-pointer" htmlFor="file">
                Press Here
              </label>
              <input
                type="file"
                hidden
                name="file"
                id="file"
                onChange={fileChange}
                multiple
              />
            </div>
          </div>

          <div className="">
            <p>Full Name</p>
            <input
              className="py-2 px-4 w-full outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Full Name"
              name="username"
            />
          </div>

          <div>
            <p>Email</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="email"
              placeholder="Email..."
              name="email"
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
              type="password"
              placeholder="Password..."
              name="password"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
