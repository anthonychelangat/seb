import { deleteTour, getTours } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const page = async ({ params }) => {
  const { id } = await params;
  const tours = await getTours();

  return (
    <div>
      <table className="border-collapse p-[1rem] rounded-bg shadow-black mx-auto overflow-auto w-[100%] bg-gray-100">
        <thead>
          <tr>
            <th className="p-[1rem] sticky bg-blue-400 border-collapse ">Id</th>
            <th className="p-[1rem] sticky bg-blue-400 border-collapse ">
              Title
            </th>
            <th className="p-[1rem] hidden lg:block sticky bg-blue-400 border-collapse ">
              Description
            </th>
            <th className="p-[1rem] sticky bg-blue-400 border-collapse ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => {
            return (
              <tr className=" even:bg-blue-200 hover:bg-gray-50" key={tour.id}>
                <td className="p-[1rem]">{tour.id}</td>
                <td className="p-[1rem] capitalize flex items-center gap-1">
                  {tour.title}
                </td>
                <td className="p-[1rem] hidden lg:block">{tour.description}</td>
                <td className="p-[1rem] flex items-center gap-3">
                  <Link
                    className="flex items-center"
                    href={`/admin/${id}/singleTour/${tour.id}`}>
                    <FaEye className="text-xl flex items-center text-blue-500 hover:text-blue-900" />
                  </Link>
                  <Link href={`/admin/${id}/editTour/${tour.id}`}>
                    <FaPen className="text-blue-700" />
                  </Link>
                  <div>
                    <form action={deleteTour}>
                      <input hidden name="tour_id" value={tour.id} />
                      <button type="submit">
                        <FaTrash className="text-red-700" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default page;
