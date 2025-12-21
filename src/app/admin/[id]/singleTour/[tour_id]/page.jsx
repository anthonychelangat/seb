import TourDetails from "@/components/TourDetails";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const { id, tour_id } = await params;

  return (
    <Suspense>
      <TourDetails id={id} tour_id={tour_id} />
    </Suspense>
  );
};

export default page;
