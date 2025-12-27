"use client";

import React from "react";
import { credentialsLogin } from "../lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialsLogin(formData);

      if (!!response.error) {
        // You can add error handling UI here later
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-teal-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-teal-600 px-8 py-10 text-center">
            <p className="mt-3 text-indigo-100 text-lg">
              Sign in to continue your adventure
            </p>
          </div>

          {/* Form Body */}
          <div className="px-8 py-10 space-y-8">
            {/* Google Sign In */}
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-2xl hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 shadow-md">
              <FaGoogle className="text-2xl text-red-500" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative text-center">
              <span className="px-4 bg-white text-sm text-gray-500">or</span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300" />
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                className="w-full py-5 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl hover:from-indigo-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Sign In
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
