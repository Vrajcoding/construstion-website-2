import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { siteImages, statsData } from "../../../data/siteData"

export default function AboutImpactSection() {
  return (
    <section
      id="impact-numbers"
      className="bg-white py-[120px] sm:py-20 lg:py-56 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Tag on Left, Descriptive Paragraph on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline (62px on large display) */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <SectionTag text="OUR NUMBERS" theme="dark" textClassName="text-[14px] sm:text-[16px]" />
            <h2 className="text-[32px] sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
              Our impact in <br className="hidden sm:inline" />
              numbers
            </h2>
          </div>

          {/* Right: Paragraph (18px on large display) */}
          <div className="max-w-[440px] lg:pb-2">
            <p className="text-[#646464] text-base sm:text-lg lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur non sit elementum sem
              libero a tellus id pretium nisi posuere consectetur eu.
            </p>
          </div>
        </div>

        {/* Full-Width Construction Rooftop Photo (Decreased height on large display to fit properly) */}
        <div className="mt-8 sm:mt-12 relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-[360px] min-h-[240px] sm:min-h-[380px] lg:min-h-0 overflow-hidden bg-neutral-900 shadow-md">
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

        {/* 4-Column Metric Statistics (82px numbers, 24px labels on large display) */}
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-start justify-between">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[#646464] text-[16px] sm:text-base lg:text-[24px] lg:leading-[32px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-snug sm:leading-[26px] pt-2 sm:pt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtle Divider Line (hidden on mobile to remove border bottom) */}
          <div className="hidden sm:block mt-10 sm:mt-16 h-px bg-[#e7e7e7] w-full" />
        </div>
      </div>
    </section>
  )
}
