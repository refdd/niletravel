import React from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";
import HeaderSections from "../headers/HeaderSections";
import PartnersSlider from "./PartnersSlider";

async function OurPartners() {
  const partners = await getData("/partners");

  return (
    <div className="bg-[#e6eef5] py-6">
      <div className=" container mx-auto mt-20 px-4">
        <HeaderSections
          title="Our Partners"
          partOne="Our Partners"
          partTwo="Partners"
          decs=""
        />
        <PartnersSlider data={partners?.data} />
      </div>
    </div>
  );
}

export default OurPartners;
