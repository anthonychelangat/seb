import React from "react";
import BookingFinalizedForm from "./BookingFinalizedForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import {
  getBookingDetailsByEmail,
  getTourAndPhotoByTourId,
  getUserByEmail,
} from "@/lib/actions";

const BookingIntermediary = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? "tony@gmail.com";

  const users = await getUserByEmail(email);

  const booking = await getBookingDetailsByEmail(email);
  const [price] = booking.map(u => u.price);
  const [username] = users.map(u => u.username);
  const [tour_id] = booking.map(u => u.tour_id);
  const [guests] = booking.map(u => u.guests);
  const [telephone] = booking.map(u => u.telephone);
  const tour = await getTourAndPhotoByTourId(tour_id);
  const [title] = tour.map(u => u.title);
  const [url] = tour.map(u => u.url);

  return (
    <div className="lg:max-w-5xl lg:mx-auto mx-4 md:mx-0 ">
      <BookingFinalizedForm
        title={title}
        url={url}
        username={username}
        price={price}
        guests={guests}
        telephone={telephone}
        email={email}
      />
    </div>
  );
};

export default BookingIntermediary;
