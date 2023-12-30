import TextField from "@mui/material/TextField";
import React from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import dynamic from "next/dynamic";
// const ChildAgesFiled = dynamic(() => import("./ChildAgesFiled"));
function CounterTraveller({
  adults,
  childrens,
  handleRemoveCounter,
  handleAddCounter,
  childAges,
  handleAddChild,
  handleRemoveChild,
  handleChildAgeChange,
}) {
  return (
    <div className=" col-span-2 ">
      <div className=" grid grid-cols-2 gap-3 ">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <ImMan className="text-2xl text-bsSuccess" />
            <span className="text-sm text-[#555]   font-medium"> adults</span>
          </div>
          <div className="relative ">
            <div
              onClick={() => {
                handleAddCounter("adults");
              }}
              className="text-bsPrimary text-2xl cursor-pointer absolute top-[30%] left-2 z-20"
            >
              <BsPersonAdd />{" "}
            </div>
            <TextField
              required
              type="tel"
              variant="outlined"
              value={adults}
              fullWidth
              sx={{ backgroundColor: "#fff", zIndex: 10 }}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <div
              onClick={() => {
                handleRemoveCounter("adults");
              }}
              className="text-bsPrimary text-2xl cursor-pointer absolute top-[30%] right-2 z-20"
            >
              <MdOutlinePersonRemoveAlt1 />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaChild className="text-2xl text-bsSuccess" />
            <span className="text-sm text-[#555]   font-medium">
              {" "}
              childrens
            </span>
          </div>
          <div className="relative">
            <div
              onClick={() => {
                handleAddChild();
              }}
              className="text-bsPrimary text-2xl cursor-pointer absolute top-[30%] left-2 z-20"
            >
              <BsPersonAdd />{" "}
            </div>
            <TextField
              required
              fullWidth
              type="tel"
              variant="outlined"
              value={childrens}
              sx={{ backgroundColor: "#fff", zIndex: 10 }}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <div
              onClick={() => {
                handleRemoveChild("childs");
              }}
              className="text-bsPrimary text-2xl cursor-pointer absolute top-[30%] right-2 z-20"
            >
              <MdOutlinePersonRemoveAlt1 />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* <ChildAgesFiled
        childAges={childAges}
        handleChildAgeChange={handleChildAgeChange}
      /> */}
    </div>
  );
}

export default CounterTraveller;
