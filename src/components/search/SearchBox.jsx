import React from "react";
import dynamic from "next/dynamic";
const FromSearch = dynamic(() => import("./FromSearch"));

function SearchBox() {
  return (
    <div className="md:-mt-20">
      <div className=" bg-[#fff] rounded-lg drop-shadow-xl  flex flex-col gap-5 ">
        <div className="rounded-t-lg bg-bsPrimary ">
          <p className="text-center text-white p-4 text-2xl  ">
            Find your Trip!
          </p>
        </div>
        <FromSearch />
      </div>
    </div>
  );
}

export default SearchBox;
