"use server";

import AddContacts from "@/components/AddContacts";
import AddSocials from "@/components/AddSocials";
import AddTour from "@/components/AddTour";
import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";

const addContacts = async () => {
  return <AddContacts />;
};

export default addContacts;
