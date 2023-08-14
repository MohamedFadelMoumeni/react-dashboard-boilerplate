import React from "react";

const Login = React.lazy(() => import("../pages/Login"));
const Forgotpassword = React.lazy(() => import("../pages/forgot-password"));

export default [
  {
    id: "login",
    element: <Login />,
    index: true,
  },
  {
    id: "Forgotpassword",
    element: <Forgotpassword />,
    path: "/forgot-password",
  },
  {
    id: "every_route",
    element: <Login />,
    path: "*",
  },
];
