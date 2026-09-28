import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import FaqAccordion from "../../common/FaqAccordion"
import { faqData } from "../../../data/siteData"

export default function AboutFaqSection() {
  return (
    <section className="bg-[#0e0e0e] text-white py-[120px] sm:py-20 lg:py-56 relative overflow-hidden">
      {/* Top-Left Stepped Decorative Grid Pattern */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <SectionTag
            text="FAQS"
            theme="light"
            dualLines
            textClassName="text-[14px] sm:text-[16px]"
            className="mb-4 sm:mb-6"
          />

          <h2 className="text-[32px] sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] lg:leading-[1.1] max-w-3xl mx-auto">
            Frequently <br />
            asked questions
          </h2>
        </div>

        {/* Reusable Dark Theme Accordion */}
        <FaqAccordion items={faqData} theme="dark" />
      </div>
    </section>
  )
}
