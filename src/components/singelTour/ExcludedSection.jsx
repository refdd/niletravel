import React from "react";

function ExcludedSection({ excluded }) {
  return (
    <div className=" bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
      <div className="flex flex-col pl-4">
        <h6 className="text-2xl text-[#17233e]  capitalize  my-3">Excluded</h6>
        {/* <ul className="felx flex-col gap-5 text-bsDark">
          <li className="flex gap-2 my-3 items-center ">
            {" "}

          </li> */}
        <div
          className="textEditor"
          dangerouslySetInnerHTML={{ __html: excluded ? excluded : "" }}
        />
        {/* <li className="flex gap-2 my-3 items-center ">
            {" "}
            <GrFormClose size={24} color="#777" /> 3 Nights Hotel
            Accomodation
          </li>
          <li className="flex gap-2 my-3 items-center ">
            {" "}
            <GrFormClose size={24} color="#777" /> Tour Guide
          </li>
          <li className="flex gap-2 my-3 items-center ">
            {" "}
            <GrFormClose size={24} color="#777" /> Entrance Fees
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default ExcludedSection;
