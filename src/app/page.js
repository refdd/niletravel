import HeaderSections from "@/components/headers/HeaderSections";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { getData } from "../../utils/featchApi";
// import RowsPackage from "@/components/tours/RowsPackage";
// import RowsOffers from "@/components/offers/RowsOffers";
// import FindPerfectTour from "@/components/perfectTour/FindPerfectTour";
// import Testimonials from "@/components/testimonials/Testimonials";
// import RowBlog from "@/components/blog/RowBlog";
// import ExploreSection from "@/components/explore/ExploreSection";
// import OurPartners from "@/components/partners/OurPartners";
// import FaqSection from "@/components/FaqSection/FaqSection";
// const RowBlog = dynamic(() => import("@/components/blog/RowBlog"));
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const OurPartners = dynamic(() => import("@/components/partners/OurPartners"));
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
// const RowBlog = dynamic(() => import("@/components/blog/RowBlog"));
const ToursSlider = dynamic(() => import("@/components/tours/ToursSlider"));
const MainHeader = dynamic(() => import("@/components/headers/MainHeader"));
// const RowsOffers = dynamic(() => import("@/components/offers/RowsOffers"));
const Testimonials = dynamic(() =>
  import("@/components/testimonials/Testimonials")
);
const FindPerfectTour = dynamic(() =>
  import("@/components/perfectTour/FindPerfectTour")
);
async function HomePage() {
  const tours = await getData("/tours?limit=7");
  return (
    <div>
      <MainHeader />
      <Suspense fallbac={<>-----------</>}>
        {/* <SearchSection /> */}
        <div className="pt-20">
          <HeaderSections
            title={""}
            decs={
              "Best-Selected Egypt Tour Packages. Choose from wide range of Egypt Travel Packages & get the chance to experience all that Egypt has to offer. Book Today!"
            }
            partOne={"Egypt Tour "}
            partTwo={"Packages"}
          />
          <ToursSlider toursData={tours?.data} slugType={""} />
        </div>
        <div className="pt-20">
          <HeaderSections
            title={""}
            decs={
              "Best-Selected Egypt Tour Packages. Choose from wide range of Egypt Travel Packages & get the chance to experience all that Egypt has to offer. Book Today!"
            }
            partOne={"Egypt Tour "}
            partTwo={"Packages"}
          />
          <ToursSlider toursData={tours?.data} slugType={""} />
        </div>
        {/* <RowsOffers /> */}
        <FindPerfectTour />
        <Testimonials />
        {/* <RowBlog /> */}

        <ExploreSection />
        <OurPartners />
        <FaqSection />
      </Suspense>
    </div>
  );
}

export default HomePage;
