import React from "react"
import SectionTag from "../common/SectionTag"
import DecorativeGrid from "../common/DecorativeGrid"
import { servicesPageData } from "../../data/siteData"

import {
  iconPlanning,
  iconManagement,
  iconContracting,
  iconInterior,
  iconExterior,
  iconSpace,
} from "../../assets"

// Service Line-art Icons bundled with Vite
const serviceIcons: Record<string, string> = {
  planning: iconPlanning,
  management: iconManagement,
  contracting: iconContracting,
  interior: iconInterior,
  exterior: iconExterior,
  space: iconSpace,
}

export interface ServicesPageProps {
  onSelectService?: (title: string) => void
  onOpenQuote?: () => void
}

export default function ServicesPage({ onSelectService }: ServicesPageProps) {
  return (
    <div className="relative bg-[#f4f4f4] min-h-screen pt-[80px] pb-[160px] sm:pt-24 sm:pb-36 lg:pt-[160px] lg:pb-[320px] overflow-hidden">
      {/* Top-right signature 2x2 geometric grid accent: 1 -> top-left, 2 -> top-right, 3 -> bottom-right */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none">
        <DecorativeGrid pattern="triplet-top-right" fillColor="white" />
      </div>

      {/* Bottom-left signature 2x2 black geometric grid accent: 1 -> bottom, 2 -> top */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <DecorativeGrid pattern="hero-checker" fillColor="dark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header row with Title and Description */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b border-[#e7e7e7] mb-10 sm:mb-14 w-full">
          {/* Left side: Category tag + Headline */}
          <div className="space-y-4 shrink-0">
            <div className="flex items-center justify-start">
              <SectionTag text="OUR SERVICES" />
            </div>
            <h1 className="text-4xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.04] text-left">
              <span className="block whitespace-nowrap">A comprehensive</span>
              <span className="block whitespace-nowrap">set of services</span>
            </h1>
          </div>

          {/* Right side: Descriptive Paragraph */}
          <div className="max-w-[520px] lg:pb-3 shrink-0">
            <p className="text-[#0E0E0E] text-base sm:text-lg font-['Mona_Sans:Medium',sans-serif] font-medium leading-[26px] sm:leading-[30px] text-left">
              <span className="lg:block">Lorem ipsum dolor sit amet consectetur senectus velit</span>{" "}
              <span className="lg:block">faucibus quisque at ut vitae platea justo nec mattis.</span>
            </p>
          </div>
        </div>

        {/* 3-Column 2-Row Services Grid Section with exact SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {servicesPageData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService?.(service.title)}
              className="group cursor-pointer flex flex-col justify-between pb-8 border-b border-[#C5C5C5] transition-all"
            >
              <div>
                {/* Service Line Icon SVG */}
                <div className="mb-4 sm:mb-6 h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] flex items-center">
                  <img
                    src={serviceIcons[service.iconType || ""] || iconPlanning}
                    alt={service.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Title and Up-Right Arrow with Yellow Hover and Semi-Bold Styling */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-[28px] lg:text-[30px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] group-hover:text-[#ffd43e] leading-[26px] sm:leading-[38px] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-[#0e0e0e] group-hover:text-[#ffd43e] group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-all duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#646464] text-base sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-[22px] sm:leading-[28px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
