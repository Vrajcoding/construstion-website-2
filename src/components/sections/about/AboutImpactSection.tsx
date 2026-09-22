import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { siteImages, statsData } from "../../../data/siteData"

export default function AboutImpactSection() {
  return (
    <section
      id="impact-numbers"
      className="bg-white py-14 sm:py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Tag on Left, Descriptive Paragraph on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <SectionTag text="NUMBERS" theme="dark" />
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
              Our impact in <br className="hidden sm:inline" />
              numbers
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div className="max-w-[440px] lg:pb-2">
            <p className="text-[#646464] text-base sm:text-lg font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur non sit elementum sem
              libero a tellus id pretium nisi posuere consectetur eu.
            </p>
          </div>
        </div>

        {/* Full-Width Construction Rooftop Photo */}
        <div className="mt-8 sm:mt-12 relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[240px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-neutral-900 shadow-md">
          <img
            src={siteImages.roofBanner}
            alt="Workers building and repairing house roof with scaffolding"
            className="w-full h-full object-cover grayscale contrast-105"
          />
          {/* Top-Left Stepped Decorative Accent */}
          <div className="absolute top-0 left-0 z-10 pointer-events-none">
            <DecorativeGrid pattern="top-left" fillColor="white" />
          </div>
        </div>

        {/* 4-Column Metric Statistics */}
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-start justify-between">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[#646464] text-sm sm:text-base lg:text-lg font-['Mona_Sans:Regular',sans-serif] font-normal leading-snug sm:leading-[26px] pt-2 sm:pt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtle Divider Line */}
          <div className="mt-10 sm:mt-16 h-px bg-[#e7e7e7] w-full" />
        </div>
      </div>
    </section>
  )
}
