import {
  deleteTour,
  getTourByTourId,
  getToursPhotosByTourId,
} from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { MdPictureInPicture } from "react-icons/md";
import PreviousPage from "./PreviousPage";
import SharePage from "./SharePage";
import PhotosForMobile from "./PhotosForMobile";

const TourDetails = async ({ id, tour_id }) => {
  const tour = await getTourByTourId(tour_id);
  const pics = await getToursPhotosByTourId(tour_id);

  const fallbackImg = "1753439177475_(40).jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center justify-between mb-12">
          <PreviousPage />

          {tour.map(t => (
            <div key={t.id} className="flex items-center gap-6">
              <Link
                href={`/admin/${id}/editTour/${t.id}`}
                className="flex items-center gap-3 bg-white hover:bg-gray-50 px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                <FaPen className="text-2xl text-indigo-600" />
                <span className="text-lg font-semibold">Edit Tour</span>
              </Link>

              <form action={deleteTour}>
                <input hidden name="tour_id" value={t.id} readOnly />
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <FaTrash className="text-2xl" />
                  <span className="text-lg font-semibold">Delete</span>
                </button>
              </form>
            </div>
          ))}
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden relative mb-8">
          <div className="absolute top-6 left-6 z-50">
            <PreviousPage />
          </div>

          <div className="absolute top-6 right-6 z-50">
            {tour.map(h => (
              <div
                key={h.id}
                className="p-4 rounded-full bg-white shadow-2xl backdrop-blur-md">
                <SharePage
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  title={h.title}
                  text={h.description}
                />
              </div>
            ))}
          </div>

          <PhotosForMobile id={tour_id} />
        </div>

        {/* Desktop Photo Gallery */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-16 lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
          {/* Main Large Image */}
          <div className="overflow-hidden rounded-3xl">
            {pics.slice(0, 1).map(pic => (
              <img
                key={pic.url}
                src={pic.url || fallbackImg}
                alt="Main tour image"
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          {/* 2x2 Grid + Overlay Button */}
          <div className="grid grid-cols-2 gap-6 relative">
            {pics.slice(1, 5).map(pic => (
              <div key={pic.url} className="overflow-hidden rounded-3xl">
                <img
                  src={pic.url || fallbackImg}
                  alt="Tour gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tour Title & Description */}
        <div className="space-y-10">
          {tour.map(h => (
            <div key={h.id}>
              <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 capitalize leading-tight">
                {h.title}
              </h1>

              <p className="mt-10 text-lg lg:text-2xl text-gray-700 leading-relaxed max-w-5xl">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
