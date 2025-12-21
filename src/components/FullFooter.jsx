import React from "react";
import IntermediateFooter from "./IntermediateFooter";
import { getContacts, getLinks } from "@/lib/actions";

const FullFooter = async () => {
  const links = await getLinks();
  const contacts = await getContacts();

  return <IntermediateFooter links={links} contacts={contacts} />;
};

export default FullFooter;
