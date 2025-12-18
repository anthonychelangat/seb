import { authOptions } from "@/app/api/auth/[...nextauth]";
import NavItem from "@/components/placesNav/NavItem";
import { getRoles, getUserByEmail } from "@/lib/actions";
import { getServerSession } from "next-auth";

const PlacesNav = async () => {
  const roles = await getRoles();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ? session?.user?.email : "tony@gmail.com";

  const users = await getUserByEmail(email);
  const [id] = users.map(u => u.id);
  return (
    <div>
      <NavItem items={roles} id={id} />
    </div>
  );
};
export default PlacesNav;
