import { authOptions } from "@/app/api/auth/[...nextauth]";
import Icons from "@/components/Icons";
import Photos from "@/components/Photos";
import {
  deleteAbout,
  deleteContacts,
  deleteLinks,
  deleteTour,
  deleteUser,
  getAbout,
  getContacts,
  getLinks,
  getTours,
  getUserByEmail,
  getAllUsersWithPics,
} from "@/lib/actions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaEye, FaPen, FaTrash, FaPlus } from "react-icons/fa6";

const AdminDashboard = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? "tony@gmail.com";
  const currentUser = await getUserByEmail(email);
  const user_id = currentUser[0]?.id;

  const [users, tours, links, contacts, about] = await Promise.all([
    getAllUsersWithPics(),
    getTours(),
    getLinks(),
    getContacts(),
    getAbout(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="hidden md:block lg:block">
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text bg-gradient-to-r text-indigo-600">
                Admin Dashboard
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Manage tours, teams and content for Seb Expeditions
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Logged in as</p>
              <p className="text-2xl font-bold text-indigo-700 capitalize">
                {currentUser[0]?.username}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/50">
            <p className="text-5xl font-extrabold text-indigo-600">
              {users.length}
            </p>
            <p className="mt-3 text-normal font-medium text-gray-700">
              Team Members
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/50">
            <p className="text-5xl font-extrabold text-indigo-600">
              {tours.length}
            </p>
            <p className="mt-3 text-normal font-medium text-gray-700">
              Tour Packages
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/50">
            <p className="text-5xl font-extrabold text-indigo-600">
              {links.length}
            </p>
            <p className="mt-3 text-normal font-medium text-gray-700">
              Social Links
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/50">
            <p className="text-5xl font-extrabold text-indigo-600">
              {contacts.length}
            </p>
            <p className="mt-3 text-lg font-medium text-indigo-700">
              Contact Info
            </p>
          </div>
        </div>

        {/* Team Members Preview */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Team Members
            </h2>
            <div className="flex items-center gap-5">
              <Link
                href={`/admin/${user_id}/addUser`}
                className="hidden md:flex lg:flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <FaPlus className="text-lg" /> Add New Member
              </Link>
              <Link
                href={`/admin/${user_id}/allUsers`}
                className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800">
                <p className="hidden lg:block">View All</p> <FaArrowRight />
              </Link>
            </div>
          </div>

          {users.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-xl">
              No team members yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {users.slice(0, 6).map(u => (
                <div
                  key={u.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-4">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={u.url}
                      alt={u.username}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-sm truncate capitalize text-gray-800 mb-5">
                      {u.username}
                    </h4>
                    <div className="flex justify-center gap-5 lg:gap-2 text-normal">
                      <Link
                        href={`/admin/${user_id}/singleUser/${u.id}`}
                        className="text-gray-600 hover:text-indigo-600 transition">
                        <FaEye />
                      </Link>
                      <Link
                        href={`/admin/${user_id}/editUser/${u.id}`}
                        className="text-blue-600 hover:text-blue-700 transition">
                        <FaPen />
                      </Link>
                      <form action={deleteUser} className="inline">
                        <input hidden name="user_id" value={u.id} readOnly />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700 transition">
                          <FaTrash />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tour Packages Preview */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Tour Packages
            </h2>
            <div className="flex items-center gap-5">
              <Link
                href={`/admin/${user_id}/addTour`}
                className="hidden md:flex lg:flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <FaPlus className="text-lg" /> Add New Tour
              </Link>
              <Link
                href={`/admin/${user_id}/allTours`}
                className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-pink-800">
                <p className="hidden lg:block">View All</p>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {tours.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-xl">
              No tours created yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tours.slice(0, 6).map(t => (
                <div
                  key={t.id}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <Photos id={t.id} />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-2xl text-gray-800 capitalize mb-4 line-clamp-2">
                      {t.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-8">
                      {t.description}
                    </p>
                    <div className="flex justify-center gap-8 text-2xl">
                      <Link
                        href={`/admin/${user_id}/singleTour/${t.id}`}
                        className="text-gray-600 hover:text-indigo-600 transition">
                        <FaEye />
                      </Link>
                      <Link
                        href={`/admin/${user_id}/editTour/${t.id}`}
                        className="text-blue-600 hover:text-blue-700 transition">
                        <FaPen />
                      </Link>
                      <form action={deleteTour} className="inline">
                        <input hidden name="tour_id" value={t.id} readOnly />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700 transition">
                          <FaTrash />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Management Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* About Us */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
              <Link
                href={`/admin/${user_id}/addAboutUs`}
                className="text-indigo-600 hover:text-indigo-800 transition">
                <FaPlus className="text-3xl" />
              </Link>
            </div>
            {about.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No about content added.
              </p>
            ) : (
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {about.map(a => (
                  <div
                    key={a.id}
                    className="pb-6 border-b border-gray-200 last:border-0">
                    <p className="text-gray-700 line-clamp-4 mb-5">{a.about}</p>
                    <div className="flex justify-between gap-5 text-xl">
                      <Link
                        href={`/admin/${user_id}/editAbout/${a.id}`}
                        className="text-blue-600 hover:text-blue-700">
                        <FaPen />
                      </Link>
                      <form action={deleteAbout} className="inline">
                        <input hidden name="about_id" value={a.id} readOnly />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Social Links */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Social Links</h2>
              <Link
                href={`/admin/${user_id}/addSocials`}
                className="text-indigo-600 hover:text-indigo-800 transition">
                <FaPlus className="text-3xl" />
              </Link>
            </div>
            {links.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No social links added.
              </p>
            ) : (
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {links.map(l => (
                  <div
                    key={l.id}
                    className="flex items-center gap-4 justify-between py-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-center gap-5">
                      <Icons
                        name={l.name}
                        className="text-3xl text-indigo-600"
                      />
                      <div>
                        <p className="font-semibold capitalize text-gray-800">
                          {l.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate max-w-[180px]">
                          {l.link}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 text-xl">
                      <Link
                        href={`/admin/${user_id}/editSocial/${l.id}`}
                        className="text-blue-600 hover:text-blue-700">
                        <FaPen />
                      </Link>
                      <form action={deleteLinks} className="inline">
                        <input hidden name="link_id" value={l.id} readOnly />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Contact Info */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Contact Info</h2>
              <Link
                href={`/admin/${user_id}/addContacts`}
                className="text-indigo-600 hover:text-indigo-800 transition">
                <FaPlus className="text-3xl" />
              </Link>
            </div>
            {contacts.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No contact info added.
              </p>
            ) : (
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {contacts.map(c => (
                  <div
                    key={c.id}
                    className="flex items-center gap-4 justify-between py-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-center gap-5">
                      <Icons
                        name={c.name}
                        className="text-3xl text-indigo-600"
                      />
                      <p className="font-semibold text-gray-800">{c.contact}</p>
                    </div>
                    <div className="flex gap-5 text-xl">
                      <Link
                        href={`/admin/${user_id}/editContact/${c.id}`}
                        className="text-blue-600 hover:text-blue-700">
                        <FaPen />
                      </Link>
                      <form action={deleteContacts} className="inline">
                        <input hidden name="contact_id" value={c.id} readOnly />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
