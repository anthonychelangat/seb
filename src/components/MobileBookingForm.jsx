"use client";

import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { MdKeyboardArrowLeft } from "react-icons/md";

const MobileBookingForm = ({ id, price, email }) => {
  const [open, setOpen] = useState(false);

  const toggleForm = () => setOpen(prev => !prev);

  return (
    <>
      {/* Bottom Fixed CTA Button */}
      {!open && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl lg:hidden">
          <div className="px-6 py-6">
            <button
              onClick={toggleForm}
              className="w-full py-5 text-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl shadow-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
              Reserve Now
            </button>
          </div>
        </div>
      )}

      {/* Full-Screen Booking Modal */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={toggleForm}
          />

          {/* Modal Panel */}
          <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
            {/* Header with Back Button */}
            <div className="flex items-center px-6 py-8 bg-white/80 backdrop-blur-md shadow-lg">
              <button
                onClick={toggleForm}
                aria-label="Close booking form"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110">
                <MdKeyboardArrowLeft className="text-4xl text-indigo-600" />
              </button>
              <h2 className="ml-6 text-2xl font-bold text-gray-900">
                Book Your Tour
              </h2>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="max-w-lg mx-auto">
                <BookingForm id={id} price={price} email={email} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileBookingForm;
