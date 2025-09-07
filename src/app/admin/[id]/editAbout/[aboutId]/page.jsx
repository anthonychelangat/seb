import React from "react";
import { getAboutByAboutId } from "@/lib/actions";
import EditAbout from "@/components/EditAbout";

const page = async ({ params }) => {
  const { aboutId } = await params;

  const about = await getAboutByAboutId(aboutId);

  return (
    <div>
      {about.map(a => (
        <EditAbout key={a.id} id={a.id} about={a.about} />
      ))}
    </div>
  );
};

export default page;
