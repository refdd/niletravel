import React from "react";
import CardRelatedTour from "./CardRelatedTour";

function RelatedTour({ relatedTous }) {
  return (
    <div className="">
      <div className="flex justify-center items-center py-3 px-3 bg-bsPrimary my-5 rounded-md">
        <span className="text-white">Retated Tour</span>
      </div>
      <div className=" grid grid-cols-1 gap-5">
        {relatedTous.map((item) => (
          <CardRelatedTour
            key={item?.id}
            title={item?.title}
            destinations={item.destinations}
            imgSrc={item?.image}
            slug={item?.slug}
            typeSlug={item?.site_map_frequency}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedTour;
