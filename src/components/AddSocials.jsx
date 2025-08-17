"use client";

import React from "react";
import addSocials from "@/app/admin/[id]/addSocials/page";
import { addLinks } from "@/lib/data";

const AddSocials = () => {
  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Add Social Links</p>
        <form action={addLinks} className="space-y-4">
          <div>
            <p>Socials Name</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Socials"
              name="socials"
            />
          </div>
          <div>
            <p>Url Path</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Link..."
              name="link"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Add Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSocials;
