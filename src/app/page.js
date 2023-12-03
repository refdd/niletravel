import MainHeader from "@/components/headers/MainHeader";
import SearchSection from "@/components/search/SearchSection";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
const OurPartners = dynamic(() => import("@/components/partners/OurPartners"));
const RowBlog = dynamic(() => import("@/components/blog/RowBlog"));
const RowsPackage = dynamic(() => import("@/components/tours/RowsPackage"));
const RowsOffers = dynamic(() => import("@/components/offers/RowsOffers"));
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
      <Suspense fallback={<>...</>}>
        <RowsPackage />
        <RowsOffers />
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
