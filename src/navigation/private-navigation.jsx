import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../layouts/private-layout/index";
import privateRoutes from "../routes/private-routes";

const PrivateNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        {privateRoutes.map((route) => (
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

export default PrivateNavigation;
