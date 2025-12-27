"use client";

import React, { useState } from "react";
import { addAboutUs } from "@/lib/data";

const AddAboutUs = () => {
  const [aboutText, setAboutText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async formData => {
    setIsSubmitting(true);
    try {
      await addAboutUs(formData);
      // Reset form on success
      setAboutText("");
    } catch (error) {
      console.error("Error adding about us:", error);
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
              Tell Your Story
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Share who you are and why travelers should choose you as their
              guide
            </p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="px-10 py-12 space-y-10">
            {/* About Us Description */}
            <div className="space-y-3">
              <label
                htmlFor="about"
                className="block text-lg font-semibold text-gray-800">
                About You
              </label>
              <textarea
                id="about"
                name="about"
                rows={12}
                required
                value={aboutText}
                onChange={e => setAboutText(e.target.value)}
                placeholder="Write a warm introduction about yourself... Mention your experience, passion for guiding, local knowledge, languages spoken, and what makes your tours special."
                className="w-full px-6 py-5 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? "Saving..." : "Save About Section"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAboutUs;
