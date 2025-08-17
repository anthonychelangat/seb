"use client";

import { updateTour } from "@/lib/data";
import React, { useState } from "react";

const EditTour = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  //const [newRole, setNewRole] = useState(role);
  //const [newPassword, setNewPassword] = useState(password);

  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Update Tour</p>
        <form action={updateTour} className="space-y-4">
          <input type="number" hidden name="tour_id" value={id} />

          <div>
            <p>Title</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Title"
              name="title"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <p>Description</p>
            <textarea
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Description"
              name="description"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}></textarea>
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Update Tour
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTour;
