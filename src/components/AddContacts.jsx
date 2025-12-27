"use client";

import React, { useState } from "react";
import { addContact } from "@/lib/data";

const AddContacts = () => {
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async formData => {
    setIsSubmitting(true);
    try {
      await addContact(formData);
      // Reset form on success
      setCategory("");
      setContact("");
    } catch (error) {
      console.error("Error adding contact:", error);
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
              Add Contact Info
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Help travelers reach you quickly and easily
            </p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="px-10 py-12 space-y-10">
            {/* Contact Category */}
            <div className="space-y-3">
              <label
                htmlFor="category"
                className="block text-lg font-semibold text-gray-800">
                Contact Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
                placeholder="e.g., Phone, WhatsApp, Email, Website"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Contact Value */}
            <div className="space-y-3">
              <label
                htmlFor="contact"
                className="block text-lg font-semibold text-gray-800">
                Contact Detail
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="e.g., +256 700 000 000 or hello@yourguide.com"
                className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? "Adding Contact..." : "Add Contact"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContacts;
