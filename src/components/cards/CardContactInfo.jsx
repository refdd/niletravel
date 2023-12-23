import React from "react";

function CardContactInfo({ Icon, title, desc }) {
  return (
    <div className="flex flex-col  gap-4 justify-center items-center border p-3 rounded-lg md:flex-1 ">
      <Icon className="text-bsPrimary text-8xl" />
      <h2 className="text-xl  text-[#17233e] capitalize font-semibold">
        {" "}
        {title}
      </h2>
      <p className="text-center text-[#777]  capitalize leading-7">{desc}</p>
    </div>
  );
}

export default CardContactInfo;
