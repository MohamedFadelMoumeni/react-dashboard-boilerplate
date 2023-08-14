import React from "react";
const status = {
  1: "Réalisé",
  2: "Refusé",
  3: "En cours",
  4: "Devis communiqué",
  5: "À rappeler",
};

const bgColor = {
  Réalisé: "bg-green-500",
  Refusé: "bg-red-500",
  "En cours": "bg-yellow-500",
  "Devis communiqué": "bg-blue-500",
  "À rappeler": "bg-slate-500",
};

const TableBadge = ({ type, text }) => {
  return (
    <div
      className={`px-2 py-1 text-xs rounded-lg ${bgColor[type]} text-white font-bold`}
    >
      {text}
    </div>
  );
};

export default TableBadge;
