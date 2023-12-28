"use client";
import { changeView } from "@/redux/tourViewSlice";
import React from "react";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

function ToursViews({ tourNumber }) {
  const viewTour = useSelector((state) => state.tourView?.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row gap-3  justify-center items-center ">
      <p className=" text-center md:text-left md:pl-2  text-xl text-bsDark  capitalize">
        showing {tourNumber} tours
      </p>
      <div className="flex gap-3 w-[60%] md:w-auto justify-center items-center">
        <span
          className={
            viewTour
              ? " hidden md:block cursor-pointer text-bsDark "
              : " hidden md:block  cursor-pointer text-white bg-[#ffc107] rounded-sm  "
          }
          onClick={() => {
            dispatch(changeView());
          }}
        >
          <BsList size={30} />{" "}
        </span>
        <span
          className={
            viewTour
              ? " hidden md:block  cursor-pointer text-white bg-[#ffc107] rounded-sm p-1 "
              : " hidden md:block  cursor-pointer text-bsDark"
          }
          onClick={() => {
            dispatch(changeView());
          }}
        >
          <BsFillGrid3X3GapFill size={30} />{" "}
        </span>
      </div>
    </div>
  );
}

export default ToursViews;
