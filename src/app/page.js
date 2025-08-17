import HomeTours from "@/components/HomeTours";
import { getAbout } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const about = await getAbout();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="bg-[url(/Images/IMG-20250329-WA0002.jpg)] bg-auto bg-contain bg-cover no-repeat  ">
        <div className="flex items-center justify-center h-[50vh]">
          <h1 className="font-semibold tracking-tight text-pretty sm:text-4xl w-[50%] h-[50%] text-center uppercase text-white text-4xl h-4">
            Welcome to seb Expeditions for a thrilling tour experience
          </h1>
        </div>
      </main>
      <div className="flex gap-8 flex-col">
        <div className="max-w-6xl mx-auto my-8 grid grid-cols-2">
          <div className="">
            <h2 className="text-3xl mt-6 font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              About Seb Adventures
            </h2>
            {about.map(a => (
              <p
                key={a.id}
                className="overflow-hidden line-clamp-10  mt-6 text-lg/8 text-gray-600">
                {a.about}
              </p>
            ))}
            <div className="flex items-center justify-between pr-6">
              <div></div>
              <a className="underline " href="/about">
                Read More
              </a>
            </div>
          </div>

          <img
            className="h-[50vh] w-full object-fit"
            src="/Images/IMG-20250329-WA0002.jpg"
            width={500}
            height={50}
            alt=""
          />
        </div>
        <div className=" max-w-6xl my-6 mx-auto">
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Our Best Offers For You
            </h2>
            <a
              href="/tours"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              More Offers
              <FaArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
            </a>
          </div>
          <div className="max-w-6xl mt-6">
            <HomeTours />
          </div>
        </div>
      </div>
    </div>
  );
}
