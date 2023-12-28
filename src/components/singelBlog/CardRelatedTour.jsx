import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardRelatedTour({ imgSrc, title, destinations, slug, typeSlug }) {
  return (
    <div>
      <Link href={`/Egypt/${typeSlug}/${slug}`}>
        <div className=" grid grid-cols-3 gap-4 border-b pb-4 mt-3">
          <div className="">
            <div className="relative w-full h-[100px]">
              <Image
                alt={"related Tour"}
                title={"related Tour"}
                src={imgSrc}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={60}
                // placeholder="blur"
                // blurDataURL={modifiedImageUrl}
                className=" object-cover rounded-lg "
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl text-[#17233e]  font-bold ">{title}</h4>
              <span className="text-bsDark font-mono text-lg">
                {destinations}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardRelatedTour;
