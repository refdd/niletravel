import MainHeader from "@/components/headers/MainHeader";
import SearchSection from "@/components/search/SearchSection";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"), {
  ssr: false,
});
const OurPartners = dynamic(() => import("@/components/partners/OurPartners"), {
  ssr: false,
});
const RowBlog = dynamic(() => import("@/components/blog/RowBlog"), {
  ssr: false,
});
const RowsPackage = dynamic(() => import("@/components/tours/RowsPackage"), {
  ssr: false,
});
const RowsOffers = dynamic(() => import("@/components/offers/RowsOffers"), {
  ssr: false,
});
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
      {/* <SearchSection /> */}
      <Suspense fallback={<div>...</div>}>
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
