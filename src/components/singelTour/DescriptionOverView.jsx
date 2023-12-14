import React from "react";

function DescriptionOverView({ description }) {
  return (
    <div className="flex flex-col gap-2 ">
      <h5 className="text-3xl text-[#17233e] font-semibold  font-playfair capitalize  my-3 md:text-4xl ">
        Description
      </h5>
      <p className="text-[#777] text-lg font-playfair capitalize  leading-7"></p>

      <div
        dangerouslySetInnerHTML={{ __html: description ? description : "" }}
        className="textEditor"
      />
    </div>
  );
}

export default DescriptionOverView;
