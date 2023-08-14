import React, { createContext, useState } from "react";

export const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loadingUser }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
