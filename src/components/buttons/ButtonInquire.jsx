"use client";
import React, { useEffect, useState } from "react";

function BottonInquire() {
  const [showBottom, setshowBottom] = useState(true);

  const scrollToInquerForm = () => {
    const inquerForm = document.getElementById("inquerForm");
    if (inquerForm) {
      window.scrollTo({
        top: inquerForm.offsetTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        setshowBottom(false);
      }, 1000);
    }
  };

  const handleScroll = () => {
    const inquerForm = document.getElementById("inquerForm");
    if (inquerForm) {
      const rect = inquerForm.getBoundingClientRect();
      const isScrolledToInquerForm = rect.top >= 0 && rect.top <= 994;
      setshowBottom(!isScrolledToInquerForm);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        showBottom
          ? "md:hidden fixed bottom-0 container mx-auto z-50  "
          : " hidden"
      }
    >
      <div className="flex justify-center items-center py-4 bg-bsPrimary rounded-t-lg">
        <button
          className="twark text-2xl text-white font-sans  py-1 px-8 rounded-lg font-medium"
          onClick={scrollToInquerForm}
        >
          inquire now{" "}
        </button>
      </div>
    </div>
  );
}

export default BottonInquire;
