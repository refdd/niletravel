import React from "react";

function IncludedPrice({ included }) {
  return (
    <div className="bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
      <div className="flex flex-col pl-4">
        <h6 className="text-2xl text-[#17233e]  capitalize  my-3">Includes</h6>
        <div
          className="text-bsDark text-xl textEditor"
          dangerouslySetInnerHTML={{ __html: included ? included : "" }}
        />
      </div>
    </div>
  );
}

export default IncludedPrice;
