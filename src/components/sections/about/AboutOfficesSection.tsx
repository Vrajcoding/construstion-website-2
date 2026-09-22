import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { officeLocationsData } from "../../../data/siteData"

export default function AboutOfficesSection() {
  return (
    <section className="bg-[#0e0e0e] text-white py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Top-Left Stepped Decorative Grid Pattern */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionTag
            text="OUR OFFICES"
            theme="yellow"
            dualLines
            className="mb-3 sm:mb-4"
          />

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] sm:leading-[1.12]">
            Visit our offices <br />
            around the globe
          </h2>
        </div>

        {/* 3-Column Offices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-20">
          {officeLocationsData.map((office) => (
            <div
              key={office.id}
              className="group flex flex-col justify-between transition-all duration-300"
            >
              {/* Office Photo */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-neutral-900 shadow-xl rounded-none">
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content with proper light contrast on dark background */}
              <div className="pt-6 sm:pt-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location Title & Up-Right Arrow */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-bold text-white group-hover:text-[#ffd43e] transition-colors">
                      {office.title}
                    </h3>
                    <span className="text-[#ffd43e] text-2xl sm:text-3xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      ↗
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#c5c5c5] text-sm sm:text-base font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[28px]">
                    {office.description}
                  </p>
                </div>

                {/* Email Section */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <span className="block text-xs font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#ffd43e] mb-1.5 font-semibold">
                    EMAIL ADDRESS
                  </span>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-base sm:text-lg font-['Mona_Sans:Medium',sans-serif] font-bold text-white hover:text-[#ffd43e] hover:underline transition-colors"
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
