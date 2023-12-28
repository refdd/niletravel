import React from "react";
import { FaCheck } from "react-icons/fa6";

function OverviewThankYou({ title, body }) {
  return (
    <div className=" container mx-auto  px-4 my-10">
      <div className="flex flex-col gap-5 md:gap-8 md:w-[60%] md:mx-auto justify-center items-center p-5 md:p-10 bg-[#faf5ee] rounded-lg ">
        <div className="w-11 h-11 bg-green-600 rounded-full flex justify-center items-center">
          <FaCheck className="text-2xl text-white" />
        </div>
        <div className="">
          <p className=" text-2xl md:text-4xl lg:text-6xl font-bold text-colorDark text-center">
            {title}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: body ? body : "",
          }}
          className="text-base text-[#3d3d3d]  textEditor"
        ></div>
      </div>
    </div>
  );
}

export default OverviewThankYou;
