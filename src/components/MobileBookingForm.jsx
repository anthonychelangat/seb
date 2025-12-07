"use client";

import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { MdKeyboardArrowLeft } from "react-icons/md";

const MobileBookingForm = ({ id, price, email }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && (
        <div
          className="modal fixed inset-0 w-full z-40 bg-white overflow-auto 
  flex justify-center h-screen  ">
          <div className="w-[86%]">
            <MdKeyboardArrowLeft
              className="text-4xl text-left my-8"
              onClick={() => setOpen(prev => !prev)}
            />
            <BookingForm id={id} price={price} email={email} />
          </div>
        </div>
      )}
      {!open ? (
        <div className="fixed w-full bottom-0 h-[7rem] right-0 left-0 lg:hidden bg-white flex items-center justify-center border border-t-pink-400">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="py-4 text-xl text-white w-[80%] hover:bg-pink-500 bg-pink-600 rounded-[6px]">
            Reserve Now
          </button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default MobileBookingForm;
