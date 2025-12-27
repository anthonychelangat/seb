"use client";

import React, { useState } from "react";
import { addTour } from "@/lib/data";

const AddTour = ({ id }) => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = e => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 5) {
      alert("You can only upload up to 5 photos.");
      return;
    }

    setFiles(selectedFiles);

    // Generate preview URLs
    const previews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const removePhoto = index => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previewUrls.filter((_, i) => i !== index);
    setFiles(newFiles);
    setPreviewUrls(newPreviews);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Create New Tour
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Bring your next adventure to life for travelers
            </p>
          </div>

          {/* Form */}
          <form action={addTour} className="px-10 py-12 space-y-10">
            {/* Hidden user_id */}
            <input type="hidden" name="user_id" value={id} />

            {/* Title */}
            <div className="space-y-3">
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-gray-800">
                Tour Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="e.g., Sipi Falls Hiking Adventure"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Price */}
            <div className="space-y-3">
              <label
                htmlFor="price"
                className="block text-lg font-semibold text-gray-800">
                Price per Guest (UGX)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                required
                placeholder="150000"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label
                htmlFor="description"
                className="block text-lg font-semibold text-gray-800">
                Tour Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={8}
                required
                placeholder="Describe the itinerary, highlights, what guests will experience..."
                className="w-full px-6 py-5 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none resize-none"
              />
            </div>

            {/* Photo Upload */}
            <div className="space-y-5">
              <label className="block text-lg font-semibold text-gray-800">
                Tour Photos (up to 5)
              </label>

              {/* Drop Zone / Upload Button */}
              <label
                htmlFor="file"
                className="flex flex-col items-center justify-center w-full h-48 border-3 border-dashed border-indigo-400 bg-indigo-50 rounded-2xl cursor-pointer hover:bg-indigo-100 transition-all">
                <div className="text-center">
                  <div className="text-5xl text-indigo-500 mb-4">📸</div>
                  <p className="text-xl font-medium text-gray-700">
                    Drop photos here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Maximum 5 high-quality images
                  </p>
                </div>
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleFileChange}
                />
              </label>

              {/* Preview Grid */}
              {previewUrls.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-4">
                    {previewUrls.length} photo
                    {previewUrls.length !== 1 ? "s" : ""} selected
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-40 object-cover rounded-xl shadow-md"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-700">
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Create Tour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
