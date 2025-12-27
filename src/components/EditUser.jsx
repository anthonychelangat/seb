"use client";

import { updateUser } from "@/lib/data";
import React, { useState } from "react";
import SelectOptions from "./SelectOptions";
import { FaEdit } from "react-icons/fa";

const EditUserForm = ({ id, username, email, role, password, roles, pics }) => {
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newRole, setNewRole] = useState(role);
  const [newPassword, setNewPassword] = useState(password);

  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(pics[0]?.url || null);

  const fileChange = e => {
    const selectedFiles = e.target.files;
    setFile(selectedFiles);

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
            <h1 className="text-4xl font-bold tracking-tight">Edit User</h1>
            <p className="mt-3 text-lg opacity-90">
              Update user details and profile photo
            </p>
          </div>

          {/* Form */}
          <form action={updateUser} className="px-10 py-12 space-y-10">
            <input type="number" hidden name="user_id" value={id} readOnly />

            {/* Profile Photo */}
            <div className="flex flex-col items-center space-y-6">
              <label htmlFor="file" className="relative group cursor-pointer">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center">
                      <span className="text-6xl font-bold text-indigo-600">
                        {username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Edit Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaEdit className="text-5xl text-white" />
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

            {/* Full Name */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="Full Name"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
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
                placeholder="Email"
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
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
                Password (leave blank to keep current)
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
