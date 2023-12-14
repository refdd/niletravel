import HeaderPages from "@/components/headers/HeaderPages";
import CardListContainer from "@/components/tours/CardListContainer";
import React from "react";
import { getData } from "../../../../utils/featchApi";
import dynamic from "next/dynamic";
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));

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
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <CardListContainer toursData={tours?.data} slugType={types} />
          <div>{/* <FormInquery /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default ListTour;
