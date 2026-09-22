import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { siteImages, clientLogos } from "../../data/siteData"

export interface VideoSectionProps {
  onPlayVideo?: () => void
  onOpenQuote?: () => void
}

export default function VideoSection({
  onPlayVideo,
  onOpenQuote,
}: VideoSectionProps) {
  return (
    <section className="bg-white pt-0 overflow-x-clip">
      {/* Full-Width Split Banner: Behind image touches left edge, forward card touches right edge */}
      <div className="w-full relative min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] xl:min-h-[660px] flex flex-col lg:block justify-center overflow-visible">
        {/* Behind Video Thumbnail - Decreased Height, Touches Left Edge, Extends to 60% Width (order-2 on mobile) */}
        <div className="order-2 lg:order-none relative mt-4 lg:mt-0 lg:absolute lg:top-0 lg:left-0 lg:w-[60%] w-full h-[360px] sm:h-[420px] lg:h-[500px] xl:h-[540px] overflow-hidden bg-neutral-900 rounded-none group z-0">
          <img
            src={siteImages.videoThumb}
            alt="Construction site rebar foundation"
            className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 rounded-none"
          />
          {/* Subtle dark overlay for depth */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-none" />

          {/* Top-Left Signature 3-Box White Geometric Grid Accent */}
          <div className="absolute top-0 left-0 z-20 pointer-events-none">
            <DecorativeGrid pattern="corner-triplet" fillColor="white" />
          </div>

          {/* Yellow Play Button - Positioned at exact center of the exposed 40% Behind image part */}
          <button
            onClick={onPlayVideo}
            className="absolute top-1/2 left-1/2 lg:left-[33.3%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#ffd43e] hover:bg-[#f3c834] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 shadow-2xl"
            aria-label="Play Introduction Video"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#0e0e0e] translate-x-0.5 sm:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Forward Dark Feature Card - "WHY CHOOSING US" (order-1 on mobile) */}
        <div className="order-1 lg:order-none relative lg:mt-0 lg:absolute lg:top-[16%] xl:top-[18%] lg:bottom-0 lg:h-[480px] xl:h-[520px] lg:left-[38%] xl:left-[40%] lg:right-0 bg-[#0e0e0e] z-10 flex flex-col justify-center rounded-none overflow-hidden">
          <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12 text-white relative space-y-4 sm:space-y-5 max-w-3xl z-10">
            {/* Section Category Tag */}
            <div className="flex items-center gap-3.5 select-none">
              <span className="w-7 h-px bg-white" />
              <span className="font-['Mona_Sans:Medium',sans-serif] font-medium text-xs sm:text-sm lg:text-base tracking-[0.96px] uppercase text-white">
                WHY CHOOSING US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-tight text-white leading-tight sm:leading-[1.15] max-w-2xl">
              An exceptional quality <br className="hidden sm:inline" />
              that can&apos;t be beaten
            </h2>

            {/* Paragraph Copy */}
            <p className="text-[#c5c5c5] text-sm sm:text-base leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] line-clamp-3 max-w-xl">
              Lorem ipsum dolor sit amet consectetur senectus velit faucibus
              non quisque at ut vitae platea justo nec mattis adipiscing donec
              tellus id vulputate ac nulla ut in aliquam ut pulvinar
              vestibulum nulla nisl.
            </p>

            {/* Pill Button */}
            <div className="pt-2">
              <Button
                variant="outline-white"
                size="lg"
                fullWidthMobile
                onClick={onOpenQuote}
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Bottom-Right Signature 2x2 White Geometric Grid Accent */}
          <div className="absolute bottom-0 right-0 pointer-events-none z-20">
            <DecorativeGrid pattern="hero-checker" fillColor="white" />
          </div>
        </div>
      </div>

      {/* Supported By & Client Logos Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20 lg:mt-24 pt-10 sm:pt-12 pb-14 sm:pb-18 lg:pb-24 border-t border-[#e7e7e7]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-12">
          <span className="text-[#0e0e0e] font-['Mona_Sans:Medium',sans-serif] font-medium text-xs sm:text-sm lg:text-base tracking-[0.96px] uppercase shrink-0">
            SUPPORTED BY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            {clientLogos.map((client) => (
              <img
                key={client.id}
                src={client.logo}
                alt={client.name}
                className="h-5 sm:h-6 lg:h-7 w-auto max-w-28 sm:max-w-none object-contain select-none opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
