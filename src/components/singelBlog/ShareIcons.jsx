"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ShareIcons({ blogSlug, subSlug }) {
  return (
    <div className="pt-6 mb-5">
      <div className="news-details__social-list space-x-3">
        <p className="text-xl font-bold text-bsDark">Share Icons</p>
        <span className="group cursor-pointer ">
          <TwitterShareButton
            url={`https://www.nilecruisez.com/egypt-travel-blog/${blogSlug}`}
          >
            <FaXTwitter className=" text-bsDark text-2xl group-hover:text-white" />
          </TwitterShareButton>
        </span>
        <span className="group cursor-pointer">
          <FacebookShareButton
            url={`https://www.nilecruisez.com/egypt-travel-blog/${blogSlug}`}
          >
            <FaFacebook className=" text-bsDark text-2xl group-hover:text-white" />
          </FacebookShareButton>
        </span>

        <span className="group cursor-pointer">
          <WhatsappShareButton
            url={`https://www.nilecruisez.com/egypt-travel-blog/${blogSlug}`}
            title={
              "next-share is a social share buttons for your next React apps."
            }
            separator=":: "
          >
            <FaWhatsapp className=" text-bsDark text-2xl group-hover:text-white" />
          </WhatsappShareButton>
        </span>
      </div>
    </div>
  );
}

export default ShareIcons;
