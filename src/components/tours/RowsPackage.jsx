import React from "react";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const ToursSlider = dynamic(() => import("./ToursSlider"));
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
async function RowsPackage() {
  const tours = await getData("/tours?limit=4");
  //   console.log(types?.data[0]);
  return (
    <div className="container mx-auto px-4">
      <HeaderSections
        title={""}
        decs={"type.description"}
        partOne={""}
        partTwo={"type.title"}
      />
      <ToursSlider toursData={tours?.data} />
    </div>
  );
}

export default RowsPackage;
