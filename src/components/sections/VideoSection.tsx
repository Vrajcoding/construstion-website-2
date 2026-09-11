import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
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
    <section className="bg-white pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36 overflow-x-clip">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overlapping Video Hero & Dark Feature Card */}
        <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[748px] flex flex-col lg:block justify-center">
          {/* Top-Left Signature 2x2 White Geometric Grid Accent */}
          <div
            className="absolute top-6 sm:top-12 lg:top-24 left-0 -ml-2 sm:-ml-4 lg:-ml-6 z-10 pointer-events-none hidden sm:grid grid-cols-2 grid-rows-2 w-32 h-32 lg:w-44 lg:h-44"
            aria-hidden="true"
          >
            <div className="bg-white border border-white" />
            <div className="bg-white border border-white" />
            <div className="bg-white border border-white" />
            <div className="bg-transparent border border-transparent" />
          </div>

          {/* Left: Video Preview Thumbnail (Sharp Rectangle, Full Height) */}
          <div className="relative w-full lg:w-[65%] xl:w-[68%] h-[400px] sm:h-[500px] lg:h-[748px] overflow-hidden bg-neutral-900 shadow-xl rounded-none group">
            <img
              src={siteImages.videoThumb}
              alt="Contractor paving stone with hammer"
              className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 rounded-none"
            />
            {/* Subtle dark overlay for depth */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none rounded-none" />

            {/* Centered / Offset Large Yellow Play Button */}
            <button
              onClick={onPlayVideo}
              className="absolute top-1/2 left-1/2 lg:left-[45%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-[136px] lg:h-[136px] bg-[#ffd43e] hover:bg-[#f3c834] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20"
              aria-label="Play Introduction Video"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0e0e0e] translate-x-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Right: Overlapping Dark Feature Card (Expanded Width, Top Offset, Downward Breakout, Full Right Bleed) */}
          <div className="relative -mt-12 sm:-mt-16 mx-3 sm:mx-6 lg:mx-0 lg:mt-0 lg:absolute lg:top-[20%] lg:bottom-[-60px] lg:left-[35%] xl:left-[33%] lg:-right-[50vw] bg-[#0e0e0e] z-20 shadow-2xl flex flex-col justify-center rounded-none">
            <div className="w-full max-w-[880px] pl-8 sm:pl-14 lg:pl-20 xl:pl-28 pr-8 sm:pr-14 lg:pr-20 py-12 sm:py-16 lg:py-24 text-white relative space-y-6 sm:space-y-8">
              {/* Section Category Tag */}
              <div className="flex items-center gap-3.5 select-none">
                <span className="w-7 h-px bg-white" />
                <span className="font-['Mona_Sans:Medium',sans-serif] font-medium text-sm sm:text-base tracking-[0.96px] uppercase text-white">
                  WHY CHOOSING US
                </span>
              </div>

              {/* Main Headline (Properly Spread Out) */}
              <h2 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.15] max-w-[760px]">
                An exceptional quality <br className="hidden sm:inline" />
                that can't be beaten
              </h2>

              {/* Paragraph Copy (Expanded Width for Natural Flow) */}
              <p className="text-[#c5c5c5] text-base sm:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[32px] font-['Mona_Sans:Regular',sans-serif] max-w-[680px]">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                non quisque at ut vitae platea justo nec mattis adipiscing donec
                tellus id vulputate ac nulla ut in aliquam ut pulvinar
                vestibulum nulla nisl.
              </p>

              {/* Pill Button */}
              <div className="pt-2 sm:pt-4">
                <Button variant="outline-white" size="lg" onClick={onOpenQuote}>
                  Learn more
                </Button>
              </div>

              {/* Bottom-Right Signature 2x2 White Geometric Grid Accent */}
              <div
                className="absolute bottom-0 right-0 pointer-events-none grid grid-cols-2 grid-rows-2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                aria-hidden="true"
              >
                <div className="bg-transparent border border-transparent" />
                <div className="bg-white border border-white" />
                <div className="bg-white border border-white" />
                <div className="bg-transparent border border-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Supported By & Client Logos Bar (With balanced top margin below breakout box) */}
        <div className="mt-28 sm:mt-36 lg:mt-44 pt-12 border-t border-[#e7e7e7]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <span className="text-[#0e0e0e] font-['Mona_Sans:Medium',sans-serif] font-medium text-sm sm:text-base tracking-[0.96px] uppercase shrink-0">
              SUPPORTED BY
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center gap-2.5 font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-lg tracking-[0.16em] text-[#0e0e0e]"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0e0e0e]" />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
