import { useContext } from "react";
import { AdminContext } from "../context/admin.context";
import AuthNavigation from "./auth-navigation";
const AppNavigation = () => {
  const { admin } = useContext(AdminContext);
  return <AuthNavigation />;
};

export default AppNavigation;
