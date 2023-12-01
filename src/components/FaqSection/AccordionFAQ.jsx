"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

const questions = [
  {
    id: 1,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "L'Egitto è rinomato come destinazione di viaggio sicura grazie alla sua reputazione di lunga data in materia di sicurezza. La natura accogliente e gentile del popolo egiziano infonde nei visitatori un senso di comfort e sicurezza simile a quello di casa.Con le dovute precauzioni e preparazioni, i viaggiatori possono esplorare e apprezzare in tutta sicurezza diverse città egiziane. Secondo le statistiche, il tasso di criminalità è molto basso, soprattutto nelle zone turistiche. Per chiunque voglia scoprire la terra dei faraoni, un viaggio in Egitto e Crociera sul Nilo sono l'opzione ideale.",
  },
  {
    id: 2,
    question: "Quali sono i tipi di hotel disponibili in Egitto?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori. You Should Avoid Photographing Local People Specially Women. Binoculars Should Not Be Brought Into Saudi Arabia And May Be Confiscated At The Port Of Entry.",
  },
  {
    id: 3,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori..",
  },
  {
    id: 4,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori.",
  },
];
function AccordionFAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="">
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqData?.map((q, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className=" group rounded-[10px] py-[14px] px-5 border h-fit border-[#f1f1f1] cursor-pointer md:hover:bg-bsPrimary transition-all"
          >
            <button className=" flex items-center justify-between pl-1 w-full">
              <h2 className=" text-[#666] text-base font-medium group-hover:text-white transition-all ">
                {q.question}
              </h2>
              <div className="">
                <div
                  className={` w-6 h-6 rounded-full flex justify-center items-center ${
                    activeIndex === index
                      ? "text-bsPrimary bg-white"
                      : "text-white bg-bsPrimary"
                  } `}
                >
                  <TiPlus className="font-bold" />
                </div>
              </div>
            </button>
            {activeIndex === index && (
              <div
                dangerouslySetInnerHTML={{
                  __html: q.answer ? q.answer : "",
                }}
                className="mt-4 text-base text-[#666] group-hover:text-white textEditor"
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionFAQ;
