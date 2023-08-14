import React from "react";
import { BiChevronLeft, BiChevronRight, BiHomeAlt } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import Logo from "../../assets/logo.ico";
import NavItem from "../../components/UI/nav-item";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`hidden md:flex  ${
        open ? "w-64" : "w-20"
      } fixed top-0 bottom-0 left-0 h-screen bg-white drop-shadow-md/80 border-r-[1px] shadow-lg  `}
    >
      <div className={`w-full h-full ${open ? "p-4" : "p-3"} relative`}>
        <div className="w-full flex items-center justify-between  mb-6">
          <img src={Logo} width={60} alt="" />
          <div
            onClick={() => setOpen(!open)}
            className="w-5 h-5 bg-dark rounded-full absolute -right-2 drop-shadow-sm  flex items-center justify-center cursor-pointer"
          >
            {open ? (
              <BiChevronLeft color="white" size={16} />
            ) : (
              <BiChevronRight color="white" size={16} />
            )}
          </div>
        </div>
        <ul className="w-full">
          <NavItem
            open={open}
            icon={<BiHomeAlt size={22} />}
            title="Dashboard"
            href="/dashboard"
          />
          <NavItem
            open={open}
            icon={<BiHomeAlt size={22} />}
            title="Forms"
            href="/forms"
          />
          <NavItem
            open={open}
            icon={<CiViewTable size={22} />}
            title="Tables"
            href="/tables"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
