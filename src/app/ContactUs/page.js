import HeaderPages from "@/components/headers/HeaderPages";
import HeaderSectionPages from "@/components/headers/HeaderSectionPages";
import dynamic from "next/dynamic";
import React from "react";
const ContactUsLayout = dynamic(() =>
  import("@/components/contactus/ContactUsLayout")
);
const ContactInfo = dynamic(() => import("@/components/contactus/ContactInfo"));
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
function ContactUs() {
  return (
    <div>
      <HeaderPages
        typeList={"CONTACT US"}
        listSlug={{ title: " CONTACT US", slug: "ContactUs" }}
        singleSlug={""}
      />
      <div className="container mx-auto px-4 md:px-10">
        <HeaderSectionPages
          title={"INFORMATION ABOUT US"}
          desc={
            "Around Egypt Tours Is A Young Innovative Travel Company Yet Matured And Experienced. Founded In 2005, Around Egypt Tours Has Made A Considerable Impact On The Egyptian Tourism Sector By Promoting Egypt As One Of The Fascinating Destinations In The World."
          }
        />
        <ContactInfo />
        <ContactUsLayout />
      </div>

      <ExploreSection />
    </div>
  );
}

export default ContactUs;
