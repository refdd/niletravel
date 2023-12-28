"use client";
import { SeeMoreItem } from "@/redux/seeMoreSlice";
import React from "react";
import { useDispatch } from "react-redux";

function ButtonLoadMore() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center my-10 ">
      <div
        onClick={() => {
          dispatch(SeeMoreItem());
        }}
        className="flex justify-center items-center rounded-[10px] w-fit py-3 px-8 bg-bsPrimary md:hover:bg-bsWarning transition-all"
      >
        <button className="text-lg font-medium text-white">See More</button>
      </div>
    </div>
  );
}

export default ButtonLoadMore;
