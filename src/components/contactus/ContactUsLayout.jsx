import React from "react";
import ContactImage from "./ContactImage";
import FormContactUs from "./FormContactUs";

function ContactUsLayout() {
  return (
    <div className="container mx-auto px-4 md:px-10 pt-7 ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <ContactImage />
        <FormContactUs />
      </div>
    </div>
  );
}

export default ContactUsLayout;
