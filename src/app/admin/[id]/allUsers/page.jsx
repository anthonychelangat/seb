import AllUsers from "@/components/AllUsers";
import PlacesNav from "@/components/placesNav/PlacesNav";
import UsersByRole from "@/components/UsersByRole";
import React from "react";

const page = async ({ params, searchParams }) => {
  const role = await searchParams.role;
  const { id } = await params;

  return (
    <div className="mx-6 space-y-6">
      <PlacesNav />

      <div>
        {role ? <UsersByRole id={id} role={role} /> : <AllUsers id={id} />}
      </div>
    </div>
  );
};

export default page;
