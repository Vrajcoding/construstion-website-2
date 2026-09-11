import React from "react"
import SectionTag from "../../common/SectionTag"
import { siteImages } from "../../../data/siteData"

export default function AboutInstagramSection() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 border-t border-[#e7e7e7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <SectionTag
            text="FOLLOW US"
            theme="dark"
            dualLines
            className="mb-4"
          />

          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
            Follow our work <br />
            on instagram
          </h2>
        </div>

        {/* Grid Layout: 1 Large Left Image + 4 Images in 2x2 Right Grid (Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left: 1 Large Featured Architecture Photo */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden bg-neutral-900 group cursor-pointer">
            <img
              src={siteImages.ctaBuilding}
              alt="Modern building construction"
              className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-3xl">↗</span>
            </div>
          </div>

          {/* Right: 2x2 Grid of 4 Project Photos with Matching Total Height */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-8 h-[400px] sm:h-[500px] lg:h-[560px]">
            {/* Photo 1: Kitchen Renovation */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 group cursor-pointer">
              <img
                src={siteImages.project2}
                alt="Kitchen renovation"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-2xl">↗</span>
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
                <span className="text-white text-2xl">↗</span>
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
                <span className="text-white text-2xl">↗</span>
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
                <span className="text-white text-2xl">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
