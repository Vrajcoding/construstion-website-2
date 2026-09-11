import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import FaqAccordion from "../../common/FaqAccordion"
import { faqData } from "../../../data/siteData"

export default function AboutFaqSection() {
  return (
    <section className="bg-[#0e0e0e] text-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Top-Left Stepped Decorative Grid Pattern */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <SectionTag
            text="FAQS"
            theme="light"
            dualLines
            className="mb-4 sm:mb-6"
          />

          <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
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
