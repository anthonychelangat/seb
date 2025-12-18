import { authOptions } from "@/app/api/auth/[...nextauth]";
import BookingForm from "@/components/BookingForm";
import MobileBookingForm from "@/components/MobileBookingForm";
import PhotosForMobile from "@/components/PhotosForMobile";
import PreviousPage from "@/components/PreviousPage";
import SharePage from "@/components/SharePage";
import UserOptions from "@/components/UserOptions";
import {
  getGuidesByTourId,
  getTourByTourId,
  getToursPhotosByTourId,
  getUserByEmail,
} from "@/lib/actions";
import { getServerSession } from "next-auth";
import React from "react";

const singleTour = async ({ params }) => {
  const { id } = await params;

  const tour = await getTourByTourId(id);

  const pics = await getToursPhotosByTourId(id);

  const guides = await getGuidesByTourId(id);

  const [price] = tour.map(t => t.price);

  const formattedPrice = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? "tony@gmail.com";

  const users = await getUserByEmail(email);

  console.log(users, "users");
  console.log(email, "email");

  return (
    <div>
      <div className="max-w-4xl mx-auto  ">
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:pt-8 lg:marker:pb-4">
          <PreviousPage />

          <div className="flex items-center gap-2">
            {tour.map((h, index) => (
              <SharePage
                key={index}
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
              {tour.map((h, index) => (
                <SharePage
                  key={index}
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
            {pics.slice(0, 1).map((pic, index) => (
              <img
                key={index}
                className="w-[100%] h-[100%] object-cover aspect-[1/1] "
                src={`${pic.url}`}
              />
            ))}
          </div>
          <div className="relative h-[100%] w-[50%] grid grid-cols-2 gap-1 ">
            {pics.slice(1, 5).map((pic, index) => (
              <img
                key={index}
                className="w-[100%] h-[100%] object-cover aspect-[1/1] "
                src={`${pic.url}`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 mb-[7rem] px-4 lg:px-0 lg:grid-cols-6 gap-4">
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <div>
                {tour.map(h => (
                  <p key={h.id} className="text-lg capitalize font-bold">
                    {h.title}
                  </p>
                ))}
              </div>
              <p className="font-bold">{formattedPrice}</p>
            </div>
            <div className="">
              {tour.map(h => (
                <p className="" key={h.id}>
                  {h.description}
                </p>
              ))}
            </div>
            <div className="space-y-4 mt-4">
              <p className="text-lg capitalize font-bold">Your Tour Guides</p>
              <ul
                role="list"
                className="grid gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {guides.map((u, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-x-6">
                      <img
                        src={u.url}
                        alt=""
                        className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                      />
                      <div>
                        <h3 className="capitalize text-base/7 font-semibold tracking-tight text-gray-900">
                          {u.username}
                        </h3>
                        <p className="text-xs font-semibold text-indigo-600">
                          <UserOptions id={u.role} />
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div></div>
            </div>
          </div>
          <div className="hidden lg:block col-span-2 rounded-b-sm">
            {tour.map(t => (
              <BookingForm key={t.id} id={t.id} price={t.price} email={email} />
            ))}
          </div>
        </div>
        {tour.map(t => (
          <MobileBookingForm
            key={t.id}
            id={t.id}
            price={t.price}
            email={email}
          />
        ))}
      </div>
    </div>
  );
};

export default singleTour;
