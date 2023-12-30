import Link from "next/link";
import React from "react";

function ExpolorContent() {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-4 bg-[#029e9d]  py-10 px-3 md:h-full ">
        <h4 className="text-xl text-[#fff] text-center font-bold  capitalize  md:text-2xl md:text-left ">
          Best Selling Program in Egypt
        </h4>
        <h2
          className="text-2xl  font-bold capitalize
             text-[#fdc703] text-center md:text-3xl md:leading-[3.5rem] md:font-extrabold  md:text-left "
        >
          Cairo, Nile Cruise and Hurghada
        </h2>

        <p className=" text-[#fff] leading-6 text-center md:text-left">
          Explore the Historical Cairo, Sail the Nile from Luxor to Aswan, and
          relax on the red sea beaches. Travel Where You Want, we are ready to
          help!
        </p>
        <p className=" hidden lg:block text-[#fff] leading-6 text-center md:text-left">
          Explore the top sights of Egypt and do it all in a 12-day trip. Start
          in Cairo and visit the Pyramids of Giza, the Egyptian Museum, Khan El
          Khalili, and more. Fly to Aswan to see more. Stay on board a Nile
          Cruise and explore the majestic attractions of Egypt between Aswan and
          Luxor. End your tour with a relaxing time on Hurghada beaches in the
          Red Sea.
        </p>
        <Link href={"/Egypt/egypt-tour-packages/egypt-vacation-package"}>
          <div className="  group flex justify-center items-center  md:justify-start ">
            <button
              style={{ background: "#17233e" }}
              className=" wrapper  group-hover:text-white  px-5 py-3 rounded-2xl z-10 text-white overflow-hidden  "
            >
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
              read more
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ExpolorContent;
