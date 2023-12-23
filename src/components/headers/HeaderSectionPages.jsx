import React from "react";

function HeaderSectionPages({ title, desc }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#17233e]  text-3xl capitalize text-center font-bold">
          {title}
        </h1>
        <p className="text-[#777] text-lg  capitalize text-center">{desc}</p>
      </div>
    </div>
  );
}

export default HeaderSectionPages;
