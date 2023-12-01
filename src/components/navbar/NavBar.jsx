"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/assets/images/aet-logo.svg";
import MenuIcon from "./MenuIcon";
import dynamic from "next/dynamic";
import NavLinks from "./NavLinks";
const ListMenuBar = dynamic(() => import("./ListMenuBar"));

function NavBar() {
  const [menuBar, setMenuBar] = useState(false);

  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  const handleCloseMenu = () => {
    setMenuBar(false);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 lg:grid-cols-4 items-center py-3">
        <div className="">
          <Link href={`/`}>
            <div className="relative w-full h-[50px]">
              <Image
                alt="logo_light"
                src={logo}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={60}
                // placeholder="blur"
                // blurDataURL={logoImage}
                className="object-contain "
              />
            </div>
          </Link>
        </div>
        <div className=" col-span-2 lg:hidden">
          <MenuIcon handelMenubar={handelMenubar} />
        </div>
        <div className=" lg:col-span-3 hidden lg:block">
          <NavLinks />
        </div>
      </div>
      <ListMenuBar menuBar={menuBar} handleCloseMenu={handleCloseMenu} />
    </div>
  );
}

export default NavBar;
