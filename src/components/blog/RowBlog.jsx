import React from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";
import SeeMoreButton from "../buttons/SeeMoreButton";
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
const BlogSlider = dynamic(() => import("./BlogSlider"));
async function RowBlog({ title, partOne, partTwo, decs, seeMoreSlug }) {
  const posts = await getData("/posts?limit=4");

  return (
    <div className=" container mx-auto mt-20 px-4">
      <HeaderSections
        title={title}
        partOne={partOne}
        partTwo={partTwo}
        decs={decs}
      />
      <BlogSlider data={posts?.data} />
      <SeeMoreButton title={"See More"} slug={`${seeMoreSlug}`} />
    </div>
  );
}

export default RowBlog;
