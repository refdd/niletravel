import React from "react";
import dynamic from "next/dynamic";
const ExpolorContent = dynamic(() => import("./ExpolorContent"));
const ExpolorVideo = dynamic(() => import("./ExpolorVideo"));
function ExploreSection() {
  return (
    <div className=" container mx-auto mt-20 px-4 py-14 bg-[#fff]">
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-[10px] overflow-hidden ">
        <ExpolorContent />
        <ExpolorVideo />
      </div>
    </div>
  );
}

export default ExploreSection;
