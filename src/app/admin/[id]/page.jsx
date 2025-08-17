import Icons from "@/components/Icons";
import Photos from "@/components/Photos";
import {
  getContacts,
  getLinks,
  getTours,
  getUserByEmail,
  getusersWithPics,
} from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const admin = async ({ params }) => {
  const users = await getusersWithPics();
  const tours = await getTours();
  const links = await getLinks();
  const session = await auth();
  const email = session?.user.email;
  const user = await getUserByEmail(email);
  const [user_id] = user.map(u => u.id);
  const contacts = await getContacts();

  return (
    <div className="pl-10 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="bold text-xl">Users</h2>
          <div className="flex items-center gap-5">
            {users.map(u => (
              <div key={u.id} className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <img
                    className="w-[5rem] aspect-1/1"
                    src={u.path ? u.path : `/1753441211144_1.jpg`}
                  />
                  <p className="capitalize bold">{u.username}</p>
                </div>
                <div className="px-4 flex items-center justify-between">
                  <button>
                    <FaEye className="text-black" />
                  </button>
                  <a href={`/admin/${user_id}/editUser/${u.id}`}>
                    <FaPen className="text-blue-700" />
                  </a>
                  <form action="">
                    <input hidden name="user_id" value={4} />
                    <button type="submit">
                      <FaTrash className="text-red-700" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="bold text-xl">Guides</h2>
          <div className="flex items-center gap-5">
            {users.map(u => (
              <div key={u.id} className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <img
                    className="w-[5rem] aspect-1/1"
                    src={u.path ? u.path : `/1753441211144_1.jpg`}
                  />
                  <p className="capitalize bold">{u.username}</p>
                </div>
                <div className="px-4 flex items-center justify-between">
                  <button>
                    <FaEye className="text-black" />
                  </button>
                  <button>
                    <FaPen className="text-blue-700" />
                  </button>
                  <form action="">
                    <input hidden name="user_id" value={4} />
                    <button type="submit">
                      <FaTrash className="text-red-700" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="bold text-xl">Admins</h2>
          <div className="flex items-center gap-5">
            {users.map(u => (
              <div key={u.id} className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <img
                    className="w-[5rem] aspect-1/1"
                    src={u.path ? u.path : `/1753441211144_1.jpg`}
                  />
                  <p className="capitalize bold">{u.username}</p>
                </div>
                <div className="px-4 flex items-center justify-between">
                  <button>
                    <FaEye className="text-black" />
                  </button>
                  <button>
                    <FaPen className="text-blue-700" />
                  </button>
                  <form action="">
                    <input hidden name="user_id" value={4} />
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
      <div>
        <h2 className="bold text-xl">Tours</h2>
        <div className="grid grid-cols-3 gap-4">
          {tours.map(t => (
            <div key={t.id}>
              <Photos id={t.id} />
              <h2 className="bold capitalize text-xl">{t.title}</h2>
              <p className="overflow-hidden line-clamp-4">{t.description}</p>
              <div className="px-4 flex items-center justify-between">
                <a href={`/tour/${t.id}`}>
                  <FaEye className="text-black" />
                </a>
                <a href={`/admin/${user_id}/editTour/${t.id}`}>
                  <FaPen className="text-blue-700" />
                </a>

                <button type="submit">
                  <FaTrash className="text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>About Us</p>
      </div>
      <div>
        <p>Social Links</p>
        <div className="grid grid-cols-4 gap-4">
          {links.map(l => (
            <div key={l.id} className="">
              <div>
                <p>{l.name}</p>
                <p>{l.link}</p>
              </div>
              <div className="flex items-center gap-12 ">
                <FaPen />
                <FaTrash />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>Contacts</p>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map(c => (
            <div key={c.id} className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Icons name={c.name} />
                <p>{c.contact}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaPen />
                <FaTrash />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default admin;
