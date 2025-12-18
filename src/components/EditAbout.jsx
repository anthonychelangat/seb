"use client";

import { updateAbout } from "@/lib/data";
import React, { useState } from "react";

const EditAbout = ({ id, about }) => {
  const [newAbout, setNewAbout] = useState(about);

  return (
    <div className="lg:flex lg:justify-center w-[100%] lg:items-center">
      <div className="space-y-8 lg:mt-6 lg:bg-gray-200 rounded-lg px-6 lg:px-8 py-12 w-[100%] lg:w-[50%]">
        <p className="text-2xl">Update About Us</p>
        <form action={updateAbout} className="space-y-4">
          <input type="number" hidden name="about_id" value={id} readOnly />
          <div>
            <p>About Us</p>
            <textarea
              rows="10"
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="About US..."
              name="about"
              value={newAbout}
              onChange={e => setNewAbout(e.target.value)}></textarea>
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

export default EditAbout;
