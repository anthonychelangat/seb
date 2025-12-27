"use client";

import React, { useState } from "react";
import { pendingBooking } from "../lib/data";
import Link from "next/link";

const BookingForm = ({ id, price, email }) => {
  const [guests, setGuests] = useState(1); // Start at 1 for better UX
  const [total, setTotal] = useState(price);

  const handleGuestChange = e => {
    const newGuests = Math.max(1, parseInt(e.target.value) || 1); // Prevent 0 or negative
    setGuests(newGuests);
    setTotal(newGuests * price);
  };

  const formattedPrice = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
  }).format(price);

  const formattedTotal = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
  }).format(total);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-lg opacity-90">Starting from</p>
            <p className="text-2xl font-bold">{formattedPrice}</p>
          </div>
          <p className="text-lg">per guest</p>
        </div>
      </div>

      {/* Form */}
      <form action={pendingBooking} className="p-6 space-y-6">
        {/* Hidden fields */}
        <input type="hidden" name="price" value={price} />
        <input type="hidden" name="tour_id" value={id} />
        <input type="hidden" name="email" value={email} />

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="telephone"
            placeholder="+256 700 000 000"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
          />
        </div>

        {/* Number of Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            value={guests}
            onChange={handleGuestChange}
            min="1"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
          />
        </div>

        {/* Date of Arrival */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Date of Arrival
          </label>
          <input
            type="date"
            name="date_of_arrival"
            required
            min={new Date().toISOString().split("T")[0]} // Prevent past dates
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
          />
        </div>

        {/* Submit Button */}
        {email ? (
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold text-lg rounded-lg hover:from-pink-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all shadow-lg">
            Reserve Now
          </button>
        ) : (
          <Link
            href="/login"
            className="block w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold text-lg rounded-lg text-center hover:from-pink-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all shadow-lg">
            Login to Reserve
          </Link>
        )}

        {/* No charge notice */}
        <p className="text-center text-sm text-gray-500">
          You won't be charged yet
        </p>
      </form>

      {/* Price Breakdown */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-5 space-y-4">
        <div className="flex justify-between text-gray-700 text-normal lg:text-sm ">
          <p className="underline">
            {formattedPrice} × {guests} {guests === 1 ? "guest" : "guests"}
          </p>
          <p className="font-semibold">{formattedTotal}</p>
        </div>

        <div className="flex justify-between text-normal lg:text-sm font-bold text-gray-900 pt-3 border-t border-gray-300">
          <p>Total (before taxes)</p>
          <p>{formattedTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
