import React from "react";
import HeaderSections from "../headers/HeaderSections";
import HeaderAboutus from "./HeaderAboutus";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function AboutusContent() {
  return (
    <div>
      <HeaderAboutus
        title="Get To Know Us"
        partOne="Explore All Tours Of"
        partTwo=" Egypt The World With Us."
      />
      <div className="flex flex-col justify-center items-center gap-4 border-y py-3">
        <p className="text-[#777] text-lg leading-7   capitalize text-center">
          Around Egypt Tours is a young innovative travel company yet matured
          and experienced. Founded in 2005, Around Egypt Tours has made a
          considerable impact on the Egyptian tourism sector by promoting Egypt
          as one of the fascinating destinations in the world.
        </p>
        <p className="text-[#777] text-lg  capitalize text-center">
          Due to the excellent services provided by Around Egypt Tours, it
          becomes an active member in:
        </p>
        <ul className="flex flex-col gap-2 list-disc">
          <li className="text-[#777] text-lg  capitalize text-center md:text-left ">
            The Egyptian Travel Agent Association “ETAA”
          </li>
          <li className="text-[#777] text-lg  capitalize text-center md:text-left ">
            The American Society of Travel Agents “ASTA”
          </li>
          <li className="text-[#777] text-lg  capitalize text-center md:text-left ">
            The International Association of Travel and Tourism “IATT”
          </li>
          <li className="text-[#777] text-lg  capitalize text-center md:text-left ">
            The International Organization for E – Tourism “ IOET”
          </li>
        </ul>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center items-center mt-5">
        <li className="flex gap-1 items-center text-[#777]">
          <CiLocationOn className="text-bsSuccess" />
          Tour Guide
        </li>
        <li className="flex gap-1 items-center text-[#777] ">
          <AiOutlineDollarCircle className="text-bsSuccess" />
          Budget prices
        </li>
        <li className="flex gap-1 items-center  text-[#777] ">
          <BsFolderCheck className="text-bsSuccess" />
          Reliable Tour Package
        </li>
      </ul>
    </div>
  );
}

export default AboutusContent;
