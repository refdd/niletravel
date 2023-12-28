"use client";
import React from "react";
import CardListTour from "../cards/CardListTour";
import { useSelector } from "react-redux";

function CardListContainer({ toursData, slugType }) {
  const viewTour = useSelector((state) => state.tourView?.value);

  return (
    <div className="pt-5">
      <div
        className={`grid  grid-cols-1 ${
          viewTour ? "md:grid-cols-2" : "md:grid-cols-1"
        } gap-4`}
      >
        {toursData?.map((item) => (
          <CardListTour
            key={item.id}
            imgSrc={item?.image}
            slug={item?.slug}
            slugType={slugType}
            destinations={item.destinations}
            tourType={item.type}
            metaTitle={item.meta_title}
            duration={item?.duration}
            title={item?.title}
            price={item?.start_price}
            description={item?.overview?.substring(0, 120)}
            viewTour={viewTour}
          />
        ))}
      </div>
    </div>
  );
}

export default CardListContainer;
