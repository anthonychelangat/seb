import Link from "next/link";
import React from "react";
import { FaHiking, FaInfo, FaLink, FaUser } from "react-icons/fa";
import { MdContactMail, MdGridView } from "react-icons/md";

const HeaderComponents = ({ id }) => {
  return (
    <div className="bg-gray-200 py-6 px-6 h-[7rem] flex items-center gap-4 overflow-x-auto ">
      <Link
        href={`/admin/${id}`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <MdGridView /> Dashboard
      </Link>
      <Link
        href={`/admin/${id}/addTour?${id}`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <FaHiking />
        <p className="nowrap ">Add&nbsp;Tour</p>
      </Link>
      <Link
        href={`/admin/${id}/addUser?`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <FaUser /> Add&nbsp;User
      </Link>
      <Link
        href={`/admin/${id}/addSocials`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <FaLink /> Add&nbsp;Socials
      </Link>
      <Link
        href={`/admin/${id}/addContacts`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <MdContactMail /> Add&nbsp;Contacts
      </Link>
      <Link
        href={`/admin/${id}/addAboutUs`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <FaInfo /> Add&nbsp;About
      </Link>
      <Link
        href={`/admin/${id}/assignGuides`}
        className="capitalise tracking-tight text-black font-bold mb-4 text-base flex items-center flex-col gap-4">
        <FaInfo /> Assign&nbsp;Guides
      </Link>
    </div>
  );
};

export default HeaderComponents;
