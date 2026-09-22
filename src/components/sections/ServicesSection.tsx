import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { servicesData } from "../../data/siteData"

export interface ServicesSectionProps {
  onOpenQuote?: () => void
  onSelectService?: (serviceTitle: string) => void
}

export default function ServicesSection({
  onOpenQuote,
  onSelectService,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative bg-white py-14 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Bottom-left signature 2x2 black geometric grid accent */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <DecorativeGrid pattern="hero-checker" fillColor="dark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with CTAs and Gray Divider Line */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-[#e7e7e7] mb-10 sm:mb-14">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <SectionTag text="OUR SERVICES" />
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
              A comprehensive <br className="hidden sm:inline" />
              set of services
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              showArrow
              fullWidthMobile
              onClick={onOpenQuote}
            >
              Get a quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidthMobile
              onClick={() => {
                const el = document.getElementById("work")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Browse all services
            </Button>
          </div>
        </div>

        {/* 3-Card Services Grid with Gentle Ascending Stair-Step on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {servicesData.map((service, index) => {
            const stairStepClass =
              index === 0
                ? "md:pt-8 lg:pt-16"
                : index === 1
                  ? "md:pt-4 lg:pt-8"
                  : "md:pt-0"

            return (
              <div
                key={service.id}
                onClick={() => onSelectService?.(service.title)}
                className={`group cursor-pointer flex flex-col ${stairStepClass} transition-all duration-300`}
              >
                {/* Responsive Image Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-neutral-100 rounded-none mb-5 sm:mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale contrast-105 transition-transform duration-500 group-hover:scale-105 rounded-none"
                  />
                </div>

                {/* Card Text Content with Bottom Divider Border */}
                <div className="border-b border-[#e7e7e7] pb-6 sm:pb-7 flex flex-col space-y-3">
                  {/* Title & Diagonal Arrow with Yellow Hover */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e] leading-snug sm:leading-[34px] tracking-tight group-hover:text-[#ffd43e] transition-colors">
                      {service.title.split(" ").map((word, idx) => (
                        <span key={idx} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                    <div className="shrink-0 text-[#0e0e0e] group-hover:text-[#ffd43e] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1.5">
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

                  {/* Description Paragraph */}
                  <p className="text-[#646464] text-sm sm:text-base leading-relaxed sm:leading-[26px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
