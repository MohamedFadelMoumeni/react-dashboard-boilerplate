import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ icon, open, title, href }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;
  return (
    <Link to={href} className="w-full">
      <li
        className={` ${
          isActive && "bg-dark  text-white shadow-lg"
        } w-full flex items-center  ${
          open ? "justify-start" : "justify-center"
        } space-x-3 px-3 py-2 cursor-pointer rounded-lg`}
      >
        {icon}
        {open && (
          <p
            className={`text-[15px] ${
              isActive ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            {title}
          </p>
        )}
      </li>
    </Link>
  );
};

export default NavItem;
