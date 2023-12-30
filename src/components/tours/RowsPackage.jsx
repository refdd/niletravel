import React from "react";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const TapsPackagesTour = dynamic(() => import("./TapsPackagesTour"));
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
async function RowsPackage() {
  const types = await getData("/types");
  //   console.log(types?.data[0]);
  return (
    <div className="container mx-auto px-4 pt-10">
      {types?.data?.map((type) => (
        <section key={type.id} className=" pt-20  ">
          <HeaderSections
            title={""}
            decs={type.description}
            partOne={""}
            partTwo={type.title}
          />
          <TapsPackagesTour
            allcategories={type.categories}
            slugType={type.slug}
          />
        </section>
      ))}
    </div>
  );
}

export default RowsPackage;
