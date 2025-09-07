import React from "react";
import UserOptions from "./UserOptions";

const SelectOptions = ({ roles }) => {
  return (
    <div>
      <select
        className="bg-transparent capitalize w-full py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="role"
        name="role">
        {roles.map(role => (
          <option className="capitalize" key={role.id} value={role.role}>
            <UserOptions id={role.role} />
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
