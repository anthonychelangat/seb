import EditTour from "@/components/EditTour";
import { getTourByTourId } from "@/lib/actions";
import React from "react";

const editTour = async ({ params }) => {
  const { id } = params;
  console.log(id, "id");
  const tour = await getTourByTourId(id);
  return (
    <div>
      {tour.map(u => (
        <EditTour
          key={u.id}
          id={u.id}
          title={u.title}
          description={u.description}
        />
      ))}
    </div>
  );
};

export default editTour;
