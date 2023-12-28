import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { AiFillCalendar, AiOutlineUser, AiFillFileText } from "react-icons/ai";
import { BiMapAlt } from "react-icons/bi";
function Lightes({ run, type, duration, destinations }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2  border  divide-x divide-y ">
      <li className=" text-bsDark p-5">
        <div className="flex gap-1  items-center">
          <MdOutlineWatchLater size={40} />
          <h6 className="text-sm md:text-lg "> {run}</h6>
        </div>
      </li>
      <li className=" text-bsDark p-5">
        <div className="flex gap-1  items-center">
          <HiUserGroup size={40} />
          <h6 className="text-sm md:text-lg  "> {type}</h6>
        </div>
      </li>
      <li className=" text-bsDark p-5">
        <div className="flex gap-1  items-center">
          <AiFillCalendar size={40} />
          <h6 className="text-sm md:text-lg  ">{duration} Days</h6>
        </div>
      </li>

      <li className=" text-bsDark p-5">
        <div className="flex gap-1  items-center">
          <BiMapAlt size={40} />
          <h6 className="text-sm md:text-lg capitalize  ">
            {" "}
            destinations : {destinations}{" "}
          </h6>
        </div>
      </li>
    </ul>
  );
}

export default Lightes;
