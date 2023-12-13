import React from "react";
import CardListTour from "../cards/CardListTour";

function CardListContainer({ toursData, slugType }) {
  return (
    <div className="pt-10 md:col-span-2">
      <div className="grid grid-cols-2 gap-4">
        {toursData?.map((item) => (
          <CardListTour
            key={item.id}
            imgSrc={item?.image}
            slug={item?.slug}
            slugType={slugType}
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

export default CardListContainer;
