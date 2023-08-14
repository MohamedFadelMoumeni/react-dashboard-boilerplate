import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout/index";
import authRoutes from "../routes/auth-routes";

const AuthNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        {authRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.id}
            element={route.element}
            index={route.index}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AuthNavigation;
