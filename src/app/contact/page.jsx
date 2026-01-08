import ContactSkeleton from "@/components/ContactSkeleton";
import { addMessage } from "@/lib/data";
import React, { Suspense } from "react";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <div className="mt-[5rem] lg:mt-[5rem] md:mt-[5rem]">
        <section className=" bg-indigo-900 lg:py-28 py-6 overflow-hidden">
          <div className=" bg-black/40"></div>
          <div className=" max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get In <span className="text-pink-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you're planning your next adventure in Uganda, have
              questions about our tours, or just want to say hello — we're here
              to help make your journey unforgettable.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl shadow-2xl p-10 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-gray-300 mb-10 leading-relaxed">
                  Reach out anytime. Our team is passionate about helping you
                  discover the beauty of Uganda.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-pink-600/20 rounded-xl">
                      <FaLocationDot className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Our Location</p>
                      <p className="text-gray-300 mt-1">
                        Sipi, Kapchorwa
                        <br />
                        Eastern Uganda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-pink-600/20 rounded-xl">
                      <FaPhone className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-300 mt-1">+256 703 392 995</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-pink-600/20 rounded-xl">
                      <FaEnvelope className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-300 mt-1">
                        info@sebexpeditions.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-pink-600/20 rounded-xl">
                      <FaClock className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Availability</p>
                      <p className="text-gray-300 mt-1">
                        We're here 24/7 for your adventure needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form action={addMessage} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none resize-none"
                      placeholder="Tell us about your dream adventure..."></textarea>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="vote"
                      id="newsletter"
                      className="w-5 h-5 text-pink-600 rounded focus:ring-pink-500"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-gray-600">
                      Send me occasional updates and exclusive offers
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-purple-700 text-white 
          font-semibold rounded-full hover:bg-pink-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default ContactPage;
