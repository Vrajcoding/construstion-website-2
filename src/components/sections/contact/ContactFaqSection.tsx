import React from "react"
import { FaqAccordion } from "../../common"
import { faqData } from "../../../data/siteData"

export default function ContactFaqSection() {
  return (
    <section className="bg-white py-[120px] sm:py-28 lg:py-[240px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 select-none mb-3 sm:mb-4">
            <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
            <span className="font-['Mona_Sans:Medium',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
              FAQS
            </span>
            <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
          </div>

          <h2 className="text-[32px] sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.15] sm:leading-[1.1] text-center">
            Frequently asked questions
          </h2>
        </div>

        {/* Shared Reusable FAQ Accordion Component */}
        <FaqAccordion items={faqData} />
      </div>
    </section>
  )
}
