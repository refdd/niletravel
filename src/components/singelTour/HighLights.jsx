import React from "react";
import IncludedSction from "./IncludedSction";
import ExcludedSection from "./ExcludedSection";
import Lightes from "./Lightes";
import DescriptionOverView from "./DescriptionOverView";
function HighLights({
  description,
  run,
  type,
  duration,
  destinations,
  included,
  excluded,
}) {
  return (
    <div className="">
      <DescriptionOverView description={description} />
      {/*  */}
      <div className="pt-4">
        <Lightes
          run={run}
          type={type}
          duration={duration}
          destinations={destinations}
        />
      </div>
      <div className=" pt-12">
        <div className=" flex flex-col gap-4   ">
          <IncludedSction included={included} />
          <ExcludedSection excluded={excluded} />
        </div>
      </div>
    </div>
  );
}

export default HighLights;
