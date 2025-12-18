"use client";

import React, { useState } from "react";
import { pendingBooking } from "../lib/data";
import Link from "next/link";

const BookingForm = ({ id, price, email }) => {
  const [newPrice, setNewPrice] = useState(price);
  const [total, setTotal] = useState(0);
  const [guests, setGuests] = useState(0);

  const handleGuestChange = e => {
    const newGuest = e.target.value;
    setGuests(newGuest);
    setTotal(newGuest * newPrice);
  };

  const formattedPrice = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(newPrice);

  const formattedTotal = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <div className="w-[100%] h-[fitcontent] border p-4 space-y-8border-gray-700 rounded-[6px]">
      <p className="text-xl capitalize text-pink-700 font-bold">
        {formattedPrice} per Guest
      </p>
      <form action={pendingBooking} className="space-y-4 w-[100%] ">
        <input
          type="number"
          hidden
          name="price"
          id="price"
          value={newPrice}
          readOnly
        />
        <input
          type="number"
          hidden
          name="tour_id"
          id="tour_id"
          value={id}
          readOnly
        />
        <input
          type="email"
          hidden
          name="email"
          id="email"
          value={email}
          readOnly
        />

        <div>
          <p className="">Phone Number</p>
          <input
            className="outline-none px-4 py-4 w-[100%] rounded-[4px] bg-purple-100  "
            type="phone"
            placeholder="Phone Number"
            name="telephone"
            id="telephone"
          />
        </div>
        <div>
          <p className="">Number of Guests</p>
          <input
            className="outline-none py-4 w-[100%] px-4 rounded-[4px] bg-purple-100  "
            type="number"
            placeholder="Number of Guests"
            name="guests"
            value={guests}
            onChange={handleGuestChange}
            id="guests"
            min={3}
          />
        </div>
        <div>
          <p className="">Date of Arrival</p>
          <input
            className="outline-none py-4 w-[100%] px-4 rounded-[4px] bg-purple-100  "
            type="date"
            name="date_of_arrival"
            id="date_of_arrival"
            placeholder="Date of Arrival"
          />
        </div>
        {email ? (
          <button
            type="submit"
            className="py-4 w-[100%] bg-pink-700 text-white rounded-[4px] hover:bg-pink-800 ">
            Reserve
          </button>
        ) : (
          <Link
            href="/login"
            className="py-4 w-[100%] bg-pink-700 text-white rounded-[4px] hover:bg-pink-800 ">
            Login First
          </Link>
        )}
      </form>
      <p className="text-center ">You Wont be charged yet</p>
      <div className="space-y-2">
        <div className="flex items-center gap-4 justify-between ">
          <p className="underline text-nowrap">
            {formattedPrice} * {guests ? guests : 0} Guests
          </p>
          <p className="font-bold text-nowrap">
            {formattedTotal ? formattedTotal : price * 0}
          </p>
        </div>

        <div className="flex items-center gap-4 justify-between ">
          <p className="underline text-nowrap">Total before Taxes</p>
          <p className="font-bold text-nowrap">
            {String(guests === 0 ? formattedPrice * 0 : formattedTotal)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
