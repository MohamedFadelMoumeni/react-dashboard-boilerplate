import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/admin.context";

const AuthLayout = () => {
  const { admin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      return navigate("/dashboard");
    }
  }, [admin]);
  return (
    <main className="w-full min-h-screen  grid grid-cols-12 ">
      <div className="w-full col-span-12 md:col-span-8 h-full  relative ">
        <div className="hidden md:flex w-full h-full col-span-12 md:col-span-4 items-center justify-center bg-gray-100">
          <img
            style={{ height: "80%", padding: 0, margin: 0 }}
            src="./Illustration.png"
          />
        </div>
      </div>
      <div className="w-full col-span-12 md:col-span-4 h-full ">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
