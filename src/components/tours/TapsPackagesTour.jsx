"use client";
import React, { useEffect, useState } from "react";
import TapsSelected from "./TapsSelected";
import SeeMoreButton from "../buttons/SeeMoreButton";
import ToursSlider from "./ToursSlider";

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
      <ToursSlider toursData={tours} slugType={slugType} />
      <SeeMoreButton title={"See More"} slug={slugType} />
    </div>
  );
}

export default TapsPackagesTour;
