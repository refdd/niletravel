import React from "react";
import { getData } from "../../../utils/featchApi";
import HeaderSections from "../headers/HeaderSections";
import AccordionFAQ from "./AccordionFAQ";

async function FaqSection() {
  const faqs = await getData("/faqs?limit=6");

  return (
    <div className=" container mx-auto mt-20 px-4 pb-20">
      <HeaderSections
        title="FAQ"
        partOne="Frequently Asked"
        partTwo="Questions"
        decs="Below are some of the frequently asked questions and their answers, hopefully, you will find what questions you are looking for."
      />
      <AccordionFAQ faqData={faqs?.data} />
    </div>
  );
}

export default FaqSection;
