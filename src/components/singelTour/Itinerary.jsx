import React from "react";
import ItineraryDays from "./ItineraryDays";
function Itinerary({ itinerariesDays }) {
  return (
    <div id="Itinerary" className=" mt-5 flex flex-col gap-8">
      {itinerariesDays?.map((item) => (
        <div key={item?.id}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col ">
              <h2 className="text-2xl  md:text-[34px]  text-colorDark font-bold ">
                {item.title}
              </h2>
              <div
                className="textEditor mt-3"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
          <ItineraryDays daysItinerary={item.days} />
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
