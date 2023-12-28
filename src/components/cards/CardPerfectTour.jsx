import React from "react";

function CardPerfectTour({ Icon, title, description }) {
  return (
    <div>
      <div className=" group  wrapper flex flex-col gap-5  justify-center items-center p-7 overflow-hidden rounded-xl border bg-white ">
        <div className="z-10">
          <Icon className="  text-7xl duration-1000 group-hover:text-white text-[#029e9d]" />
        </div>
        <h3 className="text-2xl text-[#17233e] font-bold z-10 duration-1000 group-hover:text-white  ">
          {title}
        </h3>
        <p className="text-center text-bsDark z-10 duration-1000 group-hover:text-white ">
          {description}
        </p>
        <div className="w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  "></div>
      </div>
    </div>
  );
}

export default CardPerfectTour;
