import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import SocialIcons from "../common/SocialIcons"
import { siteImages } from "../../data/siteData"

export interface AboutSectionProps {
  onOpenQuote?: () => void
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-white pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-visible"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Worker Photo (Top) + Narrative & Socials (Bottom) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10 z-10">
            {/* Worker Photo with Top-Left Decorative 2x2 Grid */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[535px] overflow-hidden bg-neutral-900 shadow-md rounded-none shrink-0">
              <img
                src={siteImages.aboutWorker}
                alt="Contractor walking on construction site"
                className="w-full h-full object-cover grayscale contrast-105 rounded-none"
              />
              <div className="absolute top-0 left-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="top-left" fillColor="white" />
              </div>
            </div>

            {/* Narrative text & CTAs & Social Bar */}
            <div className="space-y-8 max-w-[540px]">
              <p className="text-[#646464] text-[17px] sm:text-[18px] leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                quisque at ut vitae platea justo nec mattis adipiscing donec
                tellus vulputate ac nulla ut in aliquam ut pulvinar vestibulum
                nulla nisl.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={onOpenQuote}
                >
                  Get a quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const el = document.getElementById("services")
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Learn more
                </Button>
              </div>

              {/* Divider & Social Bar */}
              <div className="pt-6 border-t border-[#e7e7e7]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[15px] sm:text-[16px] font-['Mona_Sans:Regular',sans-serif] font-normal tracking-[0.96px] text-[#0e0e0e] uppercase">
                    FOLLOW OUR WORK ON SOCIAL MEDIA
                  </span>
                  <SocialIcons theme="dark" size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Section Tag + Overlapping Headline (Top) + Full Height Team Photo (Bottom) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Tag & Overlapping Headline */}
            <div className="space-y-6 pt-2 lg:pt-8 shrink-0">
              <SectionTag text="ABOUT US" />

              {/* Overlapping Headline shifted left across the worker photo on desktop */}
              <div className="lg:-ml-52 xl:-ml-60 relative z-20">
                <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[70px] select-none">
                  A team of reliable and <br className="hidden sm:inline" />
                  experienced contractors
                </h2>
              </div>
            </div>

            {/* Team / Construction Framework Photo (Fills vertical space and aligns with bottom of left column) */}
            <div className="relative w-full flex-1 min-h-[400px] sm:min-h-[480px] lg:min-h-[550px] overflow-hidden bg-neutral-900 shadow-md mt-6 rounded-none">
              <img
                src={siteImages.aboutTeam}
                alt="Contractor team reviewing building plans"
                className="w-full h-full object-cover grayscale contrast-105 rounded-none"
              />
              <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="bottom-right" fillColor="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
