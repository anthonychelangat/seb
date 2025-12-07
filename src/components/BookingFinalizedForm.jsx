"use client";

import React, { useState } from "react";
import PreviousPage from "../components/PreviousPage";
import { processPayments } from "../lib/data";

const BookingFinalizedForm = ({
  title,
  username,
  telephone,
  url,
  guests,
  price,
  email,
}) => {
  const [newPrice, setNewPrice] = useState(price);
  const [total, setTotal] = useState(price * guests);
  const [newGuests, setNewGuests] = useState(guests);
  const [ntelephone, setTelephone] = useState(telephone);

  console.log(telephone, "noooo");

  const handleGuestsChange = e => {
    const newNewGuests = e.target.value;
    setNewGuests(newNewGuests);
    setTotal(newNewGuests * newPrice);
  };

  const formattedTotal = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total);

  const formattedPrice = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(newPrice);

  return (
    <div>
      <div className="py-6 mx-4 lg:mx-0 grid h-full grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-3">
        <div className="lg:col-span-2 h-full flex justify-center lg:border lg:border-r-gray-300 lg:border-b-0 lg:border-l-0 lg:border-t-0">
          <div className="w-full lg:w-[60%] h-full space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <PreviousPage />
                <p className="text-2xl">Seb</p>
              </div>
              <div>
                <p className="text-gray-500 capitalize">Payment</p>
                <p className="text-3xl capitalize">{formattedTotal}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div>
                  <p>Your Name</p>
                  <p className="text-gray-500 capitalize ">{username}</p>
                </div>
                <div>
                  <p>Email</p>
                  <p className="text-gray-500 ">{email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex  items-center gap-6">
                  <img className="w-[3rem] aspect-square " src={url} />
                  <div>
                    <p className="capitalize text-xs ">{title}</p>
                    <div className="flex items-center">
                      <input
                        className="outline-none w-[1.5rem]"
                        type="number"
                        placeholder="Guests"
                        name="guests"
                        min={1}
                        value={newGuests}
                        onChange={handleGuestsChange}
                      />
                      <p className="text-gray-500 capitalize">Guests</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-full flex justify-end">
                    <p>{formattedTotal}</p>
                  </div>
                  <p className="text-gray-500 text-xs capitalize">
                    {formattedPrice} Per Guest
                  </p>
                </div>
              </div>
              <div className="ml-[4.5rem] flex items-center pb-8 justify-between border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="capitalize">subtotal</p>
                <p>{formattedTotal}</p>
              </div>

              <div className="ml-[4.5rem] flex items-center justify-between">
                <p>Total Due</p>
                <p>{formattedTotal}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-center">
          <form
            action={processPayments}
            className="w-full flex flex-col items-center gap-8 lg:gap-[12rem] ">
            <div className="8 flex flex-col items-center gap-4 lg:gap-10 w-full">
              <p className="text-xl">Payment Systems</p>
              <div className="flex flex-col w-full items-center gap-6">
                <button className="lg:w-[70%] w-[90%] py-2 px-4 rounded-[4px] text-white bg-[red] hover:bg-red-800 ">
                  Airtel Mobile Money
                </button>
                <button className="lg:w-[70%] w-[90%] py-2 px-4 rounded-[4px] text-black bg-[#e9e928] hover:bg-yellow-800">
                  MTN Mobile Money
                </button>
                <button className="hidden lg:block lg:w-[70%] w-[90%] py-2 px-4 rounded-[4px] text-white bg-black hover:bg-gray-800">
                  Chipper Cash
                </button>
              </div>
            </div>
            <input type="number" hidden name="total" id="total" value={total} />

            <input
              type="phone"
              hidden
              name="telephone"
              id="telephone"
              value={`0${ntelephone}`}
            />

            <button
              type="submit"
              className="hidden lg:block lg:w-[70%] w-[90%] py-4 px-4 rounded-[4px] text-white bg-[blue] hover:bg-blue-800 ">
              Pay {formattedTotal}
            </button>
            <div className="fixed right-0 left-0 bottom-0 bg-blue-200 h-[7rem] border border-t-blue-500 w-full flex items-center justify-center lg:hidden ">
              <button
                type="submit"
                className="lg:w-[70%] w-[90%] py-4 px-4 rounded-[4px] text-white bg-[blue] hover:bg-blue-800 ">
                Pay {formattedTotal}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFinalizedForm;
