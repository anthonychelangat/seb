import UserOptions from "@/components/UserOptions";
import { getAbout, getusersWithPics } from "@/lib/actions";
import React from "react";

const page = async () => {
  const users = await getusersWithPics();

  const about = await getAbout();

  return (
    <div className="lg:max-w-5xl lg:mx-auto mx-4 md:mx-0 mt-[6rem] lg:mt-[7.5rem]">
      <h2 className="text-lg pt-8 md:mt-6 lg:mt-6  block uppercase tracking-wide font-semibold text-pretty text-black sm:text-4xl">
        About Seb Expeditions
      </h2>
      <div>
        {about.map((a, index) => (
          <p key={index} className="mt-6 text-sm lg:text-base text-black">
            {a.about}
          </p>
        ))}
      </div>
      <div className="bg-white py-10 pg:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold tracking-tight text-pretty text-black sm:text-4xl">
              Meet our Team
            </h2>
            <p className="mt-6 text-sm text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {users.map((u, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-6">
                  <img
                    src={u.url}
                    alt=""
                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                  />
                  <div>
                    <h3 className="capitalize text-base/7 font-semibold tracking-tight text-gray-900">
                      {u.username}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600">
                      <UserOptions id={u.role} />
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
