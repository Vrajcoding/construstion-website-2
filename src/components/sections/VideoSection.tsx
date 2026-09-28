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
      {/* MOBILE LAYOUT (block lg:hidden) - Matches user reference Image 2 */}
      <div className="block lg:hidden">
        {/* 1. Dark Card with Top-Left Stepped Accent */}
        <div className="bg-[#0e0e0e] text-white relative px-6 py-10 sm:px-10 sm:py-12 space-y-5 overflow-hidden">
          {/* Top-Left Signature 3-Box White Stepped Accent */}
          <div className="absolute top-0 left-0 z-10 pointer-events-none">
            <DecorativeGrid pattern="corner-triplet" fillColor="white" />
          </div>

          <div className="relative z-10 space-y-4 pt-12 sm:pt-14">
            {/* Section Category Tag */}
            <div className="flex items-center gap-3.5 select-none">
              <span className="w-7 h-px bg-white" />
              <span className="font-['Mona_Sans:Medium',sans-serif] font-medium text-xs sm:text-sm tracking-[0.96px] uppercase text-white">
                WHY CHOOSING US
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-['Mona_Sans:Medium',sans-serif] font-medium tracking-tight text-white leading-tight sm:leading-[1.15]">
              An exceptional quality <br />
              that can&apos;t be beaten
            </h2>

            {/* Paragraph */}
            <p className="text-[#c5c5c5] text-sm sm:text-base leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif]">
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
        </div>

        {/* 2. Video Thumbnail Image Below the Card */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-neutral-900 group">
          <img
            src={siteImages.videoThumb}
            alt="Construction site rebar foundation"
            className="w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Yellow Play Button */}
          <button
            onClick={onPlayVideo}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#ffd43e] hover:bg-[#f3c834] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 shadow-2xl"
            aria-label="Play Introduction Video"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#0e0e0e] translate-x-0.5 sm:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* DESKTOP SPLIT BANNER (hidden lg:block) */}
      <div className="hidden lg:block w-full relative min-h-[560px] xl:min-h-[620px] overflow-visible">
        {/* Behind Video Thumbnail - Touches Left Edge, Extends to 60% Width */}
        <div className="absolute top-0 left-0 w-[60%] h-[560px] xl:h-[620px] overflow-hidden bg-neutral-900 rounded-none group z-0">
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

          {/* Yellow Play Button - Positioned at exact center of the exposed Behind image part */}
          <button
            onClick={onPlayVideo}
            className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 xl:w-24 xl:h-24 bg-[#ffd43e] hover:bg-[#f3c834] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 shadow-2xl"
            aria-label="Play Introduction Video"
          >
            <svg
              className="w-8 h-8 xl:w-10 xl:h-10 text-[#0e0e0e] translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Forward Dark Feature Card - "WHY CHOOSING US", extending outside below the image on desktop */}
        <div className="absolute top-16 xl:top-20 -bottom-20 xl:-bottom-24 left-[36%] xl:left-[38%] right-0 bg-[#0e0e0e] z-10 flex flex-col justify-center rounded-none overflow-hidden shadow-2xl">
          <div className="w-full px-12 xl:px-16 py-10 xl:py-14 text-white relative space-y-5 xl:space-y-6 max-w-3xl z-10">
            {/* Section Category Tag */}
            <div className="flex items-center gap-3.5 select-none">
              <span className="w-7 h-px bg-white" />
              <span className="font-['Mona_Sans:Medium',sans-serif] font-medium text-sm lg:text-base tracking-[0.96px] uppercase text-white">
                WHY CHOOSING US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-tight text-white leading-tight sm:leading-[1.15] max-w-2xl">
              An exceptional quality <br className="hidden sm:inline" />
              that can&apos;t be beaten
            </h2>

            {/* Paragraph Copy */}
            <p className="text-[#c5c5c5] text-base leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] line-clamp-3 max-w-xl">
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

      {/* Supported By & Client Logos Bar - with proper desktop spacing so remaining structure shows cleanly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20 lg:mt-36 xl:mt-44 pt-10 sm:pt-12 lg:pt-[120px] pb-14 sm:pb-18 lg:pb-[240px] border-t border-[#e7e7e7]">
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
