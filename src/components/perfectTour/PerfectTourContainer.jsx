import React from "react";
import dynamic from "next/dynamic";
import { TbHandClick } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
const CardPerfectTour = dynamic(() => import("../cards/CardPerfectTour"));
function PerfectTourContainer() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
      <CardPerfectTour
        Icon={TbHandClick}
        title={"Choose Your Trip"}
        description={
          "  Choose, customize or just tell us about your perfect trip"
        }
      />
      <CardPerfectTour
        Icon={MdOutlineSupportAgent}
        title={" Get Matched"}
        description={
          "  Our local travel specialist will build your perfect itinerary."
        }
      />
      <CardPerfectTour
        Icon={FiEdit}
        title={" Edit & Personalize"}
        description={
          "  Choose, customize or just tell us about your perfect trip"
        }
      />
      <CardPerfectTour
        Icon={GiPayMoney}
        title={" Book And Pay"}
        description={"   Pay and book when you re happy with the itinerary."}
      />
    </div>
  );
}

export default PerfectTourContainer;
