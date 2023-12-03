import Link from "next/link";
import React from "react";

function Breadcrumb({ listSlug, slug, pageWithHeader }) {
  return (
    <div className={` py-4 ${pageWithHeader ? " mt-2" : "mt-24 "}`}>
      <ul className="flex items-center justify-center flex-wrap gap-3 text-base  font-medium ">
        <li className="text-white md:hover:text-bsPrimary transition-all  cursor-pointer text-2xl ">
          <Link href={`/`}>
            <span>Home</span>
          </Link>
        </li>
        <li className="text-white md:hover:text-bsPrimary transition-all  cursor-pointer text-2xl ">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </li>
        <li className="text-white md:hover:text-bsPrimary transition-all  cursor-pointer text-2xl ">
          <Link href={`/${listSlug.slug}`}>
            <span>{listSlug.title}</span>
          </Link>
        </li>
        <li className="text-white md:hover:text-bsPrimary transition-all  cursor-pointer text-2xl ">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </li>
        <li className="text-white md:hover:text-bsPrimary transition-all  cursor-pointer text-2xl ">
          <span className="">{slug}</span>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
