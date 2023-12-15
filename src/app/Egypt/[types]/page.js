import HeaderPages from "@/components/headers/HeaderPages";
import React, { Suspense } from "react";
import { getData } from "../../../../utils/featchApi";
import dynamic from "next/dynamic";
const CardListContainer = dynamic(() =>
  import("@/components/tours/CardListContainer")
);
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
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
  // console.log(tours?.data);
  return (
    <div>
      <HeaderPages
        typeList={"Egypt tours"}
        listSlug={{ title: types, slug: types }}
        singleSlug={""}
      />
      <div className="container mx-auto px-4 mt-28 md:px-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <Suspense fallback={<>-----------</>}>
            <CardListContainer toursData={tours?.data} slugType={types} />
          </Suspense>

          <div>
            <Suspense fallback={<>-----------</>}>
              <FormInquery />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTour;
