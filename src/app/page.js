import HomeTours from "@/components/HomeTours";
//import SlideShow from "@/components/SlideShow";
import { getAbout } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default async function Home() {
  const about = await getAbout();

  return (
    <div className="min-h-screen mt-[6rem] lg:mt-[7rem] md:mt-[7rem] font-[family-name:var(--font-geist-sans)]">
      <main className="bg-[url(/Images/35.jpg)] bg-cover bg-center bg-no-repeat  ">
        <div className="flex items-center justify-center h-[50vh]">
          <h1 className="font-semibold tracking-tight text-pretty text-2xl lg:text-2xl w-[50%] h-[50%] text-center uppercase text-white md:text-4xl">
            Welcome to seb Expeditions for a thrilling tour experience
          </h1>
        </div>
      </main>
      <div className="flex max-w-5xl mx-auto gap-8 px-4 md:px-8 lg:px-0 xl:px-0 flex-col">
        <div className="md:my-8 lg:my-8 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="">
            <h2 className="text-lg lg:text-xl md:text-xl mt-3 lg:mt-6 font-semibold block uppercase tracking-wide text-pretty text-black">
              About Seb Expeditions
            </h2>
            {about.map(a => (
              <p
                key={a.id}
                className="overflow-hidden text-black line-clamp-10 mt-3 text-base">
                {a.about}
              </p>
            ))}
            <div className="flex flex-col my-2 lg:flex-row lg:items-center lg:justify-between pr-6">
              <div></div>
              <Link className="underline text-sm " href="/about">
                Read More
              </Link>
            </div>
          </div>

          <Image
            className="h-[50vh] hidden md:block sm:block w-full object-cover"
            src="/Images/10241.jpg"
            width={500}
            height={50}
            alt=""
          />
        </div>

        <div className=" max-w-6xl my-2 lg:my-6 mx-auto">
          <div className="flex w-full items-center gap-8 justify-between">
            <h2 className="text-lg lg:text-lg md:text-lg flex items-center gap-2 uppercase tracking-wide font-semibold text-pretty text-gray-900">
              Our Best Offers
              <span className="hidden md:block lg:block">For You</span>
            </h2>
            <Link
              href="/tours"
              className="inline-flex items-center lg:px-3 py-2  text-sm font-medium text-center lg:text-white lg:bg-blue-700 rounded-lg lg:hover:bg-blue-800 focus:ring-4 focus:outline-none lg:focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <p className="hidden md:block lg:block">More Offers</p>
              <IoIosArrowForward className="rtl:rotate-180 w-3.5 bold h-3.5 ms-2" />
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
