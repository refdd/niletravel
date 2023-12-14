import React from "react";

function IncludedSction({ included }) {
  return (
    <div className=" bg-[#e6eef5]  rounded-lg md:rounded-t-lg p-4 ">
      <div className="flex flex-col pl-4">
        <h6 className="text-2xl text-[#17233e] font-playfair capitalize  my-3">
          Included
        </h6>
        {/* <ul className="felx flex-col gap-5 text-[#777]">
          <li className="flex gap-2 my-3 items-center ">
            {" "}

          </li> */}
        <div
          className="textEditor"
          dangerouslySetInnerHTML={{ __html: included ? included : "" }}
        />
        {/* <li className="flex gap-2 my-3 items-center ">
            {" "}
            <BsCheckLg /> 3 Nights Hotel Accomodation
          </li>
          <li className="flex gap-2 my-3 items-center ">
            {" "}
            <BsCheckLg /> Tour Guide
          </li>
          <li className="flex gap-2 my-3 items-center ">
            {" "}
            <BsCheckLg /> Entrance Fees
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default IncludedSction;
