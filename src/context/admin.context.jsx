import React, { createContext, useEffect, useState } from "react";

export const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    const adminData = localStorage.getItem("userData");
    if (adminData) {
      setAdmin(JSON.parse(adminData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(admin));
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loadingUser }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
