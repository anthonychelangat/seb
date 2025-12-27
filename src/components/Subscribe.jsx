import { addSubscriber } from "@/lib/data";
import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      {/* Form */}
      <form
        action={addSubscriber}
        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto items-center justify-center">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="w-full border border-white sm:flex-1 px-6 py-4 rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-400/100 transition-all text-base"
          aria-label="Email address"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-800 transform hover:scale-105 transition-all shadow-lg">
          Subscribe Now
        </button>
      </form>

      {/* Reassurance */}
      <p className="mt-6 text-sm text-gray-300">
        No spam ever. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default Subscribe;
