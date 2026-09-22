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
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] xl:w-[46%] 2xl:w-[44%] h-full z-0 overflow-hidden pointer-events-none bg-[#ffd43e]">
        <img
          src={siteImages.wallImage}
          alt="Modern modular architectural building facade"
          className="w-full h-full object-cover object-center grayscale contrast-105 scale-x-[-1]"
        />

        {/* Soft Yellow Top Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ffd43e] via-[#ffd43e]/75 to-transparent pointer-events-none z-10" />

        {/* Signature 2x3 Stepped Cutout Grid anchored at Bottom-Right */}
        <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
          <DecorativeGrid
            pattern="cta-bottom-right"
            fillColor="yellow"
            className="w-48 h-32 sm:w-60 sm:h-40 lg:w-[270px] lg:h-[180px] xl:w-[300px] xl:h-[200px]"
          />
        </div>
      </div>

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 sm:pt-14 pb-8 sm:pb-10 lg:py-24 xl:py-28 lg:min-h-[560px] flex flex-col justify-center">
        <div className="w-full lg:w-[50%] xl:w-[48%] space-y-4 sm:space-y-6">
          {/* Section Category Tag */}
          <SectionTag text="GET IN TOUCH" />

          {/* 2-Line Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
            Ready to pull the trigger? <br className="hidden sm:inline" />
            Get a quote today
          </h2>

          {/* Description Copy */}
          <p className="text-base sm:text-lg text-[#2f2f2f] leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] max-w-lg">
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
      </div>
    </section>
  )
}
