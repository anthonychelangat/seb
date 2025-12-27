import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import SessionHeader from "@/components/SessionHeader";
import SessionMobileHeader from "@/components/SessionMobileHeader";
import Link from "next/link";
import FullFooter from "@/components/FullFooter";
import AuthProvider from "@/components/Authprovider";
import { Suspense } from "react";
import FooterSkeleton from "@/components/FooterSkeleton";
import HeaderSkeleton from "@/components/HeaderSkeleton";
import MobileHeaderSkeleton from "@/components/MobileHeaderSkeleton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Seb Expeditions",
    template: "%s | Seb Expeditions",
  },
  description:
    "Discover unforgettable adventures in Uganda with Seb Expeditions",
};

export default function RootLayout({ children }) {
  const phone = "256703392995"; // Uganda format without +
  const email = "info@sebexpeditions.com";
  const whatsappLink = `https://wa.me/${phone}`;
  const emailLink = `mailto:${email}?subject=Inquiry%20from%20Seb%20Expeditions%20Website`;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${roboto_mono.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <AuthProvider>
          {/* Desktop Header */}
          <Suspense fallback={<HeaderSkeleton />}>
            <SessionHeader />
          </Suspense>

          {/* Mobile Header */}
          <Suspense fallback={<MobileHeaderSkeleton />}>
            <SessionMobileHeader />
          </Suspense>

          {/* Main Content */}
          <main className="relative min-h-screen">{children}</main>

          {/* Floating Contact Buttons - Bottom Right */}
          <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
            {/* WhatsApp */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 hover:bg-green-600">
              <FaWhatsapp className="text-3xl" />
              <span className="absolute hidden lg:block right-full mr-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Chat on WhatsApp
              </span>
            </Link>

            {/* Email */}
            <Link
              href={emailLink}
              aria-label="Send us an email"
              className="group flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-indigo-600/50 hover:bg-indigo-700">
              <MdMail className="text-3xl" />
              <span className="hidden lg:block absolute right-full mr-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Send Email
              </span>
            </Link>
          </div>

          {/* Footer */}
          <Suspense fallback={<FooterSkeleton />}>
            <FullFooter />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
