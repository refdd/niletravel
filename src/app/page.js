import MainHeader from "@/components/headers/MainHeader";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const OurPartners = dynamic(() => import("@/components/partners/OurPartners"));
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
const RowsPackage = dynamic(() => import("@/components/tours/RowsPackage"));
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
      <Suspense fallback={<>-----------</>}>
        <RowsPackage />
        <FindPerfectTour />
        <Testimonials />
        <ExploreSection />
        <OurPartners />
        <FaqSection />
      </Suspense>
    </div>
  );
}

export default HomePage;
