import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function VideoExplor({ setShowvideo }) {
  return (
    <div>
      <div className="  fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  h-full bg-[#0000007a] p-4 w-full z-[1000000] ">
        <span className="cursor-pointer  absolute top-[25%] right-5 rounded-full p-3 md:right-[84px] md:top-[4%]">
          <AiFillCloseCircle
            size={30}
            color="#fff"
            onClick={() => setShowvideo(false)}
          />
        </span>
        <div className=" absolute  top-[30%] md:top-[10%] right-5 p-3 w-full   ">
          <iframe
            className=" w-full h-[299px]   ml-5 md:h-[450px]  md:m-auto md:w-[89%] "
            src="https://www.youtube.com/embed/QZFu9LxUveM"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoExplor;
