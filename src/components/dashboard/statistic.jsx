import React from "react";
import StatsCard from "./statistic-card";
import { IoMdPaper } from "react-icons/io";
import { FiUsers, FiPaperclip } from "react-icons/fi";

const Statistic = () => {
  return (
    <div className="w-full py-6 px-8 bg-white rounded-lg">
      <h1 className="text-gray-700 text-lg font-medium">Statistiques</h1>
      <div className="pb-4 w-full flex flex-col md:flex-row md:items-center  justify-center md:justify-start md:space-x-28 space-y-6 md:space-y-0 mt-10">
        <StatsCard
          color="bg-red-200/50"
          icon={<IoMdPaper size={24} className="text-red-600" />}
          title="Autre Devis"
          collectionKey="devis"
          href="/autre-devis"
        />
        <StatsCard
          color="bg-orange-200/50"
          icon={<IoMdPaper size={24} className="text-orange-600" />}
          title="Devis Auto"
          collectionKey="autredevis"
          href="/devis-auto"
        />
        <StatsCard
          color="bg-green-200/50"
          icon={<FiPaperclip size={24} className="text-green-600" />}
          title="Réclamation"
          collectionKey="reclamations"
          href="/reclamation"
        />
        <StatsCard
          color="bg-blue-200/50"
          icon={<FiUsers size={24} className="text-blue-600" />}
          title="Contacts"
          collectionKey="contact"
          href="/contacts"
        />
      </div>
    </div>
  );
};

export default Statistic;
