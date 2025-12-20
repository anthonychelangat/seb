import { getAbout } from "@/lib/actions";
import React from "react";

const GenerateMetaData = async () => {
  const about = await getAbout();

  return {
    title: "Seb Expeditions" || "About Us",
    description: about.about || "Learn more about us.", // ← Picked from database!
    openGraph: {
      title: "Seb Expeditions" || "About Us",
      description: about.about || "Learn more about us.",
    },
  };
};

export default GenerateMetaData;
