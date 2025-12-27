"use client";

import React, { useState } from "react";
import { addSingleUser } from "@/lib/data";
import { FaEdit } from "react-icons/fa";
import SelectOptions from "./SelectOptions";

const AddUser = ({ roles }) => {
  const id = 4; // You might want to make this dynamic later

  const [userId] = useState(id); // Not really needed unless editable
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileChange = e => {
    const selectedFiles = e.target.files;
    setFile(selectedFiles);

    // Show preview for single image (assuming one profile photo)
    if (selectedFiles && selectedFiles[0]) {
      setPreviewUrl(URL.createObjectURL(selectedFiles[0]));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Add New User</h1>
            <p className="mt-3 text-lg opacity-90">
              Create a new admin or guide account
            </p>
          </div>

          {/* Form */}
          <form action={addSingleUser} className="px-10 py-12 space-y-10">
            {/* Hidden user_id */}
            <input type="hidden" name="user_id" value={id} />

            {/* Profile Photo Upload */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                Profile Photo
              </label>

              <div className="flex flex-col items-center">
                <label
                  htmlFor="file"
                  className="relative w-48 h-48 cursor-pointer group">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-pink-100 rounded-full flex flex-col items-center justify-center text-gray-600 border-4 border-dashed border-indigo-300">
                      <FaEdit className="text-5xl mb-3 text-indigo-500" />
                      <p className="text-lg font-medium">Upload Photo</p>
                      <p className="text-sm mt-1">Click to browse</p>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaEdit className="text-4xl text-white" />
                  </div>
                </label>

                <input
                  type="file"
                  id="file"
                  name="file"
                  hidden
                  accept="image/*"
                  onChange={fileChange}
                />
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="John Doe"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Role */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Role
              </label>
              <SelectOptions roles={roles} />
            </div>

            {/* Password */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
