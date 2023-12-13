import HeaderPages from "@/components/headers/HeaderPages";
import React from "react";
import SingelGallery from "@/components/gallery/SingelGallery";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
const ToursSlider = dynamic(() => import("@/components/tours/ToursSlider"));
const OverViews = dynamic(() => import("@/components/singelTour/OverViews"));
const HeaderSingle = dynamic(() => import("@/components/headers/HeaderSingle"));
const HeaderSections = dynamic(() =>
  import("@/components/headers/HeaderSections")
);

async function DestinationPage() {
  const egyptPage = await getData("/destinations/1");
  const tours = await getData("/tours?limit=7");

  return (
    <div>
      <HeaderPages
        typeList={"Egypt tours"}
        listSlug={{ title: "Egypt", slug: "Egypt" }}
        singleSlug={""}
      />
      <HeaderSingle titel={"Egpyt tours"} />
      <div className="container mx-auto px-4 md:px-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
          <div className="  md:col-span-4">
            <SingelGallery gallery={egyptPage?.data?.gallery} />
            <OverViews
              description={egyptPage?.data?.description}
              included={egyptPage?.data?.included}
              excluded={egyptPage?.data?.excluded}
            />
          </div>
          <div className="  md:col-span-2">
            <FormInquery />
          </div>
        </div>
        {/* related tour */}
        <div className="pt-20">
          <HeaderSections
            title={""}
            decs={""}
            partOne={"Related"}
            partTwo={"Tour"}
          />
          <ToursSlider toursData={tours?.data} slugType={""} />
        </div>
        <ExploreSection />
      </div>
    </div>
  );
}

export default DestinationPage;
