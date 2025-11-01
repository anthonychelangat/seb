import React from "react";
import SelectGuides from "./SelectGuides";
import SelectTours from "./SelectTours";
import { assignGuides } from "@/lib/data";

const AssignGuides = ({ id }) => {
  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Assign Guide</p>
        <form action={assignGuides} className="space-y-4">
          <div>
            <p>Tour Activity</p>
            <SelectTours />
          </div>
          <div>
            <p>Guide</p>
            <SelectGuides />
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignGuides;
