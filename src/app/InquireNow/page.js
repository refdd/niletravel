import CustomizeTourLayout from "@/components/customizeTour/CustomizeTourLayout";
import HeaderPages from "@/components/headers/HeaderPages";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title:
      "Egypt Trip Planning | Plan a Vacation to Egypt | Egypt Trip Planner",
    description:
      "Are you planning to visit Egypt We offer all that you need in Egypt, covering all cities and attractions, we will take care of all your needs Inquire now!",
  };
}
function InquireNow() {
  return (
    <div>
      <HeaderPages
        typeList={"Customize Your Tour"}
        listSlug={{ title: " Inquire Now", slug: "InquireNow" }}
        singleSlug={""}
      />
      <CustomizeTourLayout />
      <Suspense fallback={<>-----------</>}>
        <ExploreSection />
        <FaqSection />
      </Suspense>
    </div>
  );
}

export default InquireNow;
