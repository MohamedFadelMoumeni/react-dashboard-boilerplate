import { useContext } from "react";
import { AdminContext } from "../context/admin.context";
import AuthNavigation from "./auth-navigation";
import PrivateNaigation from "./private-navigation";
const AppNavigation = () => {
  const { admin } = useContext(AdminContext);
  return admin ? <PrivateNaigation /> : <AuthNavigation />;
};

export default AppNavigation;
