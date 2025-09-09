import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Seb",
  description: "okay",
};

import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import SessionHeader from "@/components/SessionHeader";
import SessionMobileHeader from "@/components/SessionMobileHeader";
import Link from "next/link";
import IntermediateFooter from "@/components/IntermediateFooter";
import FullFooter from "@/components/FullFooter";

export default function RootLayout({ children }) {
  const tel = 703392995;
  const email = "chelangatanthony@gmail.com";
  const name = "communication";

  const whatsappLink = `https://wa.me/+256${tel}`;
  const emailLink = `mailto:${email}?subject=${name}`;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative h-[fit-content]">
          <div>
            <SessionHeader />
          </div>
          <div>
            <SessionMobileHeader />
          </div>

          <div className="z-0 bg-[white]">{children}</div>
        </div>

        <div className="fixed right-5 bottom-10 pb-4 flex flex-col gap-3">
          <Link
            href={`https://api.whatsapp.com/send?phone=${whatsappLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-green-500 text-white rounded-full shadow-lg transition-transform hover:scale-110">
            <FaWhatsapp className="text-2xl lg:text-2xl" />
          </Link>

          <Link
            href={`mailto:${emailLink}`}
            className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-blue-600 text-white rounded-full shadow-lg transition-transform hover:scale-110">
            <MdMail className="text-2xl lg:text-2xl" />
          </Link>
        </div>

        <FullFooter />
      </body>
    </html>
  );
}
