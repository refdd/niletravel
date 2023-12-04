import React from "react";
import { getData } from "../../../utils/featchApi";

import HeaderSections from "../headers/HeaderSections";
import OfferSliderTours from "./OfferSliderTours";

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
