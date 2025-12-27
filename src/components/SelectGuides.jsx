import React from "react";
import { getGuides } from "@/lib/actions";

const SelectGuides = async () => {
  const guides = await getGuides();

  return (
    <select
      id="user_id"
      name="user_id"
      required
      className="w-full px-6 py-4 text-lg bg-white border-2 border-gray-300 rounded-xl 
                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 
                 focus:outline-none transition-all duration-200 
                 capitalize appearance-none cursor-pointer
                 hover:border-indigo-400"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: "right 1rem center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1.5em",
      }}>
      {guides.map(guide => (
        <option key={guide.id} value={guide.id} className="capitalize py-2">
          {guide.username}
        </option>
      ))}
    </select>
  );
};

export default SelectGuides;
