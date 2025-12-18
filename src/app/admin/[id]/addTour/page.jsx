import { authOptions } from "@/app/api/auth/[...nextauth]";
import AddTour from "@/components/AddTour";
import { getUserByEmail } from "@/lib/actions";
import { getServerSession } from "next-auth";

const addTours = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ? session?.user?.email : "tony@gmail.com";
  const user = await getUserByEmail(email);
  const [id] = user.map(u => u.id);

  return <AddTour id={id} />;
};

export default addTours;
