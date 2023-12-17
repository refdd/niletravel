import React from "react";
import dynamic from "next/dynamic";
const IncludedPrice = dynamic(() => import("./IncludedPrice"));
const ExcludedPrice = dynamic(() => import("./ExcludedPrice"));
function OverViews({ description, excluded, included }) {
  return (
    <div className="flex flex-col gap-5">
      {/* <h4 className="my-5 text-3xl  font-bold text-[#17233e] ">
        Description
      </h4>
      <div
        className="text-[#777] text-xl textEditor"
        dangerouslySetInnerHTML={{ __html: description ? description : "" }}
      /> */}
      <IncludedPrice included={included} />
      <ExcludedPrice excluded={excluded} />
    </div>
  );
}

export default OverViews;
