import Link from "next/link";
import React from "react";

function SeeMoreButton({ title, slug }) {
  return (
    <div className="flex justify-center items-center">
      <Link href={`/Egypt/${slug}`}>
        <div className="flex justify-center items-center rounded-[10px] w-fit py-3 px-8 bg-bsPrimary md:hover:bg-bsWarning transition-all">
          <button className="text-lg font-medium text-white">{title}</button>
        </div>
      </Link>
    </div>
  );
}

export default SeeMoreButton;
