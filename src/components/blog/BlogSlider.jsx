"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import CardBlog from "./CardBlog";
function BlogSlider({ data, slugType }) {
  return (
    <div className="mt-8">
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className="reviewSlider !pb-10"
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <CardBlog
                slugType={slugType}
                imgSrc={item.image}
                description={item?.description}
                title={item?.title}
                slug={item?.slug}
                authorImage={item?.author.image}
                authorName={item.author.name}
                metaTitle={item.meta_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* button */}
      {/* <div className=" flex justify-end ">
        <Link href={`${slugType}`}>
          <div className=" relative flex justify-center items-center w-fit py-2.5 h-12 px-8 bg-primaryColor text-white font-bold  rounded-lg  group">
            <button className="z-10"> Ver Mais</button>
            <div className="absolute top-0 left-0 w-full h-full bg-bsSeccand rounded-lg z-[1] scale-y-0 buttonPlanAnimation group-hover:scale-y-100 "></div>
          </div>
        </Link>
      </div> */}
    </div>
  );
}

export default BlogSlider;
