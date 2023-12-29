import MainHeader from "@/components/headers/MainHeader";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { getData } from "../../utils/featchApi";
import CarouselShcmas from "@/components/shcemas/CarouselShcmas";
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
export async function generateMetadata({ params, searchParams }) {
  const metaDesc = await getData("/settings?name=meta_description");
  const metaTitle = await getData("/settings?name=meta_title");
  return {
    title: metaTitle?.data[0]?.value,
    description: metaDesc?.data[0]?.value,
  };
}
function HomePage() {
  return (
    <div>
      <CarouselShcmas />
      <MainHeader />
      <Suspense fallback={<>-----------</>}>
        {/* <SearchSection /> */}
        <RowsPackage />
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
