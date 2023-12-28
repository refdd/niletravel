import React from "react";
import CardTour from "../cards/CardTour";

function RelatedTour({ relatedTous }) {
  return (
    <div className="">
      <div className="flex justify-center items-center py-4 px-3 bg-bsPrimary my-5 ">
        <span className="text-white  text-2xl font-bold">Retated Tour</span>
      </div>
      <div className=" grid grid-cols-1 gap-5 md:gap-10">
        {relatedTous.map((item) => (
          <CardTour
            key={item?.id}
            imgSrc={item?.image}
            slug={item?.slug}
            slugType={item?.site_map_frequency}
            metaTitle={item.meta_title}
            duration={item?.duration}
            title={item?.title}
            price={item?.start_price}
            description={item?.overview?.substring(0, 120)}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedTour;
