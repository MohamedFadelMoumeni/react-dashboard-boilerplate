import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/admin.context";
import Header from "./header";
import Sidebar from "./sidebar";

const PrivateLayout = () => {
  const [open, setOpen] = useState(true);
  const { admin } = useContext(AdminContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, [admin]);
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-gray-100">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`min-h-screen container-layout ${
          open
            ? "w-full md:w-[calc(100%_-_15rem)] ml-0 md:ml-64 "
            : "ml-20 md:w-[calc(100%_-_5rem)]"
        } relative p-2 md:px-6 md:py-4`}
      >
        <div className="w-full ">
          <Header />
        </div>
        <div className="w-full ">
          <Outlet />
        </div>

        <p className="mt-8 text-sm">
          COPYRIGHT © 2022 Lyazidi, All rights Reserved
        </p>
      </div>
    </main>
  );
};

export default PrivateLayout;
