import { deleteTour, getTours } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaEye, FaPen, FaPlus, FaTrash } from "react-icons/fa";

const page = async ({ params }) => {
  const { id } = await params;
  const tours = await getTours();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">
            All Tour Packages
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Manage and update your expedition offerings
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white">
                <tr>
                  <th className="px-8 py-6 text-left text-sm font-semibold uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-8 py-6 text-left text-sm font-semibold uppercase tracking-wider">
                    Tour Title
                  </th>
                  <th className="px-8 py-6 text-left text-sm font-semibold uppercase tracking-wider hidden lg:table-cell">
                    Description
                  </th>
                  <th className="px-8 py-6 text-center text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tours.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-8 py-16 text-center text-gray-500 text-lg">
                      No tours found. Start by adding your first expedition!
                    </td>
                  </tr>
                ) : (
                  tours.map(tour => (
                    <tr
                      key={tour.id}
                      className="hover:bg-indigo-50/70 transition-colors duration-200">
                      <td className="px-8 py-6 text-sm font-medium text-gray-700">
                        {tour.id}
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-lg font-semibold text-gray-900 capitalize">
                          {tour.title}
                        </p>
                      </td>
                      <td className="px-8 py-6 text-gray-600 hidden lg:table-cell">
                        <p className="line-clamp-3">{tour.description}</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-6 text-xl">
                          <Link
                            href={`/admin/${id}/singleTour/${tour.id}`}
                            className="text-indigo-600 hover:text-indigo-800 transition"
                            title="View Tour">
                            <FaEye />
                          </Link>
                          <Link
                            href={`/admin/${id}/editTour/${tour.id}`}
                            className="text-blue-600 hover:text-blue-800 transition"
                            title="Edit Tour">
                            <FaPen />
                          </Link>
                          <form action={deleteTour} className="inline">
                            <input
                              hidden
                              name="tour_id"
                              value={tour.id}
                              readOnly
                            />
                            <button
                              type="submit"
                              className="text-red-600 hover:text-red-800 transition"
                              title="Delete Tour">
                              <FaTrash />
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional Add Button (if you want to add one here) */}
        <div className="mt-10 text-center">
          <Link
            href={`/admin/${id}/addTour`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <FaPlus className="text-xl" /> Add New Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
