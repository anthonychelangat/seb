import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Seb Expeditions",
  description: "okay",
};

import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import SessionHeader from "@/components/SessionHeader";
import SessionMobileHeader from "@/components/SessionMobileHeader";
import Link from "next/link";
import FullFooter from "@/components/FullFooter";
import AuthProvider from "@/components/Authprovider";

export default function RootLayout({ children }) {
  const tel = 703392995;
  const email = "chelangatanthony@gmail.com";
  const name = "communication";

  const whatsappLink = `https://wa.me/+256${tel}`;
  const emailLink = `mailto:${email}?subject=${name}`;

  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
        <div className="relative bg-[white] h-[fit-content]">
          <div>
            <AuthProvider>
              <SessionHeader />
            </AuthProvider>
          </div>
          <div>
            <AuthProvider>
              <SessionMobileHeader />
            </AuthProvider>
          </div>

          <AuthProvider>
            <div className="z-0 bg-[white]">{children}</div>
          </AuthProvider>
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
