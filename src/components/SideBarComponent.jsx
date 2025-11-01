import Link from "next/link";
import React from "react";
import { FaHiking, FaInfo, FaLink, FaUser } from "react-icons/fa";
import { MdContactMail, MdGridView } from "react-icons/md";

const SideBarComponent = async ({ id }) => {
  return (
    <div className="bg-gray-200 py-6 px-6 h-[100vh] w-[100%] space-y-6">
      <div className="h-[5rem] w-[100%] flex justify-left">
        <a href="/">
          <p className="text-3xl block capitalise tracking-wide text-gray-700 font-bold mb-2">
            Seb
          </p>
        </a>
      </div>
      <Link
        href={`/admin/2`}
        className=" capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <MdGridView /> Dashboard
      </Link>
      <Link
        href={`/admin/${id}/addTour?${id}`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <FaHiking /> Add Tour
      </Link>
      <Link
        href={`/admin/${id}/addUser?`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <FaUser /> Add User
      </Link>
      <Link
        href={`/admin/${id}/addSocials`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <FaLink /> Add Socials
      </Link>
      <Link
        href={`/admin/${id}/addContacts`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <MdContactMail /> Add Contacts
      </Link>
      <Link
        href={`/admin/${id}/addAboutUs`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <FaInfo /> Add About
      </Link>
      <Link
        href={`/admin/${id}/assignGuides`}
        className="capitalise tracking-wide text-gray-700 font-bold mb-4 text-xl flex items-center gap-4">
        <FaInfo /> Assign Guides
      </Link>
    </div>
  );
};

export default SideBarComponent;
