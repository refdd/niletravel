import React from "react";
import { FaUsersCog, FaHandHoldingUsd } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";

function SearchContent() {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h4 className="text-4xl font-bold text-bsPrimary   ">
          Get To Know Us{" "}
        </h4>
        <h1 className=" text-2xl text-center font-bold capitalize text-bsDark md:text-3xl ">
          Explore All that Egypt has to offer With Us.
        </h1>
        <p className="text-center text-lg leading-8 text-bsGray  ">
          Mix your Nile Cruise from Luxor to Aswan with a joyful trip in Cairo
          and Red Sea Relaxation; enjoying the exceptional ambiance & relishing
          our authentic Egyptian and international cuisine.
        </p>
        <ul className="flex flex-wrap gap-4 justify-center items-center mt-5">
          <li className="flex gap-1 items-center text-bsGray">
            <FaUsersCog className="text-bsPrimary text-xl" />
            Tour Guide
          </li>
          <li className="flex gap-1 items-center text-bsGray ">
            <FaHandHoldingUsd className="text-bsPrimary text-xl" />
            Budget prices
          </li>{" "}
          <li className="flex gap-1 items-center  text-bsGray ">
            <FaRegFolderClosed className="text-bsPrimary text-xl" />
            Reliable Tour Package
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchContent;
