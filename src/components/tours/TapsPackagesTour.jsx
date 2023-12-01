"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const SeeMoreButton = dynamic(() => import("../buttons/SeeMoreButton"));
const TapsSelected = dynamic(() => import("./TapsSelected"));
const ToursSlier = dynamic(() => import("./ToursSlier"));
function TapsPackagesTour({ allcategories, slugType }) {
  //   console.log(allcategories);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tours, setTours] = useState([]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setTours(allcategories[index]?.tours);
  };
  useEffect(() => {
    setTours(allcategories[activeIndex]?.tours);
  }, []);
  //   console.log(tours);
  return (
    <div>
      <TapsSelected
        handleClick={handleClick}
        activeIndex={activeIndex}
        allcategories={allcategories}
      />
      <ToursSlier toursData={tours} slugType={slugType} />
      <SeeMoreButton title={"See More"} slug={slugType} />
    </div>
  );
}

export default TapsPackagesTour;
