import React from "react";
import { getData } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
import HeaderSections from "../headers/HeaderSections";
import TapsPackagesTour from "./TapsPackagesTour";

async function RowsPackage() {
  const types = await getData("/types");
  //   console.log(types?.data[0]);
  return (
    <div className="container mx-auto px-4">
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
            // id={type.id}
            slugType={type.slug}
          />
        </section>
      ))}
    </div>
  );
}

export default RowsPackage;
