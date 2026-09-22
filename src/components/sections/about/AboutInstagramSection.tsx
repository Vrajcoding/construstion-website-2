import React from "react"
import SectionTag from "../../common/SectionTag"
import { siteImages } from "../../../data/siteData"

export default function AboutInstagramSection() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 border-t border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <SectionTag
            text="FOLLOW US"
            theme="dark"
            dualLines
            className="mb-4"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
            Follow our work <br />
            on instagram
          </h2>
        </div>

        {/* Grid Layout: 1 Large Left Image + 4 Images in 2x2 Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left: 1 Large Featured Architecture Photo */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px] overflow-hidden bg-neutral-900 group cursor-pointer">
            <img
              src={siteImages.ctaBuilding}
              alt="Modern building construction"
              className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Right: 2x2 Grid of 4 Project Photos with Matching Total Height */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px]">
            {/* Photo 1: Kitchen Renovation */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 group cursor-pointer">
              <img
                src={siteImages.project2}
                alt="Kitchen renovation"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* Photo 2: Structural Concrete & Framing */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 group cursor-pointer">
              <img
                src={siteImages.testimonialStructure}
                alt="Framing and construction machinery"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* Photo 3: Interior Architecture */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 group cursor-pointer">
              <img
                src={siteImages.blog2}
                alt="Interior architecture"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* Photo 4: High Ceiling Living Space */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 group cursor-pointer">
              <img
                src={siteImages.project3}
                alt="High ceiling living space"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
