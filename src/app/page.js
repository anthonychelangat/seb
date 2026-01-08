import HomeSkeleton from "@/components/HomeSkeleton";
import HomeTours from "@/components/HomeTours";
import { getAbout } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default async function Home() {
  const about = await getAbout();

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <div className="min-h-screen mt-[5rem] md:mt-[5rem] lg:mt-[5rem] font-[family-name:var(--font-geist-sans)]">
        {/* Hero Section */}
        <section className="relative -z-10 h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Images/35.jpg"
              alt="Thrilling adventure with Seb Expeditions"
              fill
              priority
              className="object-cover object-center"
              quality={90}
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              Welcome to Seb Expeditions
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-medium">
              Embark on a thrilling tour experience
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-0 py-12 lg:py-20">
          {/* About Section */}
          <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-3xl lg:text-3xl font-bold uppercase lg:tracking-wide text-gray-900 mb-6">
                About Seb Expeditions
              </h2>

              {about.map(a => (
                <p
                  key={a.id}
                  className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 line-clamp-6 md:line-clamp-none">
                  {a.about}
                </p>
              ))}

              <Link
                href="/about"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                Read More
                <IoIosArrowForward className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="order-1 md:order-2 hidden md:block lg:block">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Images/10241.jpg"
                  alt="Seb Expeditions adventure scene"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </div>
          </section>

          {/* Best Offers Section */}
          <section>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl md:text-3xl lg:text-3xl font-bold uppercase tracking-wide text-gray-900">
                Our Best Offers
              </h2>

              <Link
                href="/tours"
                className="lg:mt-4 lg:inline-flex lg:items-center px-6 py-3 lg:bg-indigo-600 lg:text-white lg:font-medium lg:rounded-lg lg:hover:bg-indigo-700 lg:transition-colors lg:focus:outline-none lg:focus:ring-4 lg:focus:ring-indigo-300">
                <p className="hidden md:block lg:block">More Offers</p>
                <IoIosArrowForward className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8">
              <HomeTours />
            </div>
          </section>
        </div>
      </div>
    </Suspense>
  );
}
