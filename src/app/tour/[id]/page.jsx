import PhotosForMobile from "@/components/PhotosForMobile";
import PreviousPage from "@/components/PreviousPage";
import SharePage from "@/components/SharePage";
import { getTourByTourId, getToursPhotosByTourId } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { MdPictureInPicture } from "react-icons/md";

const singleTour = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const tour = await getTourByTourId(id);
  console.log(tour);
  const pics = await getToursPhotosByTourId(id);
  console.log(pics, "po");

  return (
    <div>
      <div className="lg:max-w-6xl mx-auto">
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:pt-8 lg:marker:pb-4">
          <PreviousPage />

          <div className="flex items-center gap-2">
            {tour.map(h => (
              <SharePage
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={h.title}
                text={h.description}
              />
            ))}
          </div>
        </div>
        <div className="lg:hidden md:hidden relative w-full">
          <div className="absolute top-[1rem] left-[1.5rem] z-50 ">
            <PreviousPage />
          </div>
          <div className="flex items-center gap-3 absolute top-[1rem] right-[1.5rem] z-50">
            <div className="p-2 aspect-square rounded-[50%] bg-gray-200 ">
              {tour.map(h => (
                <SharePage
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  title={h.title}
                  text={h.description}
                />
              ))}
            </div>
          </div>
          <PhotosForMobile id={id} />
        </div>
        <div className="hidden lg:h-[40vh lg:my-4 lg:flex lg:gap-1">
          <div className="h-[100%] bg-gray-500 w-[50%]">
            {pics.slice(0, 1).map(pic => (
              <img
                key={pic.url}
                className="w-[100%] h-[100%] object-cover aspect-[1/1] "
                src={`${pic.url ? pic.url : "1753439177475_(40).jpg"}`}
              />
            ))}
          </div>
          <div className="relative h-[100%] w-[50%] grid grid-cols-2 gap-1 ">
            {pics.slice(1, 5).map(pic => (
              <img
                key={pic.url}
                className="w-[100%] h-[100%] object-cover aspect-[1/1] "
                src={`${pic.url ? pic.url : "1753439177475_(40).jpg"}`}
              />
            ))}
            <Link
              href={`/photos/${id}`}
              className="flex items-center gap-2 absolute bottom-4 right-[7%]
               bg-gray-200 hover:bg-gray-300 z-10 rounded-[4px] py-2 px-4 ">
              <MdPictureInPicture />
              <p>Show All Photos</p>
            </Link>
          </div>
        </div>
        <div>
          {tour.map(h => (
            <p key={h.id} className="text-2xl lg:text-4xl capitalize font-bold">
              {h.title}
            </p>
          ))}
        </div>
        <div>
          {tour.map(h => (
            <p key={h.id} className="">
              {h.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default singleTour;
