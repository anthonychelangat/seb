import React from "react";
import { getTours } from "@/lib/actions";

const SelectTours = async () => {
  const tours = await getTours();
  return (
    <div>
      <select
        className="bg-transparent capitalize w-full py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="tour_id"
        name="tour_id">
        {tours.map(tour => (
          <option className="capitalize" key={tour.id} value={tour.id}>
            {tour.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTours;
