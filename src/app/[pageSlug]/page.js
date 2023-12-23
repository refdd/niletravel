import HeaderPages from "@/components/headers/HeaderPages";
import OverViewPages from "@/components/helper/OverViewPages";
import React from "react";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const Testimonials = dynamic(() =>
  import("@/components/testimonials/Testimonials")
);

const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
async function TermsAndConditions({ params: { pageSlug } }) {
  const pages = await getData(`/pages/${pageSlug}`);
  console.log(pages);
  const { title, description, slug } = pages?.data;
  return (
    <div>
      <HeaderPages
        typeList={"terms and conditions"}
        listSlug={{
          title: title,
          slug: slug,
        }}
        singleSlug={""}
      />
      <OverViewPages title={title} desc={description} />
      <Testimonials />
      <ExploreSection />
    </div>
  );
}

export default TermsAndConditions;
