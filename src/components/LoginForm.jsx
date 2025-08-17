"use client";

import React from "react";
import { socialMediaLogin } from "../lib/actions";
import { credentialsLogin } from "../lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const LoginForm = () => {
  const router = useRouter();
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialsLogin(formData);

      if (!!response.error) {
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center pt-10 w-[100%] h-[fitcontent]">
      <div className="bg-green-100 px-4 w-[100%] py-10 flex flex-col gap-8 rounded-[6px]">
        <form
          className="flex mb-8 flex-col gap-6 w-[100%] "
          action={socialMediaLogin}>
          <button
            className="flex items-center gap-4 py-4 w-[100%] px-4 text-xl rounded-[4px] bg-green-200 hover:bg-green-400"
            type="submit"
            name="action"
            value="google">
            <FaGoogle className="text-3xl" />
            <p>Signin With Google</p>
          </button>
          <button
            className="flex items-center gap-4 py-4 w-[100%] text-xl px-4 rounded-[4px] bg-green-200 hover:bg-green-400"
            type="submit"
            name="action"
            value="github">
            <FaGithub className="text-3xl" />
            <p>Signin With Github</p>
          </button>
        </form>
        <form className="space-y-4 w-[100%]" onSubmit={handleFormSubmit}>
          <div className="space-y-2">
            <p className="text-xl">Email</p>
            <input
              className="placeholder:text-xl outline-none w-[100%]  py-4 px-4 bg-white rounded-[4px] border border-green-500"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xl">Password</p>
            <input
              className="placeholder:text-xl outline-none w-[100%]  py-4 px-4 bg-white rounded-[4px] border border-green-500"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <button
            className="w-[100%] text-xl my-6 py-4 px-4 bg-green-700 hover:bg-green-900 text-white rounded-[4px] "
            type="submit">
            Login
          </button>
          <div className="mt-8 text-lg lg:text-sm text-nowrap flex items-center gap-1">
            <p>Don't have an account?</p>{" "}
            <Link className="text-blue-800 underline " href="/register">
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
