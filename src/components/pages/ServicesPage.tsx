import React from "react"
import SectionTag from "../common/SectionTag"
import { servicesPageData } from "../../data/siteData"

export interface ServicesPageProps {
  onSelectService?: (title: string) => void
  onOpenQuote?: () => void
}

export default function ServicesPage({
  onSelectService,
}: ServicesPageProps) {
  const renderIcon = (type?: string) => {
    switch (type) {
      case "planning":
        // L-shaped architectural floor plan
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="6" y="6" width="14" height="36" />
              <rect x="20" y="24" width="22" height="18" />
            </svg>
          </div>
        )
      case "management":
        // 3 Bar chart / histogram towers
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="6" y="24" width="10" height="18" />
              <rect x="16" y="14" width="10" height="28" />
              <rect x="26" y="6" width="10" height="36" />
            </svg>
          </div>
        )
      case "contracting":
        // Brick wall pattern
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Top Brick */}
              <rect x="14" y="6" width="20" height="10" />
              {/* Middle Row */}
              <rect x="6" y="16" width="18" height="10" />
              <rect x="24" y="16" width="18" height="10" />
              {/* Bottom Row */}
              <rect x="6" y="26" width="36" height="10" />
              <line x1="24" y1="26" x2="24" y2="36" />
            </svg>
          </div>
        )
      case "interior":
        // Armchair
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Backrest */}
              <rect x="14" y="8" width="20" height="18" />
              {/* Armrests */}
              <rect x="8" y="18" width="6" height="16" />
              <rect x="34" y="18" width="6" height="16" />
              {/* Cushion seat */}
              <rect x="14" y="22" width="20" height="12" />
              {/* Legs */}
              <line x1="13" y1="34" x2="13" y2="40" />
              <line x1="35" y1="34" x2="35" y2="40" />
            </svg>
          </div>
        )
      case "exterior":
        // House with pitched roof and horizontal bands
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Roof */}
              <polygon points="24,6 42,20 6,20" />
              {/* Body */}
              <rect x="6" y="20" width="36" height="18" />
              {/* Horizontal Divider */}
              <line x1="6" y1="29" x2="42" y2="29" />
            </svg>
          </div>
        )
      case "space":
        // 3D Isometric wireframe cube
        return (
          <div className="h-12 w-12 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Outer Hexagon */}
              <polygon points="24,6 42,16 42,34 24,44 6,34 6,16" />
              {/* Interior Y junctions */}
              <line x1="24" y1="25" x2="24" y2="44" />
              <line x1="24" y1="25" x2="6" y2="16" />
              <line x1="24" y1="25" x2="42" y2="16" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* Top Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-[#f8f8f8]">
        {/* Top-Right Stepped Decorative Accent */}
        <div
          className="absolute right-0 top-0 pointer-events-none hidden sm:grid grid-cols-2 grid-rows-2 w-32 h-32 lg:w-44 lg:h-44 z-0"
          aria-hidden="true"
        >
          <div className="bg-transparent" />
          <div className="bg-white" />
          <div className="bg-white" />
          <div className="bg-white" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header row with Title and Description */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#e7e7e7]">
            {/* Left side: Category tag + Headline */}
            <div className="space-y-4 max-w-3xl">
              <SectionTag text="OUR SERVICES" />
              <h1 className="text-4xl sm:text-6xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[88px]">
                A comprehensive <br className="hidden sm:inline" />
                set of services
              </h1>
            </div>

            {/* Right side: Descriptive Paragraph */}
            <div className="max-w-[440px] lg:pb-3">
              <p className="text-[#646464] text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[30px]">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                quisque at ut vitae platea justo nec mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column 2-Row Services Grid Section */}
      <section className="bg-[#f8f8f8] pb-24 sm:pb-32 lg:pb-36">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
            {servicesPageData.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService?.(service.title)}
                className="group cursor-pointer flex flex-col justify-between pb-8 border-b border-[#e7e7e7] transition-all"
              >
                <div>
                  {/* Service Line Icon */}
                  <div className="mb-6">{renderIcon(service.iconType)}</div>

                  {/* Title and Up-Right Arrow */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl sm:text-[24px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] group-hover:text-black leading-[32px] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-[#0e0e0e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                  <p className="text-[#646464] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] sm:leading-[30px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
