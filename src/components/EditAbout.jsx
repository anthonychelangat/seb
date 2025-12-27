"use client";

import { updateAbout } from "@/lib/data";
import React, { useState } from "react";

const EditAbout = ({ id, about }) => {
  const [newAbout, setNewAbout] = useState(about);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Edit Your Story
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Update the about section that travelers will read
            </p>
          </div>

          {/* Form */}
          <form action={updateAbout} className="px-10 py-12 space-y-10">
            <input type="number" hidden name="about_id" value={id} readOnly />

            {/* About Description */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                About You
              </label>
              <textarea
                name="about"
                rows={12}
                required
                placeholder="Share your background, experience, passion for guiding, languages spoken, and what makes you unique..."
                value={newAbout}
                onChange={e => setNewAbout(e.target.value)}
                className="w-full px-6 py-5 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAbout;
