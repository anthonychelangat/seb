import React from "react";
import { getLinkByLinkId } from "@/lib/actions";
import EditLink from "../../../../../components/EditLink";

const page = async ({ params }) => {
  const { linkId } = await params;

  const link = await getLinkByLinkId(linkId);

  return (
    <div>
      {link.map(l => (
        <EditLink key={l.id} id={l.id} name={l.name} link={l.link} />
      ))}
    </div>
  );
};

export default page;
