import React from "react"
import { motion } from "framer-motion"
import SectionTag from "../../common/SectionTag"
import Button from "../../common/Button"
import DecorativeGrid from "../../common/DecorativeGrid"
import { valuesData } from "../../../data/siteData"


export interface AboutValuesSectionProps {
  onContactClick?: () => void
}

export default function AboutValuesSection({
  onContactClick,
}: AboutValuesSectionProps) {
  // Render custom clean lineart SVG icons matching the reference images
  const renderValueIcon = (type: string) => {
    switch (type) {
      case "quality":
        // Trophy Cup Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M12 8H36V22C36 28.6274 30.6274 34 24 34C17.3726 34 12 28.6274 12 22V8Z" />
              <path d="M12 12H7C5.89543 12 5 12.8954 5 14V18C5 21.3137 7.68629 24 11 24H12" />
              <path d="M36 12H41C42.1046 12 43 12.8954 43 14V18C43 21.3137 40.3137 24 37 24H36" />
              <line x1="24" y1="34" x2="24" y2="40" />
              <path d="M14 40H34" />
            </svg>
          </div>
        )

      case "commitment":
        // Shield with Checkmark Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M24 6L10 12V22C10 32.5 16 39.5 24 42C32 39.5 38 32.5 38 22V12L24 6Z" />
              <path d="M18 23L22 27L30 19" />
            </svg>
          </div>
        )

      case "innovation":
        // Gear / Cog Mechanism Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <circle cx="24" cy="24" r="6" />
              <path d="M21.5 6H26.5L27.5 10.5L30.8 11.8L34.5 9.2L38 12.7L35.4 16.4L36.7 19.7L41.2 20.7V25.7L36.7 26.7L35.4 30L38 33.7L34.5 37.2L30.8 34.6L27.5 35.9L26.5 40.4H21.5L20.5 35.9L17.2 34.6L13.5 37.2L10 33.7L12.6 30L11.3 26.7L6.8 25.7V20.7L11.3 19.7L12.6 16.4L10 12.7L13.5 9.2L17.2 11.8L20.5 10.5L21.5 6Z" />
            </svg>
          </div>
        )

      case "openness":
        // Globe Wireframe Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <circle cx="24" cy="24" r="18" />
              <line x1="6" y1="24" x2="42" y2="24" />
              <line x1="24" y1="6" x2="24" y2="42" />
              <path d="M9.5 14C14 17 19 18 24 18C29 18 34 17 38.5 14" />
              <path d="M9.5 34C14 31 19 30 24 30C29 30 34 31 38.5 34" />
              <ellipse cx="24" cy="24" rx="9" ry="18" />
            </svg>
          </div>
        )

      case "growth":
        // 3 Ascending Bar Chart Columns Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="8" y="26" width="8" height="16" />
              <rect x="16" y="18" width="8" height="24" />
              <rect x="24" y="10" width="8" height="32" />
            </svg>
          </div>
        )

      case "leadership":
        // Waving Flag on Pole Icon
        return (
          <div className="w-full h-full text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <line x1="12" y1="8" x2="12" y2="42" />
              <path d="M12 10C17 7 23 13 28 10C33 7 38 10 38 10V26C38 26 33 23 28 26C23 29 17 23 12 26V10Z" />
            </svg>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="bg-[#f8f8f8] py-[120px] sm:py-20 lg:py-56 relative overflow-visible">
      {/* Top-Right Stepped Decorative Grid Pattern (Predefined Component) */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="hero-checker" fillColor="white" />
      </div>

      {/* Bottom-Left 4-Boxes Staircase Accent */}
      <div className="absolute bottom-0 left-0 z-0 pointer-events-none">
        <DecorativeGrid pattern="four-boxes" fillColor="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Pinned / Sticky Centered Values Information */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-4 sm:space-y-6 pt-2">
            {/* Tag (Predefined Component) */}
            <SectionTag text="VALUES" theme="dark" />

            {/* Title (62px on large display) */}
            <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
              Our values
            </h2>

            {/* Description */}
            <p className="text-[#646464] text-base sm:text-lg lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[30px] max-w-md pt-1">
              Lorem ipsum dolor sit amet consectetur non sit elementum sem
              libero a tellus id pretium nisi posuere consectetur eu.
            </p>

            {/* Contact Us Outline Pill Button */}
            <div className="pt-2 sm:pt-4">
              <Button
                variant="outline"
                size="md"
                fullWidthMobile
                className="text-[16px] lg:text-[18px]"
                onClick={onContactClick}
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Right Column: 2-Column Responsive / Scrolling Values Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-12 gap-y-12 sm:gap-y-16">
              {valuesData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Icon (54x54 on mobile, 64x64 on large display) with Subtle Hover Lift */}
                    <div className="mb-6 transform group-hover:-translate-y-1.5 transition-transform duration-300 w-[54px] h-[54px] sm:w-14 sm:h-14 lg:w-[64px] lg:h-[64px] text-[#0e0e0e]">
                      {renderValueIcon(item.iconType)}
                    </div>

                    {/* Title (20px on mobile, sm:text-[26px]) */}
                    <h3 className="text-[20px] sm:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] mb-3 leading-[32px]">
                      {item.title}
                    </h3>

                    {/* Description (16px on mobile, sm:text-[17px]) */}
                    <p className="text-[#646464] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] sm:leading-[30px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Divider Line */}
                  <div className="mt-8 pt-2 border-b border-[#e7e7e7] w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
