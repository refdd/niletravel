import React from "react";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const OfferSliderTours = dynamic(() => import("./OfferSliderTours"));
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
async function RowsOffers() {
  const tours = await getData("/tours");

  return (
    <div className=" container mx-auto mt-20 px-4">
      <HeaderSections
        title={"Top Offers"}
        partOne={" Egypt Special"}
        partTwo={" Offers & Discount Packages"}
        decs={""}
      />
      <OfferSliderTours toursData={tours?.data} />
    </div>
  );
}

export default RowsOffers;
