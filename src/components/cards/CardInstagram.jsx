import Image from "next/image";
import React from "react";

function CardInstagram({ imgSrc }) {
  return (
    <div>
      <div className="relative w-full h-[150px] rounded-[10px] overflow-hidden">
        <Image
          alt={"CardInstagram"}
          title={"CardInstagram"}
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-cover rounded-[10px] md:hover:scale-105 transition-all "
        />
      </div>
    </div>
  );
}

export default CardInstagram;
