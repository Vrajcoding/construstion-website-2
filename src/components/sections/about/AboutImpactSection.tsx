import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { siteImages, statsData } from "../../../data/siteData"

export default function AboutImpactSection() {
  return (
    <section
      id="impact-numbers"
      className="bg-white pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 relative z-10"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Tag on Left, Descriptive Paragraph on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline */}
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="NUMBERS" theme="dark" />
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08]">
              Our impact in <br className="hidden sm:inline" />
              numbers
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div className="max-w-[440px] lg:pb-3">
            <p className="text-[#646464] text-[17px] sm:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur non sit elementum sem libero
              a tellus id pretium nisi posuere consectetur eu.
            </p>
          </div>
        </div>

        {/* Full-Width Construction Rooftop Photo */}
        <div className="mt-12 sm:mt-16 relative w-full h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden bg-neutral-900 shadow-md">
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
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 items-start justify-between">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-start">
                <span className="text-5xl sm:text-6xl lg:text-[76px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[#646464] text-base sm:text-[18px] lg:text-[20px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-[24px] sm:leading-[28px] pt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtle Divider Line */}
          <div className="mt-14 sm:mt-20 h-px bg-[#e7e7e7] w-full" />
        </div>
      </div>
    </section>
  )
}
