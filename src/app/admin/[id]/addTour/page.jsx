"use server";

import AddTour from "@/components/AddTour";
import { getUserByEmail } from "@/lib/actions";
import { auth } from "@/lib/auth";

const addTours = async () => {
  const session = await auth();
  const email = session?.user?.email;
  const user = await getUserByEmail(email);
  const [id] = user.map(u => u.id);

  return <AddTour id={id} />;
};

export default addTours;
