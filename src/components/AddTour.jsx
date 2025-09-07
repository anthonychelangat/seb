"use client";

import React, { useState } from "react";
import { addTour } from "@/lib/data";

const AddTour = ({ id }) => {
  const [userId, setUserId] = useState(id);

  const handleUserId = e => {
    setUserId(e.target.value);
  };

  const [file, setFile] = useState([]);

  const fileChange = e => {
    setFile(e.target.files);
  };

  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl block uppercase tracking-wide text-gray-700 font-bold mb-2">
          Add Tour
        </p>
        <form action={addTour} className="space-y-4">
          <input
            type="number"
            hidden
            name="user_id"
            id="user_id"
            onChange={handleUserId}
            value={id}
          />

          <div>
            <p className="block capitalise tracking-wide text-gray-700 font-bold mb-2">
              Title
            </p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Title"
              name="title"
            />
          </div>
          <div className="w-full">
            <label
              className="block capitalise tracking-wide text-gray-700 font-bold mb-2"
              htmlFor="grid-password">
              Description
            </label>
            <textarea
              rows="8"
              name="description"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
          </div>

          <div className="space-y-4">
            <p className="block capitalise tracking-wide text-gray-700 font-bold mb-2">
              Add some photos of the tour here?
            </p>

            <div
              className="flex flex-col gap-2 items-center justify-center 
              w-[100%] h-[6rem] border border-dotted border-black bg-purple-100 rounded-[6px]">
              <p className="font-semibold">Drop 4 photos here</p>
              <label className="cursor-pointer" htmlFor="file">
                Press Here
              </label>
              <input
                type="file"
                hidden
                name="file"
                id="file"
                onChange={fileChange}
                multiple
              />
            </div>
          </div>
          <button
            type="submit"
            className="block capitalise tracking-wide font-bold mb-2 py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Add Tour
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTour;
