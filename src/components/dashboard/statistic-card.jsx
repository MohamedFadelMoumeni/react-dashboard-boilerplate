import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../UI/badge";

const StatsCard = ({ color, icon, title, collectionKey, href }) => {
  const [count, setCount] = useState(0);

  return (
    <Link to={href}>
      <div className="flex items-center space-x-3">
        <Badge icon={icon} color={color} />
        <div className="flex flex-col">
          <p className="text-2xl font-bold">{count}</p>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </Link>
  );
};
export default StatsCard;
