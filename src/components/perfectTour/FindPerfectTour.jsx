import React from "react";
import dynamic from "next/dynamic";
import HeaderSections from "../headers/HeaderSections";
import PerfectTourContainer from "./PerfectTourContainer";

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
