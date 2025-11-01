"use client";

import React from "react";
import { socialMediaLogin } from "../../lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const register = () => {
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

      response.status === 201 && router.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="flex justify-center items-center mt-[6rem] lg:mt-[7.5rem] mr-4 md:mr-0 lg:mr-0 py-[6rem]">
      <div className="bg-green-100 px-10 py-4 lg:p-4 rounded-[6px]">
        <form className="flex mb-8 flex-col gap-2 " action={socialMediaLogin}>
          <button
            className="py-2 w-full lg:w-[20vw] px-4 mr-8 rounded-[4px] bg-green-200 hover:bg-green-400"
            type="submit"
            name="action"
            value="google">
            Signin With Google
          </button>
        </form>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <p>User Name</p>
            <input
              className="outline-none w-full lg:w-[20vw]  py-2 px-4 bg-white rounded-[4px] border border-green-500"
              type="text"
              placeholder="User Name"
              name="name"
              id="name"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              className="outline-none w-full lg:w-[20vw]  py-2 px-4 bg-white rounded-[4px] border border-green-500"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className="outline-none w-full lg:w-[20vw]  py-2 px-4 bg-white rounded-[4px] border border-green-500"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <button
            className="w-full lg:w-[20vw] my-6 py-2 px-4 bg-green-700 hover:bg-green-900 text-white rounded-[4px] "
            type="submit">
            Register
          </button>
          <div className="mt-4 flex items-center gap-1">
            <p>Already have an account? </p>
            <Link className="text-blue-800 underline " href="/login">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
