import MainTourSkeleton from "@/components/MainTourSkeleton";
import Tour from "@/components/Tour";
import { getTours } from "@/lib/actions";
import React, { Suspense } from "react";

const page = async () => {
  const tour = await getTours();

  return (
    <Suspense fallback={<MainTourSkeleton />}>
      <div>
        <div className="lg:max-w-5xl relative -z-10 py-6 mt-[6rem] lg:mt-[7rem] md:mt-[7rem] mx-4 md:mx-0 lg:mx-auto">
          {/* Hero Heading */}
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-indigo-600 ">
              Our Best Expeditions
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Handpicked adventures crafted to deliver unforgettable experiences
              in the world's most breathtaking destinations.
            </p>
          </div>
          <div className="flex flex-col gap-12 mb-6">
            {tour.map(t => (
              <Tour
                key={t.id}
                title={t.title}
                description={t.description}
                id={t.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
