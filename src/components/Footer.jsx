import React from "react";
import Icons from "./Icons";
import Subscribe from "./Subscribe";

const Footer = ({ links, contacts }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-b from-indigo-900 to-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Subscribe to get exclusive tour deals and travel inspiration
          </p>
          <Subscribe />
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6">
              Seb Expeditions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Discover Uganda's hidden gems with unforgettable guided tours and
              personalized adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase font-semibold text-indigo-400 tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/tours" className="hover:text-white transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2">
                  Our Blog
                  <span className="text-xs bg-teal-600 text-white px-2 py-1 rounded-full">
                    Soon
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm uppercase font-semibold text-indigo-400 tracking-wider mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase font-semibold text-indigo-400 tracking-wider mb-6">
              Contact Us
            </h4>
            <div className="space-y-5">
              {contacts.map(c => (
                <div key={c.id} className="flex items-center gap-4">
                  <div className="text-indigo-400">
                    <Icons name={c.name} />
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors">
                    {c.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.id}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Follow us on ${l.name}`}>
                <Icons name={l.name} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {year} Seb Expeditions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
