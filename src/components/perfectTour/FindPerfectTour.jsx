import React from "react";
import dynamic from "next/dynamic";
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
const PerfectTourContainer = dynamic(() => import("./PerfectTourContainer"));
function FindPerfectTour() {
  return (
    <div className=" container mx-auto mt-20 px-4">
      <HeaderSections
        title="4 Steps Of The Perfect Tour"
        partOne="find"
        partTwo="Travel Perfection"
        decs=""
      />
      <PerfectTourContainer />
    </div>
  );
}

export default FindPerfectTour;
