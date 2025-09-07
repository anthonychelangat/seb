import EditTour from "@/components/EditTour";
import { getTourByTourId } from "@/lib/actions";
import React from "react";

const editTour = async ({ params }) => {
  const { tourId } = await params;

  const tour = await getTourByTourId(tourId);

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
