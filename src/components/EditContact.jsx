"use client";

import { updateContact } from "@/lib/data";
import React, { useState } from "react";

const EditContact = ({ id, name, contact }) => {
  const [newCategory, setNewCategory] = useState(name);
  const [newContact, setNewContact] = useState(contact);

  return (
    <div className="lg:flex lg:justify-center w-[100%] lg:items-center">
      <div className="space-y-8 lg:mt-6 lg:bg-gray-200 rounded-lg px-6 lg:px-8 py-12 w-[100%] lg:w-[50%]">
        <p className="text-2xl">Update Contacts</p>
        <form action={updateContact} className="space-y-4">
          <input type="number" hidden name="contact_id" value={id} readOnly />
          <div>
            <p>Contact Category</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Category"
              name="category"
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
            />
          </div>
          <div>
            <p>Contact</p>
            <input
              className="py-2 px-4 w-[100%] outline-none rounded-[4px] bg-gray-100 border border-gray-400 focus:border-blue-900 "
              type="text"
              placeholder="Contact..."
              name="contact"
              value={newContact}
              onChange={e => setNewContact(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-[100%] outline-none rounded-[4px] text-white hover:bg-blue-400 bg-blue-600 ">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
