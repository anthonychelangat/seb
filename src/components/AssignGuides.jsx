import React from "react";
import SelectGuides from "./SelectGuides";
import SelectTours from "./SelectTours";
import { assignGuides } from "@/lib/data";

const AssignGuides = ({ id }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Assign Guide to Tour
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Connect the right guide with the perfect tour experience
            </p>
          </div>

          {/* Form */}
          <form action={assignGuides} className="px-10 py-12 space-y-10">
            {/* Tour Activity */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Tour Activity
              </label>
              <div className="mt-2">
                <SelectTours />
              </div>
            </div>

            {/* Guide */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                Select Guide
              </label>
              <div className="mt-2">
                <SelectGuides />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:from-indigo-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Assign Guide
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignGuides;
