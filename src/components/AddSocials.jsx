"use client";

import React, { useState } from "react";
import { addLinks } from "@/lib/data";

const AddSocials = () => {
  const [socialName, setSocialName] = useState("");
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async formData => {
    setIsSubmitting(true);
    try {
      await addLinks(formData);
      // Reset form on success
      setSocialName("");
      setUrl("");
    } catch (error) {
      console.error("Error adding link:", error);
      // You can add toast notification here later
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Add Social Link
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Connect your profile and let travelers find you easily
            </p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="px-10 py-12 space-y-10">
            {/* Social Platform */}
            <div className="space-y-3">
              <label
                htmlFor="socials"
                className="block text-lg font-semibold text-gray-800">
                Social Platform
              </label>
              <input
                id="socials"
                name="socials"
                type="text"
                required
                value={socialName}
                onChange={e => setSocialName(e.target.value)}
                placeholder="e.g., Twitter, Instagram, GitHub, TikTok"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Profile URL */}
            <div className="space-y-3">
              <label
                htmlFor="link"
                className="block text-lg font-semibold text-gray-800">
                Profile URL
              </label>
              <input
                id="link"
                name="link"
                type="url"
                required
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://instagram.com/yourusername"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? "Adding Link..." : "Add Link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSocials;
