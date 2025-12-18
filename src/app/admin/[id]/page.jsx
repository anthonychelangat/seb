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
import { FaArrowRight, FaEye, FaPen, FaTrash } from "react-icons/fa";

const admin = async ({ params }) => {
  const users = await getAllUsersWithPics();
  const tours = await getTours();
  const links = await getLinks();
  const session = await getServerSession(authOptions);
  const email = session?.user.email;
  const user = await getUserByEmail(email);
  const [user_id] = user.map(u => u.id);
  const contacts = await getContacts();
  const about = await getAbout();

  return (
    <div className="px-4 lg:pl-10 max-w-6xl space-y-8 mx-auto">
      <div className="space-y-4 pt-8">
        <div className="flex items-center justify-between">
          <h2 className="bold text-xl">Users</h2>
          <Link
            className="flex items-center gap-2 pointer"
            href={`/admin/${user_id}/allUsers`}>
            <p>More</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {users.map(u => (
            <div key={u.id} className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <img className="w-[5rem] aspect-1/1" src={u.url} />
                <p className="capitalize bold">{u.username}</p>
              </div>
              <div className="px-4 flex items-center justify-between">
                <Link href={`/admin/${user_id}/singleUser/${u.id}`}>
                  <FaEye className="text-black" />
                </Link>
                <Link href={`/admin/${user_id}/editUser/${u.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>
                <form action={deleteUser}>
                  <input hidden name="user_id" value={u.id} readOnly />
                  <button type="submit">
                    <FaTrash className="text-red-700" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        className="flex items-center gap-2 pointer"
        href={`/admin/${user_id}/allUsers`}>
        <p>More</p>
        <FaArrowRight />
      </Link>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="bold text-xl">Tours</h2>
          <Link
            className="flex items-center gap-2"
            href={`/admin/${user_id}/allTours`}>
            <p>More</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tours.map(t => (
            <div key={t.id}>
              <Photos id={t.id} />
              <h2 className="bold capitalize text-xl">{t.title}</h2>
              <p className="overflow-hidden line-clamp-4">{t.description}</p>
              <div className="px-4 flex items-center justify-between">
                <Link href={`/admin/${user_id}/singleTour/${t.id}`}>
                  <FaEye className="text-black" />
                </Link>
                <Link href={`/admin/${user_id}/editTour/${t.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>

                <form action={deleteTour}>
                  <input hidden name="tour_id" value={t.id} readOnly />
                  <button type="submit">
                    <FaTrash className="text-red-700" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="bold text-xl">About Us</h2>
          <Link className="flex items-center gap-2" href="#">
            <p>More</p>
            <FaArrowRight />
          </Link>
        </div>
        <div>
          {about.map(l => (
            <div key={l.id} className="">
              <div>
                <p>{l.about}</p>
              </div>
              <div className="flex items-center gap-12 ">
                <Link href={`/admin/${user_id}/editAbout/${l.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>
                <form action={deleteAbout}>
                  <input hidden name="about_id" value={l.id} readOnly />
                  <button type="submit">
                    <FaTrash className="text-red-700" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="bold text-xl">Social Links</h2>
          <Link className="flex items-center gap-2" href="#">
            <p>More</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {links.map(l => (
            <div key={l.id} className="">
              <div>
                <p>{l.name}</p>
                <p>{l.link}</p>
              </div>
              <div className="flex items-center gap-12 ">
                <Link href={`/admin/${user_id}/editSocial/${l.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>
                <form action={deleteLinks}>
                  <input hidden name="link_id" value={l.id} readOnly />
                  <button type="submit">
                    <FaTrash className="text-red-700" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="bold text-xl">Contacts</h2>
          <Link className="flex items-center gap-2" href="#">
            <p>More</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map(c => (
            <div key={c.id} className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Icons name={c.name} />
                <p>{c.contact}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <Link href={`/admin/${user_id}/editContact/${c.id}`}>
                  <FaPen className="text-blue-700" />
                </Link>
                <form action={deleteContacts}>
                  <input hidden name="contact_id" value={c.id} readOnly />
                  <button type="submit">
                    <FaTrash className="text-red-700" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default admin;
