import React from "react";

function HeaderSections({ title, partOne, partTwo, decs }) {
  return (
    <div className="flex flex-col gap-4 md:gap-10 justify-center items-center">
      <h4 className="text-xl font-medium capitalize text-bsWarning -mb-6">
        {" "}
        {title}{" "}
      </h4>
      <h2 className="text-3xl md:text-[58px] font-bold capitalize text-center">
        {" "}
        {partOne} <span className="text-[#029e9d]"> {partTwo}</span>{" "}
      </h2>
      <div className="text-center text-bsSecondary">
        <div dangerouslySetInnerHTML={{ __html: decs }} />
      </div>
    </div>
  );
}

export default HeaderSections;
