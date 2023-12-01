import React from "react";

function TapsSelected({ handleClick, activeIndex, allcategories }) {
  return (
    <ul className="flex items-center justify-center gap-4 flex-wrap mt-5">
      {allcategories?.length > 1 &&
        allcategories?.map((category, index) => (
          <li
            onClick={() => {
              handleClick(index);
            }}
            key={category?.id}
            className={`rounded-[10px] p-4 border border-[#f1f1f1f1]   hover:text-white hover:bg-bsPrimary cursor-pointer transition-all flex justify-center items-center ${
              activeIndex == index
                ? "bg-bsPrimary text-white"
                : "bg-white text-bsDark"
            }`}
          >
            <span className="text-base ">{category?.title}</span>
          </li>
        ))}
    </ul>
  );
}

export default TapsSelected;
