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
      className="bg-white py-14 sm:py-20 lg:py-28 overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* MOBILE LAYOUT (block lg:hidden) - Exact 7-Item Sequence as requested */}
        <div className="block lg:hidden space-y-6 sm:space-y-8">
          {/* 1. Header */}
          <SectionTag text="ABOUT US" />

          {/* 2. Title */}
          <h2 className="text-3xl sm:text-5xl font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
            A team of reliable and <br className="hidden sm:inline" />
            experienced contractors
          </h2>

          {/* 3. Image (Worker Photo with Top-Left Decorative 2x2 Grid) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-900 shadow-md rounded-none">
            <img
              src={siteImages.aboutWorker}
              alt="Contractor walking on construction site"
              className="w-full h-full object-cover grayscale contrast-105 rounded-none"
            />
            <div className="absolute top-0 left-0 z-10 pointer-events-none">
              <DecorativeGrid pattern="top-left" fillColor="white" />
            </div>
          </div>

          {/* 4. Paragraph */}
          <p className="text-[#646464] text-base sm:text-lg leading-relaxed sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium">
            Lorem ipsum dolor sit amet consectetur senectus velit faucibus
            quisque at ut vitae platea justo nec mattis adipiscing donec
            tellus vulputate ac nulla ut in aliquam ut pulvinar vestibulum
            nulla nisl.
          </p>

          {/* 5. Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
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
                const el = document.getElementById("services")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Learn more
            </Button>
          </div>

          {/* 6. Social Media Part */}
          <div className="pt-6 border-t border-[#e7e7e7]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-['Mona_Sans:Regular',sans-serif] font-normal tracking-[0.96px] text-[#0e0e0e] uppercase">
                FOLLOW OUR WORK ON SOCIAL MEDIA
              </span>
              <SocialIcons theme="dark" size="sm" />
            </div>
          </div>

          {/* 7. Image (Team Photo with Bottom-Right Decorative Grid) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-900 shadow-md rounded-none">
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

        {/* DESKTOP LAYOUT (hidden lg:grid) - 2-Column Split */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Worker Photo (Top) + Narrative & Socials (Bottom) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10 z-10">
            {/* Worker Photo with Top-Left Decorative 2x2 Grid */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 shadow-md rounded-none shrink-0">
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
            <div className="space-y-6 sm:space-y-8 max-w-xl">
              <p className="text-[#646464] text-base sm:text-lg leading-relaxed sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                quisque at ut vitae platea justo nec mattis adipiscing donec
                tellus vulputate ac nulla ut in aliquam ut pulvinar vestibulum
                nulla nisl.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
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
                  <span className="text-xs sm:text-sm font-['Mona_Sans:Regular',sans-serif] font-normal tracking-[0.96px] text-[#0e0e0e] uppercase">
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
            <div className="space-y-4 sm:space-y-6 pt-2 lg:pt-6 shrink-0">
              <SectionTag text="ABOUT US" />

              {/* Overlapping Headline on desktop with safe margin */}
              <div className="lg:-ml-20 xl:-ml-32 2xl:-ml-40 relative z-20">
                <h2 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1] select-none">
                  A team of reliable and <br className="hidden sm:inline" />
                  experienced contractors
                </h2>
              </div>
            </div>

            {/* Team / Construction Framework Photo */}
            <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden bg-neutral-900 shadow-md mt-6 rounded-none">
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
