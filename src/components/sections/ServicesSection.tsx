import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
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
    <section id="services" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Section Header with CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="OUR SERVICES" />
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1] sm:leading-[70px]">
              A comprehensive <br className="hidden sm:inline" />
              set of services
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" showArrow onClick={onOpenQuote}>
              Get a quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById("work")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Browse all services
            </Button>
          </div>
        </div>

        {/* 3-Card Services Grid with Ascending Stair-Step Offsets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {servicesData.map((service, index) => {
            // Ascending stair-step layout matching Figma & reference image
            const stairStepClass =
              index === 0
                ? "md:pt-20 lg:pt-32"
                : index === 1
                  ? "md:pt-10 lg:pt-16"
                  : "md:pt-0 lg:pt-0"

            return (
              <div
                key={service.id}
                onClick={() => onSelectService?.(service.title)}
                className={`group cursor-pointer flex flex-col ${stairStepClass} transition-all duration-300`}
              >
                {/* Sharp Rectangle Image (rounded-none) */}
                <div className="relative w-full aspect-square sm:aspect-auto sm:h-[350px] lg:h-[388px] overflow-hidden bg-neutral-100 rounded-none mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale contrast-105 transition-transform duration-500 group-hover:scale-105 rounded-none"
                  />
                </div>

                {/* Card Text Content with Bottom Divider Border */}
                <div className="border-b border-[#e7e7e7] pb-6 sm:pb-7 flex flex-col space-y-3">
                  {/* Title & Diagonal Arrow */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] leading-[36px] sm:leading-[40px] tracking-tight group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    <div className="shrink-0 text-[#0e0e0e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
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
                  <p className="text-[#646464] text-base sm:text-[18px] leading-[28px] sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif]">
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
