import AboutSkeleton from "@/components/AboutSkeleton";
import UserOptions from "@/components/UserOptions";
import { getAbout, getusersWithPics } from "@/lib/actions";
import React, { Suspense } from "react";

export async function generateMetadata() {
  const about = await getAbout();
  const aboutText = about[0]?.about || "Learn more about Seb Expeditions.";

  return {
    title: "About Seb Expeditions",
    description: aboutText,
    openGraph: {
      title: "About Seb Expeditions",
      description: aboutText,
    },
  };
}

const page = async () => {
  const users = await getusersWithPics();
  const about = await getAbout();

  return (
    <Suspense fallback={<AboutSkeleton />}>
      <div className="min-h-screen mt-[5rem] bg-gray-50">
        {/* Main container */}
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-24">
          {/* About Section */}
          <div className=" mb-15">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <div className="mt-12 max-w-3xl space-y-7 text-lg leading-relaxed text-gray-700">
              {about.map((a, index) => (
                <p key={index}>{a.about}</p>
              ))}
            </div>
          </div>

          {/* Team Section - Now matching the clean centered card style */}
          <div className="bg-white rounded-3xl shadow-2xl py-16 px-8 lg:py-20 lg:px-16">
            <div className=" mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Meet our Team
              </h2>
              <p className="mt-6 max-w-2xl text-xl text-gray-600 leading-relaxed">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>

            <ul
              role="list"
              className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {users.map((u, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center group">
                  <div className="relative -z-[10] mb-8">
                    <img
                      src={u.url}
                      alt={u.username}
                      className="h-48 w-48 rounded-full object-cover ring-8 ring-gray-600 shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {u.username}
                  </h3>
                  <p className="mt-3 text-lg font-medium text-indigo-600">
                    <UserOptions id={u.role} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
