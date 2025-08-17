import { getAbout, getusersWithPics } from "@/lib/actions";
import React from "react";

const page = async () => {
  const users = await getusersWithPics();
  const about = await getAbout();
  return (
    <div className="max-w-5xl mx-auto">
      <h2 class="text-3xl mt-6 font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
        About Seb Adventures
      </h2>
      <div>
        {about.map(a => (
          <p key={a.id} class="mt-6 text-lg/8 text-gray-600">
            {a.about}
          </p>
        ))}
      </div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p class="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {users.map(u => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    src={u.path}
                    alt=""
                    class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                  />
                  <div>
                    <h3 className="capitalize text-base/7 font-semibold tracking-tight text-gray-900">
                      {u.username}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Co-Founder / CEO
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
