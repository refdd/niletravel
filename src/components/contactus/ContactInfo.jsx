import React from "react";
import CardContactInfo from "../cards/CardContactInfo";
import { CiLocationOn } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

function ContactInfo() {
  return (
    <div className="pt-7">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <CardContactInfo
          Icon={CiLocationOn}
          title={"Office Location"}
          desc={
            "39 Zohair Sabry St., Branched From, El Tayaran St, Nasr City, Cairo Governorate 11765"
          }
        />
        <CardContactInfo
          Icon={BiPhone}
          title={"Phone Number"}
          desc={"+20127 770 8751"}
        />
        <CardContactInfo
          Icon={BiEnvelope}
          title={" Email Address"}
          desc={"sales@aroundegypttours.com"}
        />
      </div>
    </div>
  );
}

export default ContactInfo;
