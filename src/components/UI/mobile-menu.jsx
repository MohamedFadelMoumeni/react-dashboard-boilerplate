import React from "react";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const MobileMenu = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="md:hidden py-8 px-3 space-y-4 overflow-y-auto flex flex-col items-center "
      size={"100%"}
    >
      <div className="w-full flex items-center justify-end">
        <GrClose size={20} color="black" onClick={toggleDrawer} />
      </div>
      <Link className="text-lg cursor-pointer" to={"/dashboard"}>
        Dashboard
      </Link>
      <Link className="text-lg cursor-pointer" to={"/devis-auto"}>
        Devis Auto
      </Link>
      <Link className="text-lg cursor-pointer" to={"/autre-devis"}>
        Autre Devis
      </Link>
      <Link className="text-lg cursor-pointer" to={"/reclamation"}>
        Réclamations
      </Link>
      <Link className="text-lg cursor-pointer" to={"/contacts"}>
        Contacts
      </Link>
    </Drawer>
  );
};

export default MobileMenu;
