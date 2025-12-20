import React, { Suspense } from "react";
import IntermediateFooter from "./IntermediateFooter";
import { getContacts, getLinks } from "@/lib/actions";

const FullFooter = async () => {
  const links = await getLinks();
  const contacts = await getContacts();

  return (
    <Suspense>
      <IntermediateFooter links={links} contacts={contacts} />
    </Suspense>
  );
};

export default FullFooter;
