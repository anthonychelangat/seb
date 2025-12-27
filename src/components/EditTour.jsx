"use client";

import { updateTour } from "@/lib/data";
import React, { useState } from "react";

const EditTour = ({ id, title, description, price }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Edit Tour Details
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Update the tour information travelers will see
            </p>
          </div>

          {/* Form */}
          <form action={updateTour} className="px-10 py-12 space-y-10">
            <input type="number" hidden name="tour_id" value={id} readOnly />

            {/* Tour Title */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Tour Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g., Sipi Falls Hiking Adventure"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Price */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Price per Guest (UGX)
              </label>
              <input
                type="number"
                name="price"
                min="0"
                required
                placeholder="150000"
                value={newPrice}
                onChange={e => setNewPrice(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Tour Description
              </label>
              <textarea
                name="description"
                rows={10}
                required
                placeholder="Describe the itinerary, highlights, inclusions, and what makes this tour special..."
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                className="w-full px-6 py-5 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Update Tour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTour;
