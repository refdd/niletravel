import MainHeader from "@/components/headers/MainHeader";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
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
const RowBlog = dynamic(() => import("@/components/blog/RowBlog"));
// const RowsPackage = dynamic(() => import("@/components/tours/RowsPackage"));
// const RowsOffers = dynamic(() => import("@/components/offers/RowsOffers"));
const Testimonials = dynamic(() =>
  import("@/components/testimonials/Testimonials")
);
const FindPerfectTour = dynamic(() =>
  import("@/components/perfectTour/FindPerfectTour")
);
function HomePage() {
  return (
    <div>
      <MainHeader />
      <Suspense fallbac={<>-----------</>}>
        {/* <SearchSection /> */}
        {/* <RowsPackage /> */}
        {/* <RowsOffers /> */}
        <FindPerfectTour />
        <Testimonials />
        <RowBlog />

        <ExploreSection />
        <OurPartners />
        <FaqSection />
      </Suspense>
    </div>
  );
}

export default HomePage;
