import Image from "next/image";
import Link from "next/link";
import React from "react";
import imageReviews from "../../../public/assets/images/travel2.png";
function ImageReviews() {
  return (
    <div className="py-10 md:py">
      <Link href={"/"}>
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            alt={"Reviews"}
            title={"Reviews"}
            src={imageReviews}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            // placeholder="blur"
            // blurDataURL={modifiedImageUrl}
            className=" object-contain "
          />
        </div>
      </Link>
    </div>
  );
}

export default ImageReviews;
