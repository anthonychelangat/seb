"use server";

import AddSocials from "@/components/AddSocials";
import AddTour from "@/components/AddTour";
import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";

const addSocials = async () => {
  return <AddSocials />;
};

export default addSocials;
