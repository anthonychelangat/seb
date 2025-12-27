import MainTour from "@/components/MainTour";
import ToursSkeleton from "@/components/ToursSkeleton";
import { getTourByTourId, getToursPhotosByTourId } from "@/lib/actions";
import React, { Suspense } from "react";

export async function GenerateMetadata() {
  const tour = await getTourByTourId();
  const pics = await getToursPhotosByTourId(id);

  return {
    title: tour.title || "Activity",
    description: tour.description || "Learn more about this tour.", // ← Picked from database!
    openGraph: {
      title: tour.title || "Activity",
      description: tour.description || "Learn more about this tour.",
      image: pics.url[0],
    },
  };
}

const singleTour = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<ToursSkeleton />}>
      <MainTour id={id} />
    </Suspense>
  );
};

export default singleTour;
