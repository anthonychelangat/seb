import { getTours, getToursLimit } from "@/lib/actions";
import React from "react";
import HomeTour from "./HomeTour";

const HomeTours = async () => {
  const tours = await getToursLimit();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      {tours.map(t => (
        <HomeTour
          key={t.id}
          title={t.title}
          description={t.description}
          id={t.id}
        />
      ))}
    </div>
  );
};

export default HomeTours;
