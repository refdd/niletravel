import React from "react";
import HeaderSectionPages from "../headers/HeaderSectionPages";
import dynamic from "next/dynamic";
const FormCustomizeTour = dynamic(() => import("./FormCustomizeTour"));
function CustomizeTourLayout() {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <HeaderSectionPages
        title={"Egypt Trip Planner"}
        desc={
          "Jot Down Your Answers In The Form Below, Describe Your Need And Personal Data, And One Of Our Travel Experts Will Plan Your Personal Egypt Trip And Get Back To You In Under 24 Hours."
        }
      />
      <FormCustomizeTour />
    </div>
  );
}

export default CustomizeTourLayout;
