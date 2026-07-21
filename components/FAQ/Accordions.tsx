"use client";

import { ChevronDown } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  faq: FAQ;
  open: boolean;
  onToggle: () => void;
}

export default function Accordion({ faq, open, onToggle }: AccordionProps) {
  return (
    <div className="my-3 w-full rounded-md border font-bangla">
      <button
        onClick={onToggle}
        className="flex w-full items-center border-b md:border-none rounded-md justify-between px-4 py-3.5"
      >
        <h3 className="text-[17px] font-medium md:text-xl ">{faq.question}</h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-4 md:pt-0 md:text-[18px]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
