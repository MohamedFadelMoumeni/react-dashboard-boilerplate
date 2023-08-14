import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";

const Badge = ({ color, icon }) => {
  return (
    <div
      className={`w-14 h-14 ${color} flex items-center justify-center rounded-full`}
    >
      {icon}
    </div>
  );
};

export default Badge;
