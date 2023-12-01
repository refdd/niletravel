import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
function MenuIcon({ handelMenubar }) {
  return (
    <div onClick={handelMenubar} className="flex justify-end">
      <AiOutlineMenu className="text-black text-2xl cursor-pointer" />
    </div>
  );
}

export default MenuIcon;
