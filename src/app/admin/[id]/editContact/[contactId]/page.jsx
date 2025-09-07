import React from "react";
import { getContactByContactId } from "@/lib/actions";
import EditContact from "@/components/EditContact";

const page = async ({ params }) => {
  const { contactId } = await params;

  const contact = await getContactByContactId(contactId);

  return (
    <div>
      {contact.map(c => (
        <EditContact key={c.id} id={c.id} name={c.name} contact={c.contact} />
      ))}
    </div>
  );
};

export default page;
