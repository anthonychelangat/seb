"use client";

import React from "react";
import { addAboutUs, addContact } from "@/lib/data";

const AddAboutUs = () => {
  return (
    <div className="lg:flex lg:justify-center w-[100%] lg:items-center">
      <div className="space-y-8 lg:mt-6 lg:bg-gray-200 rounded-lg px-6 lg:px-8 py-12 w-[100%] lg:w-[50%]">
        <p className="text-2xl">Add About Us</p>
        <form action={addAboutUs} className="space-y-4">
          <div>
            <p>Contact</p>
            <textarea
              rows="10"
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="About US..."
              name="about"></textarea>
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAboutUs;
