import Tour from "@/components/Tour";
import { getTours } from "@/lib/actions";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const page = async () => {
  const tour = await getTours();

  return (
    <div>
      <div className="lg:max-w-5xl my-6 mt-[8rem] mx-4 md:mx-0 lg:mx-auto">
        <h1 className="mb-6 text-lg font-semibold tracking-wide text-pretty text-gray-900 sm:text-4xl">
          Our Best Offers For You
        </h1>
        <div className="flex flex-col gap-12">
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
  );
};

export default page;
