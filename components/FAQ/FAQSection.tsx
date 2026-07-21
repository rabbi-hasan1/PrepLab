"use client";
import { useState } from "react";
import Buttons from "../common/button";
import Accordion from "./Accordions";
import faqDatas from "./FAQdata";

function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <section id="faq" className="w-full py-10 -mt-5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col justify-center gap-3 md:gap-5 text-center mb-8">
          <Buttons>FAQs</Buttons>
          <h1 className="text-3xl md:text-5xl  select-none font-semibold  mx-auto">
            Most Common Questions From Our Students
          </h1>
        </div>
        {faqDatas.map((faq) => (
          <Accordion
            key={faq.id}
            faq={faq}
            open={openId === faq.id}
            onToggle={() =>
              setOpenId((prev) => (prev === faq.id ? null : faq.id))
            }
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
