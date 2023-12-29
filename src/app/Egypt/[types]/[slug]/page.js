import React, { Suspense } from "react";
import { getData } from "../../../../../utils/featchApi";
import dynamic from "next/dynamic";
import HeaderSingle from "@/components/headers/HeaderSingle";
import SingelGallery from "@/components/gallery/SingelGallery";
import ProductShcemas from "@/components/shcemas/ProductShcemas";
import TouristDestinationShcemas from "@/components/shcemas/TouristDestinationShcemas";
const BottonInquire = dynamic(() =>
  import("@/components/buttons/ButtonInquire")
);
const Itinerary = dynamic(() => import("@/components/singelTour/Itinerary"));
const HighLights = dynamic(() => import("@/components/singelTour/HighLights"));
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);

async function singelTour({ params: { slug, types } }) {
  const singletour = await getData(`/tours/${slug}`);

  const {
    title,
    destinations,
    gallery,
    description,
    included,
    excluded,
    run,
    type,
    duration,
    itineraries,
    image,
  } = singletour?.data;

  // console.log(params);
  return (
    <div>
      <ProductShcemas title={title} image={image} description={description} />
      <TouristDestinationShcemas
        title={title}
        image={image}
        description={description}
        urlTour={`https://www.nilecruisez.com/Egypt/${types}/${slug}`}
      />
      <div className="container mx-auto px-4  md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-7 ">
          <div className="md:col-span-4">
            <HeaderSingle
              titel={title}
              location={`Città Che Visiterai : ${destinations} `}
              reviews={"(1,186 Recensioni)"}
            />
            <SingelGallery gallery={gallery} />

            <HighLights
              description={description}
              included={included}
              excluded={excluded}
              run={run}
              type={type}
              duration={duration}
              destinations={destinations}
            />
            <Itinerary itinerariesDays={itineraries} />
          </div>
          <div className="md:col-span-2">
            <Suspense fallback={<>-----------</>}>
              <FormInquery />
            </Suspense>
          </div>
        </div>
        <ExploreSection />
      </div>
      <BottonInquire />
    </div>
  );
}

export default singelTour;
