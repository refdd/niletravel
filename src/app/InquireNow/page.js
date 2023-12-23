import CustomizeTourLayout from "@/components/customizeTour/CustomizeTourLayout";
import HeaderPages from "@/components/headers/HeaderPages";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));

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
