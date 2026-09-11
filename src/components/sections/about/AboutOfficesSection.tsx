import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { officeLocationsData } from "../../../data/siteData"

export default function AboutOfficesSection() {
  return (
    <section className="bg-[#0e0e0e] text-white pt-24 sm:pt-32 pb-44 sm:pb-52 lg:pb-60 relative overflow-visible">
      {/* Top-Left Stepped Decorative Grid Pattern */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionTag
            text="OUR OFFICES"
            theme="yellow"
            dualLines
            className="mb-4"
          />

          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.1]">
            Visit our offices <br />
            around the globe
          </h2>
        </div>

        {/* 3-Column Offices Cards Grid (With Top Margin & Negative Bottom Margin for graceful overhang) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-16 sm:mt-20 lg:mt-24 -mb-96 sm:-mb-[440px] lg:-mb-[500px] relative z-20">
          {officeLocationsData.map((office) => (
            <div
              key={office.id}
              className="group flex flex-col justify-between transition-all duration-300"
            >
              {/* Office Photo (Tall Proper Rectangle) */}
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden bg-neutral-900 shadow-xl rounded-none">
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content (Directly below photo on page background, no white box) */}
              <div className="pt-6 sm:pt-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location Title & Up-Right Arrow */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] group-hover:text-neutral-700 transition-colors">
                      {office.title}
                    </h3>
                    <span className="text-[#0e0e0e] text-2xl sm:text-3xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      ↗
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#646464] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[26px] sm:leading-[28px]">
                    {office.description}
                  </p>
                </div>

                {/* Email Section */}
                <div className="pt-6 mt-6">
                  <span className="block text-[13px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#888888] mb-1.5 font-semibold">
                    EMAIL ADDRESS
                  </span>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-[17px] sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] hover:underline"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
