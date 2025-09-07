import HomeTours from "@/components/HomeTours";
import { getAbout } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const about = await getAbout();

  return (
    <div className="min-h-screen mt-[7rem] font-[family-name:var(--font-geist-sans)]">
      <main className="bg-[url(/Images/IMG-20250329-WA0002.jpg)] bg-auto bg-contain bg-cover no-repeat bg-center  ">
        <div className="flex items-center justify-center h-[50vh]">
          <h1 className="font-semibold tracking-tight text-pretty text-2xl w-[50%] h-[50%] text-center uppercase text-white md:text-4xl lg:text-4xl h-4">
            Welcome to seb Expeditions for a thrilling tour experience
          </h1>
        </div>
      </main>
      <div className="flex max-w-5xl mx-auto gap-8 px-4 md:px-8 lg:px-0 xl:px-0 flex-col">
        <div className="max-w-6xl mx-auto my-4 md:my-8 lg:my-8 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="">
            <h2 className="text-2xl lg:text-xl md:text-xl mt-3 lg:mt-6 font-semibold block uppercase tracking-wide text-pretty text-gray-900">
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
              <Link className="underline " href="/about">
                Read More
              </Link>
            </div>
          </div>

          <Image
            className="h-[50vh] hidden md:block sm:block w-full object-fit"
            src="/Images/IMG-20250329-WA0002.jpg"
            width={500}
            height={50}
            quality={80}
            alt=""
          />
        </div>
        <div className=" max-w-6xl my-6 mx-auto">
          <div className="flex w-full items-center gap-8 justify-between mt-4">
            <h2 className="text-2xl lg:text-xl md:text-xl block uppercase tracking-wide font-semibold text-pretty text-gray-900">
              Our Best Offers For You
            </h2>
            <Link
              href="/tours"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <p className="hidden md:block lg:block">More Offers</p>
              <FaArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
            </Link>
          </div>
          <div className="max-w-6xl mt-6">
            <HomeTours />
          </div>
        </div>
      </div>
    </div>
  );
}
