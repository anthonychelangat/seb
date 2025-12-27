"use client";

import { updateSocial } from "@/lib/data";
import React, { useState } from "react";

const EditLink = ({ id, name, link }) => {
  const [newName, setNewName] = useState(name);
  const [newLink, setNewLink] = useState(link);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Edit Social Link
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Update your profile link for travelers to connect with you
            </p>
          </div>

          {/* Form */}
          <form action={updateSocial} className="px-10 py-12 space-y-10">
            <input type="number" hidden name="link_id" value={id} readOnly />

            {/* Social Platform */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Social Platform
              </label>
              <input
                type="text"
                name="socials"
                required
                placeholder="e.g., Twitter, Instagram, TikTok, LinkedIn"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Profile URL */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Profile URL
              </label>
              <input
                type="url"
                name="link"
                required
                placeholder="https://instagram.com/yourusername"
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Update Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLink;
