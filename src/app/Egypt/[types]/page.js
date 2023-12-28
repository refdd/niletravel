import HeaderPages from "@/components/headers/HeaderPages";
import React, { Suspense } from "react";
import { getData } from "../../../../utils/featchApi";
import dynamic from "next/dynamic";
import BottonInquire from "@/components/buttons/ButtonInquire";
const CardListContainer = dynamic(() =>
  import("@/components/tours/CardListContainer")
);
const ToursViews = dynamic(() => import("@/components/tours/ToursViews"));
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));

export async function generateMetadata({ params: { types }, searchParams }) {
  const pages = await getData(`/types`);
  const dataPage = pages?.data.find((page) => page.slug == types);
  return {
    title: dataPage?.meta_title,
    description: dataPage?.meta_description,
  };
}
async function ListTour({ params: { types } }) {
  const tours = await getData(`/tours?site_map_frequency=${types}`);
  const titleSlug = types?.replace(/-/g, " ");
  return (
    <div>
      <HeaderPages
        typeList={titleSlug}
        listSlug={{ title: titleSlug, slug: types }}
        singleSlug={""}
      />
      <div className="container mx-auto px-4 mt-20 md:px-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <div className="pt-5 md:col-span-2">
            <Suspense fallback={<>-----------</>}>
              <ToursViews tourNumber={tours?.data?.length} />
              <CardListContainer toursData={tours?.data} slugType={types} />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<>-----------</>}>
              <FormInquery />
            </Suspense>
          </div>
        </div>
      </div>
      <FaqSection />
      <BottonInquire />
    </div>
  );
}

export default ListTour;
