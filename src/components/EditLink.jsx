"use client";

import { updateSocial } from "@/lib/data";
import React, { useState } from "react";

const EditLink = ({ id, name, link }) => {
  const [newName] = useState(name);
  const [newLink, setNewLink] = useState(link);

  return (
    <div className="flex justify-center w-[100%] items-center">
      <div className="space-y-8 mt-6 bg-gray-200 rounded-lg px-8 py-12 w-[50%]">
        <p className="text-2xl">Update Social Links</p>
        <form action={updateSocial} className="space-y-4">
          <input type="number" hidden name="link_id" value={id} />
          <div>
            <p>Socials Name</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Socials"
              name="socials"
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
          </div>
          <div>
            <p>Url Path</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Link..."
              name="link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Update Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditLink;
