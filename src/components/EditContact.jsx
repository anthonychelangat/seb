"use client";

import { updateContact } from "@/lib/data";
import React, { useState } from "react";

const EditContact = ({ id, name, contact }) => {
  const [newCategory, setNewCategory] = useState(name);
  const [newContact, setNewContact] = useState(contact);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        {/* Card Container */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-center">
            <h2 className="text-3xl font-bold text-white">Update Contact</h2>
            <p className="mt-2 text-blue-100">
              Modify the details below and save your changes
            </p>
          </div>

          {/* Form Body */}
          <div className="px-8 py-10">
            <form action={updateContact} className="space-y-6">
              <input
                type="number"
                hidden
                name="contact_id"
                value={id}
                readOnly
              />

              {/* Contact Category Field */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Category
                </label>
                <input
                  id="category"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition"
                  type="text"
                  placeholder="e.g., Phone, Email, Support"
                  name="category"
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                />
              </div>

              {/* Contact Value Field */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Details
                </label>
                <input
                  id="contact"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition"
                  type="text"
                  placeholder="e.g., +1234567890 or hello@example.com"
                  name="contact"
                  value={newContact}
                  onChange={e => setNewContact(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition transform hover:-translate-y-1 active:translate-y-0">
                Update Contact
              </button>
            </form>
          </div>
        </div>

        {/* Optional subtle footer note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Changes will be saved immediately upon submission.
        </p>
      </div>
    </div>
  );
};

export default EditContact;
