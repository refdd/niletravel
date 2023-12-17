import React from "react";

function ExcludedPrice({ excluded }) {
  return (
    <div className="bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
      <div className="flex flex-col pl-4">
        <h6 className="text-2xl text-[#17233e]  capitalize  my-3">Excluded</h6>
        <div
          className="text-[#777] text-xl textEditor"
          dangerouslySetInnerHTML={{ __html: excluded ? excluded : "" }}
        />
      </div>
    </div>
  );
}

export default ExcludedPrice;
