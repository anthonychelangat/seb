import { addSubscriber } from "@/lib/data";
import React from "react";
const Subscribe = () => {
  return (
    <div className="text-[white]">
      <h1 className="text-center text-lg">News Letter</h1>
      <p className="text-center text-sm mb-3">Subscribe to our newsletter</p>
      <form action={addSubscriber}>
        <input
          className="py-2 px-4 outline-none b-0 bg-white"
          type="email"
          name="email"
          placeholder="Enter your email..."
        />
        <input
          className="py-2 px-4 text-sm outline-none b-0 bg-red-500"
          type="submit"
          placeholder="Submit"
        />
      </form>
    </div>
  );
};

export default Subscribe;
