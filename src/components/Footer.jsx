import React from "react";
import Icons from "./Icons";
import Subscribe from "./Subscribe";

const Footer = ({ links, contacts }) => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className="bg-blue-500 ">
      <div className="">
        <div className="max-w-5xl mx-auto py-4 flex items-center justify-center flex-col">
          <Subscribe />
        </div>
        <div className="bg-gray-100">
          <div className="max-w-5xl w-full px-6 md:px-0 lg:px-0 text-gray-800 grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="py-5">
              <h3 className="font-bold text-xl text-indigo-600">
                Seb Expeditions
              </h3>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Quick Links
              </div>
              <a className="my-3 block" href="/about">
                About Us <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/tours">
                Tour Packages{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="#">
                Our Blog <span className="text-teal-600 text-xs p-1">Soon</span>
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Support
              </div>
              <a className="my-3 block" href="/#">
                Help Center <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Privacy Policy{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Conditions <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Contact us
              </div>
              <div className="">
                {contacts.map(c => (
                  <div key={c.id} className="my-3 flex items-center gap-4 ">
                    <Icons name={c.name} />
                    <p>{c.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              {links.map(l => (
                <a key={l.id} href={l.link} className="w-6 mx-1">
                  <Icons name={l.name} />
                </a>
              ))}
            </div>
            <div className="my-5">© Copyright {year}. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
