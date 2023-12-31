import React from "react";

function CounterSection() {
  return (
    <div className="container mx-auto px-4 md:px-10 shadow-md rounded-md md:w-[70%] mt-5">
      <div className="flex flex-col md:flex-row justify-center items-start gap-3 divide-y md:divide-y-0 md:divide-x  ">
        <div className="flex flex-col gap-3  w-full  p-4  ">
          <h6 className="text-7xl text-[#029e9d] font-mono font-bold  text-left">
            18
          </h6>
          <p className="text-bsDark text-left text-lg ">Years Experiences</p>
        </div>
        <div className="flex flex-col gap-3  w-full  p-4 ">
          <h6 className="text-7xl text-[#029e9d] font-mono font-bold  text-left">
            39
          </h6>
          <p className="text-bsDark text-left text-lg ">Tour Packages</p>
        </div>
        <div className="flex flex-col gap-3  w-full p-4  ">
          <h6 className="text-7xl text-[#029e9d] font-mono font-bold  text-left">
            3320
          </h6>
          <p className="text-bsDark text-left text-lg ">Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
