import React from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";

const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
const PartnersSlider = dynamic(() => import("./PartnersSlider"));
async function OurPartners() {
  const partners = await getData("/partners");

  return (
    <div className="bg-[#e6eef5] py-6">
      <div className=" container mx-auto mt-20 px-4">
        <HeaderSections
          title="Our Partners"
          partOne="Our "
          partTwo="Partners"
          decs=""
        />
        <PartnersSlider data={partners?.data} />
      </div>
    </div>
  );
}

export default OurPartners;
