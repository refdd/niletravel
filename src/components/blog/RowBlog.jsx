import React from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";
import SeeMoreButton from "../buttons/SeeMoreButton";
import HeaderSections from "../headers/HeaderSections";
import BlogSlider from "./BlogSlider";

async function RowBlog() {
  const posts = await getData("/posts?limit=5");

  return (
    <div className=" container mx-auto mt-20 px-4">
      <HeaderSections
        title="Our Travel Guide"
        partOne="Recent"
        partTwo="Articles & Posts"
        decs="Best Places to visit, Things to do, Food to Eat and all what you need to know before visiting Egypt."
      />
      <BlogSlider data={posts?.data} />
      <SeeMoreButton title={"See More"} slug={"/"} />
    </div>
  );
}

export default RowBlog;
