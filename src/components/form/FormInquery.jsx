import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"));
function FormInquery({ notStiky }) {
  return (
    <div
      id="inquerForm"
      style={{ boxShadow: "0 0 30px #cccccc57" }}
      className={`rounded-[10px] overflow-hidden mt-9 static ${
        notStiky ? "md:static" : "md:sticky"
      }  top-2 `}
    >
      <div className="bg-bsPrimary p-4 flex justify-center items-center ">
        <h3 className="text-white text-[21px] font-bold capitalize">
          Check Availability
        </h3>
      </div>
      <Suspense fallback={<>-----------</>}>
        <Form />
      </Suspense>
    </div>
  );
}

export default FormInquery;
