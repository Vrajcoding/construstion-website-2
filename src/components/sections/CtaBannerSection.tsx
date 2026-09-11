import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { siteImages } from "../../data/siteData"

export interface CtaBannerSectionProps {
  onOpenQuote?: () => void
}

export default function CtaBannerSection({
  onOpenQuote,
}: CtaBannerSectionProps) {
  return (
    <section className="bg-[#ffd43e] relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10 w-full lg:w-[60%] xl:w-[58%] space-y-6 sm:space-y-8">
          {/* Section Category Tag */}
          <SectionTag text="GET IN TOUCH" />

          {/* 2-Line Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12] sm:leading-[1.15] xl:leading-[70px]">
            <span className="block">Ready to pull the trigger?</span>
            <span className="block">Get a quote today</span>
          </h2>

          {/* Description Copy */}
          <p className="text-[17px] sm:text-[18px] text-[#2f2f2f] leading-[28px] sm:leading-[30px] font-['Mona_Sans:Regular',sans-serif] max-w-[590px]">
            Lorem ipsum dolor sit amet consectetur sit id quis magna imperdiet
            neque magnis nam eu volutpat tellus est elit aliquam ut suscipit.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
            <Button variant="primary" size="lg" showArrow onClick={onOpenQuote}>
              Get a quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById("contact")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact us
            </Button>
          </div>
        </div>

        {/* Right: Modern Building Architecture Photo (Full Height on Desktop, Sharp Rectangle) */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[40%] xl:w-[38%] overflow-hidden rounded-none">
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[460px] bg-neutral-900 shadow-xl rounded-none">
            <img
              src={siteImages.ctaBuilding}
              alt="Modern modular architectural building"
              className="w-full h-full object-cover grayscale contrast-105 rounded-none"
            />

            {/* Signature Top-Right Yellow Accent Grid */}
            <div
              className="absolute top-0 right-0 pointer-events-none hidden sm:grid grid-cols-2 grid-rows-2 w-28 h-28 lg:w-36 lg:h-36"
              aria-hidden="true"
            >
              <div className="bg-transparent border border-transparent" />
              <div className="bg-[#ffd43e] border border-[#ffd43e]" />
              <div className="bg-transparent border border-transparent" />
              <div className="bg-transparent border border-transparent" />
            </div>

            {/* Signature Bottom-Right Yellow Accent Grid */}
            <div
              className="absolute bottom-0 right-0 pointer-events-none grid grid-cols-3 grid-rows-2 w-36 h-24 sm:w-48 sm:h-32 lg:w-60 lg:h-40"
              aria-hidden="true"
            >
              <div className="bg-transparent border border-transparent" />
              <div className="bg-[#ffd43e] border border-[#ffd43e]" />
              <div className="bg-transparent border border-transparent" />
              <div className="bg-[#ffd43e] border border-[#ffd43e]" />
              <div className="bg-transparent border border-transparent" />
              <div className="bg-[#ffd43e] border border-[#ffd43e]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
