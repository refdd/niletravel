import React from "react";

import CardTour from "../cards/CardTour";
function ToursSlider({ toursData, slugType }) {
  //   console.log(toursData);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-10">
        {toursData?.slice(0, 4)?.map((item) => (
          <div key={item?.id}>
            <CardTour
              imgSrc={item?.image}
              slug={item?.slug}
              slugType={item?.site_map_frequency}
              metaTitle={item.meta_title}
              duration={item?.duration}
              title={item?.title}
              price={item?.start_price}
              description={item?.overview?.substring(0, 120)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToursSlider;
