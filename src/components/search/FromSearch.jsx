"use client";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import TypeSelected from "@/components/helper/TypeSelected";

function FromSearch() {
  const [name, setName] = useState("");
  const [TourType, setTourType] = useState(null);
  // handle buget slected
  const handleTourTypeChange = (newValue) => {
    setTourType(newValue);
  };
  return (
    <div className="py-6 px-5">
      <div className=" grid grid-cols-1 gap-5 ">
        <div className="">
          <TextField
            id="search-field"
            label="Type Your Search Query"
            variant="outlined"
            type="text"
            required
            fullWidth
            onChange={(event) => {
              setName(event.target.value);
            }}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px !important ",
            }}
          />
        </div>
        <div className="">
          <TypeSelected value={TourType} onChange={handleTourTypeChange} />
        </div>
        <div className="">
          <button
            type="submit"
            className=" w-full text-xl text-white bg-[#029e9d] hover:bg-gradient-to-r  duration-700 hover:from-[#fdc703] hover:to-[#fdc703] hover:bg-right focus:ring-4 focus:outline-none transition-all focus:ring-blue-300 font-medium rounded-lg px-5 py-5"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FromSearch;
