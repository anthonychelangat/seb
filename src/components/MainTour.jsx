import { authOptions } from "@/app/api/auth/[...nextauth]";
import {
  getGuidesByTourId,
  getTourByTourId,
  getToursPhotosByTourId,
  getUserByEmail,
} from "@/lib/actions";
import { getServerSession } from "next-auth";
import React from "react";
import PreviousPage from "./PreviousPage";
import SharePage from "./SharePage";
import PhotosForMobile from "./PhotosForMobile";
import UserOptions from "./UserOptions";
import BookingForm from "./BookingForm";
import MobileBookingForm from "./MobileBookingForm";

const MainTour = async ({ id }) => {
  const tour = await getTourByTourId(id);
  const pics = await getToursPhotosByTourId(id);
  const guides = await getGuidesByTourId(id);

  const tourItem = tour[0];
  const price = tourItem?.price;

  const formattedPrice = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? "tony@gmail.com";
  const users = await getUserByEmail(email);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Back & Share (Desktop) */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          <PreviousPage />
          <SharePage
            url={shareUrl}
            title={tourItem?.title || ""}
            text={tourItem?.description || ""}
          />
        </div>

        {/* Mobile Header & Photo Carousel */}
        <div className="lg:hidden relative mb-8">
          <div className="absolute top-4 left-4 z-10">
            <PreviousPage />
          </div>
          <div className="absolute top-4 right-4 z-10">
            <div className="p-3 bg-white/80 backdrop-blur rounded-full shadow-lg">
              <SharePage
                url={shareUrl}
                title={tourItem?.title || ""}
                text={tourItem?.description || ""}
              />
            </div>
          </div>
          <PhotosForMobile id={id} />
        </div>

        {/* Desktop Photo Gallery - FIXED */}
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Tour Info & Guides */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-4xl lg:text-3xl font-bold text-gray-900 capitalize">
                  {tourItem?.title}
                </h1>
              </div>
              <div className="text-xl lg:text-3xl font-bold text-indigo-600">
                {formattedPrice}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="leading-relaxed">{tourItem?.description}</p>
            </div>

            {/* Tour Guides Section */}
            {guides.length > 0 && (
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Your Tour Guides
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {guides.map((guide, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={guide.url}
                          alt={guide.username}
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 capitalize">
                          {guide.username}
                        </h3>
                        <p className="text-sm font-medium text-indigo-600 mt-1">
                          <UserOptions id={guide.role} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Desktop Booking Form */}
          <div className="hidden lg:block">
            <div className="sticky top-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <BookingForm id={tourItem?.id} price={price} email={email} />
            </div>
          </div>
        </div>

        {/* Mobile Booking Form (Fixed Bottom) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
          <div className="px-4 py-4">
            <MobileBookingForm id={tourItem?.id} price={price} email={email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTour;
