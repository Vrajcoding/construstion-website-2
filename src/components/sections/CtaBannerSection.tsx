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
    <section className="bg-[#ffd43e] relative overflow-hidden">
      {/* Right-Side Full-Height, Full-Bleed Architectural Photo (Desktop) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] xl:w-[48%] 2xl:w-[48%] h-full z-0 overflow-hidden pointer-events-none bg-[#ffd43e]">
        <img
          src={siteImages.wallImage}
          alt="Modern modular architectural building facade"
          className="w-full h-full object-cover object-center grayscale contrast-105"
        />

        {/* Top-Right Single Box Accent */}
        <div className="absolute top-0 right-0 z-10 pointer-events-none">
          <DecorativeGrid pattern="cta-top-right" fillColor="yellow" />
        </div>

        {/* Yellow 3x2 Accent Grid at Bottom-Right (1 box top center, 2 boxes bottom) */}
        <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
          <DecorativeGrid
            pattern="cta-bottom-right"
            fillColor="yellow"
            className="w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] lg:w-[270px] lg:h-[180px]"
          />
        </div>
      </div>

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 sm:pt-14 pb-8 sm:pb-10 lg:py-24 xl:py-28 lg:min-h-[560px] flex flex-col justify-center">
        <div className="w-full lg:w-[55%] xl:w-[52%] space-y-4 sm:space-y-6">
          {/* Section Category Tag */}
          <SectionTag text="GET IN TOUCH" />

          {/* 2-Line Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[58px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
            <span className="block whitespace-normal lg:whitespace-nowrap">Ready to pull the trigger?</span>
            <span className="block whitespace-normal lg:whitespace-nowrap">Get a quote today</span>
          </h2>

          {/* Description Copy */}
          <p className="text-base sm:text-lg text-[#2f2f2f] leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] max-w-lg lg:max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur senectus velit faucibus non
            quisque at ut vitae platea justo nec mattis adipiscing donec tellus id.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
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
                const el = document.getElementById("contact")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Image: Full-bleed edge-to-edge, flipped with top yellow gradient effect */}
      <div className="lg:hidden w-full relative aspect-[1630/1350] overflow-hidden bg-[#ffd43e] mt-4 sm:mt-6">
        <img
          src={siteImages.wallImage}
          alt="Modern modular architectural building facade"
          className="w-full h-full object-cover object-center grayscale contrast-105 scale-x-[-1]"
        />

        {/* Soft Yellow Top Gradient Overlay blending smoothly into the section */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-44 bg-gradient-to-b from-[#ffd43e] via-[#ffd43e]/80 to-transparent pointer-events-none z-10" />

        {/* Top-Right Single Box Accent on Mobile */}
        <div className="absolute top-0 right-0 z-20 pointer-events-none">
          <DecorativeGrid pattern="cta-top-right" fillColor="yellow" />
        </div>

        {/* Yellow 3x2 Accent Grid at Bottom-Right on Mobile */}
        <div className="absolute bottom-0 right-0 z-20 pointer-events-none">
          <DecorativeGrid
            pattern="cta-bottom-right"
            fillColor="yellow"
            className="w-[150px] h-[100px] sm:w-[210px] sm:h-[140px]"
          />
        </div>
      </div>
    </section>
  )
}
