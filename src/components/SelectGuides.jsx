import React from "react";
import { getGuides } from "@/lib/actions";

const SelectGuides = async () => {
  const guides = await getGuides();

  return (
    <div>
      <select
        className="bg-transparent capitalize w-full py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="user_id"
        name="user_id">
        {guides.map(guide => (
          <option className="capitalize" key={guide.id} value={guide.id}>
            {guide.username}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGuides;
