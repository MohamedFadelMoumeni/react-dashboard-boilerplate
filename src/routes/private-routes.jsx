import React from "react";

const Dashboard = React.lazy(() => import("../pages/statistics"));
const Tables = React.lazy(() => import("../pages/tables"));
const Forms = React.lazy(() => import("../pages/forms"));
export default [
  {
    id: "dashboard",
    element: <Dashboard />,
    index: true,
  },
  {
    id: "tables",
    element: <Tables />,
    path: "tables",
  },
  {
    id: "forms",
    element: <Forms />,
    path: "forms",
  },
  {
    id: "every_route",
    element: <Dashboard />,
    path: "*",
  },
];
