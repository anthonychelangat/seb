import NavItem from "@/components/placesNav/NavItem";
import { allCountries, getRoles } from "@/lib/actions";

const PlacesNav = async () => {
  const roles = await getRoles();
  return (
    <div>
      <NavItem items={roles} />
    </div>
  );
};
export default PlacesNav;
