"use client";

import React from "react";
import { socialMediaLogin } from "../../lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const Register = () => {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-teal-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Elegant Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          {/* Gradient Header */}
          <div className="bg-blue-500 capitalize px-8 py-12 text-center">
            <p className="mt-4 text-lg text-indigo-100">Create an account</p>
          </div>

          {/* Form Body */}
          <div className="px-8 py-10 space-y-8">
            {/* Google Sign Up */}
            <form action={socialMediaLogin}>
              <button
                type="submit"
                name="action"
                value="google"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-2xl hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 shadow-md">
                <FaGoogle className="text-xl text-red-500" />
                Continue with Google
              </button>
            </form>

            {/* Divider */}
            <div className="relative text-center">
              <span className="px-6 bg-white text-gray-500 text-sm font-medium">
                OR
              </span>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 text-lg font-bold text-white bg-blue-500 rounded-xl hover:from-indigo-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{"  "}
              <Link
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
