import React from "react"
import SectionTag from "../../common/SectionTag"
import { siteImages } from "../../../data/siteData"

function InstagramHoverIcon({ size = "md" }: { size?: "lg" | "md" }) {
  const iconSize =
    size === "lg"
      ? "w-10 h-10 sm:w-12 sm:h-12"
      : "w-7 h-7 sm:w-8 sm:h-8"
  return (
    <svg
      className={`${iconSize} text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function AboutInstagramSection() {
  return (
    <section className="bg-white py-[120px] sm:py-20 lg:py-56 border-t border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <SectionTag
            text="FOLLOW US"
            theme="dark"
            dualLines
            textClassName="text-[14px] sm:text-[16px]"
            className="mb-4"
          />

          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.1]">
            Follow our work <br />
            on instagram
          </h2>
        </div>

        {/* Grid Layout: 1 Large Left Image + 4 Images in 2x2 Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left: 1 Large Featured Architecture Photo (aspect-square on mobile) */}
          <div className="relative w-full aspect-square sm:aspect-[16/10] lg:aspect-auto lg:h-[560px] overflow-hidden bg-neutral-900 group cursor-pointer">
            <img
              src={siteImages.ctaBuilding}
              alt="Modern building construction"
              className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <InstagramHoverIcon size="lg" />
            </div>
          </div>

          {/* Right: 2x2 Grid of 4 Project Photos with Matching Square Total Aspect on Mobile */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 aspect-square sm:aspect-[16/10] lg:aspect-auto lg:h-[560px]">
            {/* Photo 1: Kitchen Renovation */}
            <div className="card-image-wrap relative w-full h-full bg-[#0e0e0e] group cursor-pointer">
              <img
                src={siteImages.project2}
                alt="Kitchen renovation"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="card-image-shadow" />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <InstagramHoverIcon size="md" />
              </div>
            </div>

            {/* Photo 2: Structural Concrete & Framing */}
            <div className="card-image-wrap relative w-full h-full bg-[#0e0e0e] group cursor-pointer">
              <img
                src={siteImages.testimonialStructure}
                alt="Framing and construction machinery"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="card-image-shadow" />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <InstagramHoverIcon size="md" />
              </div>
            </div>

            {/* Photo 3: Interior Architecture */}
            <div className="card-image-wrap relative w-full h-full bg-[#0e0e0e] group cursor-pointer">
              <img
                src={siteImages.blog2}
                alt="Interior architecture"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="card-image-shadow" />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <InstagramHoverIcon size="md" />
              </div>
            </div>

            {/* Photo 4: High Ceiling Living Space */}
            <div className="card-image-wrap relative w-full h-full bg-[#0e0e0e] group cursor-pointer">
              <img
                src={siteImages.project3}
                alt="High ceiling living space"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="card-image-shadow" />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <InstagramHoverIcon size="md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
